import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
}

export default function ProjectCard({
  title = "Sistema Integral de Exhibición",
  description = "Platform for managing product displays across multiple stores with real-time inventory tracking and analytics dashboard.",
  technologies = ["React", "TypeScript", "Node.js", "PostgreSQL", "Azure"],
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  githubUrl = "#",
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/50">
      {/* Project Image with Overlay */}
      <div className="relative h-48 ">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label={`View ${title} code on GitHub`}
          >
            <Github size={16} />
            <span>Code</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
