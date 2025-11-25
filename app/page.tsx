"use client";

import { useEffect, useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import TechLoop from "./components/TechLoop";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main
      className={`min-h-screen py-16 px-4 transition-opacity duration-500 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-16">
          <ThemeSwitch />
        </div>

        <Hero />
        <AboutMe />
        <TechLoop />
        <WorkExperience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
