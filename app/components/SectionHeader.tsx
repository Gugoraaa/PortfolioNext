export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-8">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-md text-sm text-[var(--muted)]">{subtitle}</p>
      )}
    </header>
  );
}
