import { ProjectsPlaceholderCard } from "../../components/ProjectsPlaceholderCard";

export function ProjectsSection() {
    return (
        <section id="projects">
            <h2 className="projects-title">Projects</h2>
            <p className="projects-intro">
                A snapshot of what I’m building - with more on the way!
            </p>

            <div className="project-grid single">
                <ProjectsPlaceholderCard />
            </div>
        </section>
    );
}
