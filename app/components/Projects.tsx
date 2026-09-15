import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mb-12 scroll-mt-16">
      <header className="mb-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          Selected work
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold">Projects I&apos;ve built</h2>
        <p className="mt-2 max-w-md text-sm text-[var(--muted)]">
          A selection of products, platforms and experiments I&apos;ve built.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
