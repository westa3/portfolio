export type Award = {
  id: string;
  title: string;
  org?: string;
  dateLabel: string; // e.g., "2025" or "Fall 2021–Spring 2025"
  sortKey: string; // ISO-ish for ordering: "2025-01-01"
  note?: string;
  kind: "Scholarship" | "Award" | "Honor" | "Hackathon" | "Program";
};

export type Paper = {
  id: string;
  title: string;
  area: string;
  year: string;
  note?: string;
  links?: { label: string; href: string }[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
};

export type SectionDef = { id: string; label: string };
