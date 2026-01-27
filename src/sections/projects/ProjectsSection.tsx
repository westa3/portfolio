import { projects } from "../../data/projects";
import { ProjectsPlaceholderCard } from "../../components/ProjectsPlaceholderCard";
import { ProjectCard } from "../../components/ProjectCard";

export function ProjectsSection() {
    return (
        <section id="projects">
            <h2 className="projects-title">Projects</h2>
            <p className="projects-intro">
                A snapshot of what I’m building - with more on the way!
            </p>

            <div className={`project-grid ${projects.length ? "" : "single"}`}>
                {projects.length ? (
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <ProjectsPlaceholderCard />
                )}
            </div>
        </section>
    );
}
