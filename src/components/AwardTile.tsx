import type { Award } from "../types";

export function AwardTile({ award }: { award: Award }) {
  return (
    <article className="award-tile">
      <div className="award-top">
        <span className="award-kind">{award.kind}</span>
      </div>

      <h3 className="award-title">{award.title}</h3>
      {award.org ? <p className="award-org">{award.org}</p> : null}

      <div className="award-date">{award.dateLabel}</div>
      {award.note ? <div className="award-note">{award.note}</div> : null}
    </article>
  );
}
