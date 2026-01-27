import { ExperienceItem } from "../../components/ExperienceItem";

export function ExperienceSection() {
    return (
        <section id="experience">
            <h2 className="experience-title">Experience</h2>
            <p className="experience-hook">
                As a software developer, I'm driven by curiosity and the joy of learning. Every new skill brings me closer to mastery and deeper impact.
            </p>
            <p className="experience-intro">
                My experience reflects a steady progression of responsibility, depth and curiosity.
                Each role has shaped how I approach software by strengthening my collaboration skills,
                systems thinking and research-driven problem solving. All while reinforcing my enjoyment
                of learning and growth as a developer.
            </p>
            <div className="experience-timeline">
                <ExperienceItem
                    role="Full-Stack Software Engineer"
                    org="TCGspot"
                    time="Aug 2025 – Present"
                    highlight="Mobile App Development"
                    description="Designing and developing a mobile application for vendors and Pokémon collectors, integrating computer vision and AI/ML with a scalable backend. Leading full-stack implementation across iOS development, backend services, database architecture, and dataset creation and cleaning for model training. Collaborating in an Agile/Scrum environment to translate user research and stories into production-ready features."
                    links={[
                        {
                            label: "TCGspot Website",
                            href: "https://tcg-spot.com/",
                        },
                    ]}
                    current={true}
                />


                <ExperienceItem
                    role="Undergraduate Software Engineering Intern"
                    org="Intel"
                    time="Jun 2024 – Aug 2024"
                    highlight="Systems Performance Tooling"
                    description="Developed a Python-based stack analysis tool to support system performance optimization, working with compiler flags, low-level build configurations, and debugging workflows. Deconstructed Zephyr RTOS memory models and applied computer architecture principles to analyze and improve system behavior. Authored a technical blog post for the Zephyr community documenting findings and lessons learned."
                    links={[
                        {
                            label: "Zephyr RTOS Blog Post",
                            href: "https://www.zephyrproject.org/exploring-zephyr-rtos-a-junior-engineers-perspective/",
                        },
                    ]}
                />


                <ExperienceItem
                    role="Undergraduate Researcher"
                    org="University of Delaware"
                    time="Jun 2022 – May 2025"
                    highlight="Computational Research & Development"
                    description="Designed, developed, and deployed an open-source augmented reality web application for STEM education, visualizing 33 biomolecular structures and used across multiple schools in the U.S. Integrated web APIs and modern frontend technologies to support interactive visualization, with work pending academic publication. Additionally, developed novel imaging techniques for large biomolecular systems using clustering algorithms and contributed to an assistive software plugin for Visual Molecular Dynamics (TactViz)."
                    links={[
                        {
                            label: "News Article on Real-World Application of VirusGo",
                            href: "https://www.udel.edu/udaily/2024/june/virusgo-virus-education-augmented-reality-hadden-perilla-genova/",
                        },
                    ]}
                />


                <ExperienceItem
                    role="Teaching Assistant"
                    org="University of Delaware"
                    time="Aug 2024 – Dec 2024"
                    highlight="Software Engineering & DevOps Education"
                    description="Co-developed curriculum and course infrastructure for a new Software Engineering and DevOps course, shaping project workflows, tooling, and development standards. Built and maintained a MongoDB-backed project database, integrated GitHub-based CI/CD workflows, and applied Agile principles to support an industry-style development environment. Served as the inaugural teaching assistant, mentoring students on software engineering best practices and collaborative development."
                />
            </div>
        </section>
    );
}
