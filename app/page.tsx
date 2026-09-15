import ThemeSwitch from "./components/ThemeSwitch";
import TechLoop from "./components/TechLoop";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

/** The page is fully static, so it paints on arrival — nothing here waits on
 *  hydration. Entrance is CSS-only, staggered by a small per-section delay. */
const sections = [
  { key: "hero", node: <Hero /> },
  { key: "about", node: <AboutMe /> },
  { key: "tech", node: <TechLoop /> },
  { key: "work", node: <WorkExperience /> },
  { key: "projects", node: <Projects /> },
  { key: "footer", node: <Footer /> },
];

export default function Home() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-16">
          <ThemeSwitch />
        </div>

        {sections.map(({ key, node }, i) => (
          <div
            key={key}
            className="rise-in"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {node}
          </div>
        ))}
      </div>
    </main>
  );
}
