import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";
import Footer from "../../components/Footer";
import ProjectMeta from "../../components/ProjectMeta";
import { getCardTech, getProjectBySlug, projects } from "../../data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const overview = project.overview ?? project.description;

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-sm text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-10">
          <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {project.shortDescription}
          </p>

          <ProjectMeta
            rows={[
              { label: "Role", value: project.role },
              { label: "Year", value: project.year },
              { label: "Stack", value: getCardTech(project).join(" · ") },
            ]}
          />

          {(project.website || project.github || project.privateRepo) && (
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the ${project.title} live site (opens in a new tab)`}
                  className="rounded-sm underline underline-offset-4 transition-colors hover:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  View Website <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the ${project.title} source on GitHub (opens in a new tab)`}
                  className="rounded-sm underline underline-offset-4 transition-colors hover:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.privateRepo && (
                <span className="inline-flex items-center gap-2 text-[var(--muted)]">
                  <Lock size={14} aria-hidden="true" />
                  Private project
                </span>
              )}
            </div>
          )}
        </header>

        {overview && (
          <Section title="Overview">
            <p className="max-w-2xl leading-relaxed">{overview}</p>
          </Section>
        )}

        {project.problem && (
          <Section title="Problem">
            <p className="max-w-2xl leading-relaxed">{project.problem}</p>
          </Section>
        )}

        {project.solution && (
          <Section title="Solution">
            <p className="max-w-2xl leading-relaxed">{project.solution}</p>
          </Section>
        )}

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <Section title="Key features">
            <ul className="max-w-2xl list-disc space-y-2 pl-5 leading-relaxed">
              {project.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <Section title="Engineering highlights">
            <div className="max-w-2xl space-y-6">
              {project.challenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 className="mb-1.5 font-semibold">{challenge.title}</h3>
                  <p className="leading-relaxed text-[var(--muted)]">
                    {challenge.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="Technologies">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <li
                key={item}
                className="rounded-md border border-[var(--card-border)] px-2.5 py-1 text-xs text-[var(--muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Footer />
      </div>
    </main>
  );
}
