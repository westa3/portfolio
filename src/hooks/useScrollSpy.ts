import { useEffect } from "react";
import type { SectionDef } from "../types";

export function useScrollSpy(
  sections: SectionDef[],
  setActive: (id: string) => void
) {
  useEffect(() => {
    const getActive = () => {
      const entries = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const threshold = 140;
      const crossed = entries.filter((e) => e.top <= threshold);
      const next =
        crossed.length ? crossed[crossed.length - 1].id : entries[0]?.id || "home";

      setActive(next);
    };

    const hash = window.location.hash.replace("#", "");
    if (hash && sections.some((s) => s.id === hash)) {
      setActive(hash);
      setTimeout(() => {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      }, 0);
    } else {
      getActive();
    }

    window.addEventListener("scroll", getActive, { passive: true });
    window.addEventListener("resize", getActive);
    return () => {
      window.removeEventListener("scroll", getActive);
      window.removeEventListener("resize", getActive);
    };
  }, [sections, setActive]);
}
