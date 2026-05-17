// glassmorphism feature card — adapted from 21st.dev feature grid patterns
import MotionFadeUp from './MotionFadeUp';

interface FeatureCardProps {
  num: string;
  title: string;
  text: string;
  delay?: number;
}

export default function FeatureCard({ num, title, text, delay = 0 }: FeatureCardProps) {
  return (
    <MotionFadeUp delay={delay}>
      <div className="feature-card">
        <span className="feature-card-num">{num}</span>
        <h3 style={{ marginTop: '16px', fontSize: '20px' }}>{title}</h3>
        <p style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '16px' }}>{text}</p>
      </div>
    </MotionFadeUp>
  );
}
