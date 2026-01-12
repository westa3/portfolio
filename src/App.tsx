import { useState } from "react";
import { sections } from "./constants/sections";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Footer } from "./components/Footer";

import { awards } from "./data/awards";
import { workingPapers, publishedPapers } from "./data/papers";
// import { projects } from "./data/projects"; // will come back to this

import { AboutSection } from "./sections/about/AboutSection";
import { ExperienceSection } from "./sections/experience/ExperienceSection";
import { ProjectsSection } from "./sections/projects/ProjectsSection";
import { SkillsSection } from "./sections/skills/SkillsSection";
import { AwardsPapersSection } from "./sections/awardspapers/AwardsPapersSection";
import { InterestsSection } from "./sections/interests/InterestsSection";

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [awpView, setAwpView] = useState<"awards" | "papers">("awards");

  useScrollSpy(sections, setActive);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    window.location.hash = id;
  };


  return (
    <div className="app">
      {/* Top Bar */}
      <header className="topbar">
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="brand">
          {sections.find(s => s.id === active)?.label ?? "About Me"}
        </h1>
      </header>

      {/* Side Panel */}
      <aside className={`sidepanel ${open ? "open" : ""}`}>
        <nav>
          {sections.map((s) => (
            <button
              key={s.id}
              className={active === s.id ? "active" : ""}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Content */}
      <main className="content">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        <AwardsPapersSection
          awpView={awpView}
          setAwpView={setAwpView}
          awards={awards}
          workingPapers={workingPapers}
          publishedPapers={publishedPapers}
        />

        <InterestsSection />
      </main>

      <Footer />
    </div>
  );
}
