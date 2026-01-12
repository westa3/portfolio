import type { Paper } from "../types";

export function PaperCard({
  paper,
  status,
}: {
  paper: Paper;
  status: "Working" | "Published";
}) {
  return (
    <article className="paper-card">
      <div style={{ fontWeight: 650 }}>{paper.title}</div>

      <div className="paper-meta">
        <span className="paper-pill paper-status">{status}</span>
        <span className="paper-pill">{paper.area}</span>
        <span className="paper-pill">{paper.year}</span>
      </div>

      {paper.note ? (
        <div style={{ color: "#a1a1aa", marginTop: "0.6rem", lineHeight: 1.55 }}>
          {paper.note}
        </div>
      ) : null}

      {paper.links?.length ? (
        <div className="paper-links">
          {paper.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
