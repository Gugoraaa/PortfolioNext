import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { getCardHighlight, getCardTech, type Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const tech = getCardTech(project);
  const highlight = getCardHighlight(project);

  return (
    <SpotlightCard className="reveal group relative flex flex-col rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5 transition-colors duration-300 hover:border-[var(--card-border-hover)] focus-within:border-[var(--card-border-hover)] sm:p-6">
      <h3 className="flex items-start gap-1 text-xl font-semibold tracking-tight">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-sm after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-current"
        >
          {project.title}
        </Link>
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="mt-1.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-60 group-focus-within:opacity-60"
        />
      </h3>

      <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-[var(--muted)]">
        {project.shortDescription}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-medium tabular-nums">
          {project.metrics.map((metric, i) => (
            <li key={metric} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-[var(--card-border-hover)]">
                  ·
                </span>
              )}
              {metric}
            </li>
          ))}
        </ul>
      )}

      {highlight && (
        <p className="mt-4 border-l-2 border-[var(--card-border)] pl-3 text-[13px] leading-snug text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--card-border-hover)]">
          Read: {highlight.charAt(0).toLowerCase() + highlight.slice(1)}
        </p>
      )}

      <ul className="mt-4 mb-5 flex flex-wrap gap-1.5">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-md border border-[var(--card-border)] px-2 py-0.5 text-[11px] text-[var(--muted)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--card-border)] pt-4 text-xs text-[var(--muted)]">
        {project.year && <span>{project.year}</span>}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${project.title} live site (opens in a new tab)`}
            className="rounded-sm transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            Live <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View the ${project.title} source on GitHub (opens in a new tab)`}
            className="rounded-sm transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.privateRepo && (
          <span className="inline-flex items-center gap-1.5">
            <Lock size={12} aria-hidden="true" />
            Private project
          </span>
        )}
      </div>
    </SpotlightCard>
  );
}
