export function Metric({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="metric">
      <span className="metric-value">{value}</span>
      <span className="metric-title">{title}</span>
      <span className="metric-sub">{subtitle}</span>
    </div>
  );
}
