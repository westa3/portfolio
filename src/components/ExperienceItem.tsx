import { useMemo } from "react";

type ExperienceLink = {
    label: string;
    href: string;
};

export function ExperienceItem({
    role,
    org,
    time,
    highlight,
    description,
    links,
}: {
    role: string;
    org: string;
    time: string;
    highlight: string;
    description: string;
    links?: ExperienceLink[];
}) {
    const isCurrent = useMemo(() => /present/i.test(time), [time]);

    return (
        <div className={`experience-item ${isCurrent ? "current" : ""}`}>
            <div className="experience-marker-col" aria-hidden>
                <div className="experience-marker" />
            </div>

            <div className="experience-content">
                <div className="experience-header">
                    <h3>{role}</h3>
                    <span className="experience-org">{org}</span>
                </div>

                <div className="experience-meta">
                    <span className="experience-time">
                        {time}
                        {isCurrent && (
                            <span className="experience-current" title="Currently working here">
                                <span className="experience-current-dot" /> Current
                            </span>
                        )}
                    </span>
                    <span className="experience-highlight">{highlight}</span>
                </div>

                <p className="experience-desc">{description}</p>

                {links?.length ? (
                    <div
                        className="experience-links"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {links.map((l) => (
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
        </div>
    );
}
