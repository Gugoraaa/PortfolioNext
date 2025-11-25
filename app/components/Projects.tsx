import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2  inline-block">
        Projects
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="BiciTec"
          description="BiciTec is an IoT-powered platform that manages campus bicycle systems through user authentication, sensor-based tracking, and real-time monitoring of availability, speed, and usage patterns. It improves control, reduces misuse, and provides actionable data for operational decisions."
          technologies={[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Redis",
            "JWT",
            "Express.js",
          ]}
          image="./img/Preview1.png"
          githubUrl="https://github.com/Gugoraaa/BiciTec?tab=readme-ov-file"
        />
        <ProjectCard
          title="FitTrack"
          description="FitTrack_frontend is a modern, React-based frontend scaffold designed for building scalable fitness tracking applications. It leverages TypeScript, Vite, TailwindCSS, and a modular architecture to deliver a fast, maintainable, and visually cohesive user interface."
          technologies={[
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "JWT",
            "Express.js",
          ]}
          image="./img/Preview3.png"
          githubUrl="https://github.com/Gugoraaa/FitTrack_frontend"
        />
        <ProjectCard
          title="ChefOps"
          description="ChefOps is a kitchen order management application designed to help restaurants manage and track orders by status (Queued, Cooking, Completed, Canceled) in real time."
          technologies={["React", "Node.js", "TypeScript", "Tailwind CSS"]}
          image="./img/Preview2.png"
          githubUrl="https://github.com/Gugoraaa/ChefOps"
        />
      </section>
    </>
  );
}
