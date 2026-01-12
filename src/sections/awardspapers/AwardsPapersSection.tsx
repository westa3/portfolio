import { useMemo } from "react";
import type { Award, Paper } from "../../types";
import { AwardTile } from "../../components/AwardTile";
import { PaperCard } from "../../components/PaperCard";

export function AwardsPapersSection({
  awpView,
  setAwpView,
  awards,
  workingPapers,
  publishedPapers,
}: {
  awpView: "awards" | "papers";
  setAwpView: (v: "awards" | "papers") => void;
  awards: Award[];
  workingPapers: Paper[];
  publishedPapers: Paper[];
}) {
  const awardsSorted = useMemo(
    () => [...awards].sort((a, b) => (a.sortKey < b.sortKey ? 1 : -1)),
    [awards]
  );

  return (
    <section id="awards">
      <div className="awp-head">
        <h2 className="awp-title">Awards & Papers</h2>
        <p className="awp-sub">A living record - milestones earned and ideas in progress.</p>

        <div className="awp-switch" role="tablist" aria-label="Awards and papers">
          <button
            role="tab"
            aria-selected={awpView === "awards"}
            className={awpView === "awards" ? "on" : ""}
            onClick={() => setAwpView("awards")}
          >
            Awards
          </button>
          <button
            role="tab"
            aria-selected={awpView === "papers"}
            className={awpView === "papers" ? "on" : ""}
            onClick={() => setAwpView("papers")}
          >
            Papers
          </button>
        </div>
      </div>

      {awpView === "awards" ? (
        <div className="awp-awards" role="tabpanel" aria-label="Awards">
          <div className="award-rail" aria-hidden>
            <div className="award-rail-glow" />
          </div>

          <div className="award-list">
            {awardsSorted.map((a) => (
              <AwardTile key={a.id} award={a} />
            ))}
          </div>
        </div>
      ) : (
        <div className="awp-papers" role="tabpanel" aria-label="Papers">
          <div className="paper-split">
            <div className="paper-col">
              <div className="paper-col-head">
                <h3>Working papers</h3>
                <span className="paper-count">{workingPapers.length}</span>
              </div>
              <div className="paper-stack">
                {workingPapers.map((p) => (
                  <PaperCard key={p.id} paper={p} status="Working" />
                ))}
              </div>
            </div>

            <div className="paper-col">
              <div className="paper-col-head">
                <h3>Published</h3>
                <span className="paper-count">{publishedPapers.length}</span>
              </div>

              {publishedPapers.length === 0 ? (
                <div className="paper-empty">
                  <div className="paper-empty-icon" aria-hidden />
                  <p>
                    Published papers will appear here soon. For now, you can preview my ongoing
                    work in the working papers column.
                  </p>
                </div>
              ) : (
                <div className="paper-stack">
                  {publishedPapers.map((p) => (
                    <PaperCard key={p.id} paper={p} status="Published" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
