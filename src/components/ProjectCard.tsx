import { useState } from "react";
import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`project-card ${open ? "open" : ""}`}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
      aria-expanded={open}
    >
      <div className="project-top">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>

        <button
          className="project-toggle"
          aria-label={open ? "Collapse project" : "Expand project"}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <span className="chev" />
        </button>
      </div>

      <div className="project-chips">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-body">
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {project.links?.length ? (
          <div className="project-links" onClick={(e) => e.stopPropagation()}>
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
