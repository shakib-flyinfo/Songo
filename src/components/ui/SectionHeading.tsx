export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-1.5 text-sm text-ink-500">{subtitle}</p>}
    </div>
  );
}
