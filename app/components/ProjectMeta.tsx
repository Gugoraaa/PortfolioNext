interface MetaRow {
  label: string;
  value?: string;
}

export default function ProjectMeta({ rows }: { rows: MetaRow[] }) {
  const visible = rows.filter((row) => row.value);
  if (visible.length === 0) return null;

  return (
    <dl className="mt-8 space-y-2 text-sm">
      {visible.map((row) => (
        <div key={row.label} className="flex gap-4">
          <dt className="w-20 shrink-0 text-[var(--muted)]">{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
