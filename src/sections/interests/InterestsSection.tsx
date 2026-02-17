export function InterestsSection() {
    return (
        <section id="interests">
            <h2 className="interests-title">Other Interests</h2>
            <p className="interests-sub">
                The things I return to, explore and learn from outside of software.
            </p>

            <div className="interest-grid">
                <div className="interest-card">
                    <h3>Music</h3>
                    <p>
                        I’m currently relearning piano after several years of not playing. I studied piano
                        throughout childhood and completed piano examinations before
                        stepping away. Returning to it has reinforced my appreciation for
                        long-term, incremental progress and rebuilding skills from fundamentals, which 
                        mirrors how I approach learning in technical fields.
                    </p>
                </div>

                <div className="interest-card">
                    <h3>Creative Worlds & Exploration</h3>
                    <p>
                        I enjoy games like <em>Hollow Knight</em>, <em>Silksong</em>,{" "}
                        <em>Stardew Valley</em>, <em>Minecraft</em>, and <em>Terraria</em>. Especially
                        games that encourage creativity, exploration and emergent systems. I'm drawn to environments
                        that reward curiosity and experimentation, whether that's through design,
                        world-building or problem solving. Other non-digital games I enjoy include <em>Magic the Gathering</em>.
                    </p>
                </div>

                <div className="interest-card">
                    <h3>Reading</h3>
                    <p>
                        I read both fiction and non-fiction. Fiction helps inspire me creatively
                        and allows me to experience a variety of human narratives, while non-fiction deepens my
                        understanding of how technical, social and historical systems shape the world.
                    </p>
                </div>

                <div className="interest-card">
                    <h3>Crafting</h3>
                    <p>
                        My approach to software development centers around rapid protyping - building quickly so that I may gather feedback and iterate intentionally.
                        I find myself doing the same when crafting tangible objects. Whether I'm sewing, painting or assembling
                        a model kit, I enjoy the process of bringing an idea to life through hands-on creation and iterative refinement. 
                    </p>
                </div>
            </div>
        </section>
    );
}
