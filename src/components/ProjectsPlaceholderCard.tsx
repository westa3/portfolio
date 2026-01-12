import { useState } from "react";

export function ProjectsPlaceholderCard() {
  const [open, setOpen] = useState(false);

  return (
    <article className={`project-card placeholder ${open ? "open" : ""}`}>
      <div className="project-top">
        <div>
          <h3 className="project-title">More coming soon</h3>
          <p className="project-tagline">
            Come back to see personal projects I’m actively working on.
          </p>
        </div>

        <button
          className="project-toggle"
          aria-label={open ? "Collapse" : "Expand"}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <span className="chev" />
        </button>
      </div>

      <div className="project-chips">
        <span className="chip neutral">In progress</span>
        <span className="chip neutral">Personal work</span>
      </div>

      <div className="project-body placeholder-body">
        <p>
          I’m currently refining and documenting several projects. This space will
          soon highlight work that reflects my interests, curiosity and approach
          to building thoughtful software.
        </p>
      </div>
    </article>
  );
}
