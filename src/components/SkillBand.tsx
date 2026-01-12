import type { ReactNode } from "react";

export type SkillItem = {
    label: string;
    icon?: ReactNode;
};

export function SkillBand({
    level,
    tone,
    items,
}: {
    level: string;
    tone: "strong" | "soft" | "neutral";
    items: SkillItem[];
}) {
    return (
        <div className={`skill-band ${tone}`}>
            <div className="skill-band-head">
                <h3>{level}</h3>
            </div>

            <div className="skill-chips">
                {items.map((item) => (
                    <span key={item.label} className="skill-chip">
                        {item.icon ? <span className="skill-icon">{item.icon}</span> : null}
                        {item.label}
                    </span>
                ))}
            </div>
        </div>
    );
}
