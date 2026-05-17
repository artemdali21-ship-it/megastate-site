'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    uniforms: { time: { value: number }; resolution: { value: THREE.Vector2 } };
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Shader adapted to olive/stone palette — soft warm lines on light bg
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.03;
        float lineWidth = 0.0015;

        // olive: (30, 51, 40) / 255 ≈ (0.118, 0.2, 0.157)
        // accent-soft: (138, 135, 110) / 255 ≈ (0.54, 0.53, 0.43)
        vec3 olive = vec3(0.12, 0.20, 0.16);
        vec3 stone = vec3(0.54, 0.53, 0.43);

        float r = 0.0;
        float g = 0.0;
        for (int i = 0; i < 5; i++) {
          r += lineWidth * float(i * i) / abs(fract(t + float(i) * 0.02) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.18));
          g += lineWidth * float(i * i) / abs(fract(t + 0.3 + float(i) * 0.015) * 5.0 - length(uv) + mod(uv.x - uv.y, 0.22));
        }

        vec3 color = mix(olive, stone, r) * (r + g) * 0.85;
        gl_FragColor = vec4(color, min(r + g, 0.5));
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
    };
    onResize();
    window.addEventListener('resize', onResize, { passive: true });

    let animationId = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      uniforms.time.value += 0.04;
      renderer.render(scene, camera);
      if (sceneRef.current) sceneRef.current.animationId = animationId;
    };

    sceneRef.current = { renderer, uniforms, animationId: 0 };
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.55,
        mixBlendMode: 'multiply',
      }}
    />
  );
}
