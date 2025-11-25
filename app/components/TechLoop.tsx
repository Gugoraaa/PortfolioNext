"use client";
import LogoLoop from "./LogoLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiAstro,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiDocker,
  SiPostman,
  SiSupabase,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export default function TechLoop() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <DiRedis />, title: "Redis", href: "https://redis.io" },
    { node: <TbBrandCpp />, title: "C++", href: "https://cplusplus.com" },
    { node: <FaPython />, title: "Python", href: "https://www.python.org" },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
    { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.io" },
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <IoLogoVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <FaGitAlt />, title: "Git", href: "https://github.com" },
    { node: <FaLinux />, title: "Linux", href: "https://www.linux.org" },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2  inline-block">
        Technologies
      </h2>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </section>
  );
}
