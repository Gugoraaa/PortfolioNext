"use client";
import LogoLoop from "./LogoLoop/LogoLoop";
import SectionHeader from "./SectionHeader";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiNestjs,
  SiSupabase,
  SiPrisma,
  SiDocker,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

/** Deliberately short. Listing everything you have ever touched reads as
 *  junior; this is the set worth defending in a technical interview. */
const coreStack = [
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <DiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <IoLogoVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
  { node: <FaLinux />, title: "Linux", href: "https://www.linux.org" },
];

const alsoWorkedWith =
  "Python · C++ · Java · Go · Swift · Hono · Express · Angular · Spring Boot · MySQL · Tailwind CSS · Railway · Microsoft Azure · Bash · Bun · Turborepo · Vitest · Postman";

export default function TechLoop() {
  return (
    <section className="mb-12">
      <SectionHeader
        eyebrow="Stack"
        title="What I work with"
        subtitle="The tools I reach for by default, and go deep in."
      />
      <LogoLoop
        logos={coreStack}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Core technologies"
      />
      <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
        <span className="font-medium text-[var(--text)]">
          Also worked with:
        </span>{" "}
        {alsoWorkedWith}
      </p>
    </section>
  );
}
