import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mb-12 scroll-mt-16">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects I've built"
        subtitle="Products and platforms, with the engineering decisions behind them."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
