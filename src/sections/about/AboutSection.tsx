import { Metric } from "../../components/Metric";

export function AboutSection() {
    return (
        <section id="home" className="home">
            <h2 className="home-name">Ava West</h2>
            <p className="home-tagline">Aspiring researcher & software engineer</p>

            <div className="avatar-wrapper">
                <img src="./assets/profile.jpg" alt="Profile" />
            </div>

            <div className="about">
                <h3>About Me</h3>
                <p>
                    Passionate about research-driven software engineering,
                    with interests in building reliable, ethical systems
                    that are made to empower the lives of everyday people.
                </p>
            </div>

            <div className="metrics">
                <Metric title="Open-Source Projects" value="2" subtitle="Zephyr RTOS + VirusGo" />
                <Metric title="Production Systems" value="5+" subtitle="Industry & research" />
                <Metric title="Publications" value="2" subtitle="Including working papers" />
            </div>
        </section>
    );
}
