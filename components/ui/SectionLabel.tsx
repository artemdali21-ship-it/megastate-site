interface SectionLabelProps {
  num: string;
  text: string;
}

export default function SectionLabel({ num, text }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span style={{ color: 'var(--accent-soft)' }}>{num}</span>
      <span className="section-label-line" />
      <span>{text}</span>
    </div>
  );
}
