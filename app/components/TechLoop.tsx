"use client";
import LogoLoop from "./LogoLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiHono,
  SiNestjs,
  SiExpress,
  SiAngular,
  SiSpringboot,
  SiPrisma,
  SiDocker,
  SiPostman,
  SiSupabase,
  SiSwift,
  SiGo,
  SiBun,
  SiTurborepo,
  SiVitest,
  SiRailway,
  SiGnubash,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaPython, FaJava, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export default function TechLoop() {
  const techLogos = [
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    { node: <FaPython />, title: "Python", href: "https://www.python.org" },
    { node: <TbBrandCpp />, title: "C++", href: "https://cplusplus.com" },
    { node: <FaJava />, title: "Java", href: "https://www.java.com" },
    { node: <SiGo />, title: "Go", href: "https://go.dev" },
    { node: <SiSwift />, title: "Swift", href: "https://www.swift.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiHono />, title: "Hono", href: "https://hono.dev" },
    { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiAngular />, title: "Angular", href: "https://angular.dev" },
    {
      node: <SiSpringboot />,
      title: "Spring Boot",
      href: "https://spring.io/projects/spring-boot",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <DiRedis />, title: "Redis", href: "https://redis.io" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <IoLogoVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiRailway />, title: "Railway", href: "https://railway.app" },
    {
      node: <VscAzure />,
      title: "Microsoft Azure",
      href: "https://azure.microsoft.com",
    },
    { node: <FaGitAlt />, title: "Git", href: "https://git-scm.com" },
    { node: <FaLinux />, title: "Linux", href: "https://www.linux.org" },
    { node: <SiGnubash />, title: "Bash", href: "https://www.gnu.org/software/bash" },
    { node: <SiBun />, title: "Bun", href: "https://bun.sh" },
    { node: <SiTurborepo />, title: "Turborepo", href: "https://turbo.build" },
    { node: <SiVitest />, title: "Vitest", href: "https://vitest.dev" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
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
        ariaLabel="Technologies I work with"
      />
    </section>
  );
}
