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
                        throughout childhood and completed British piano examinations before
                        stepping away. Returning to it has reinforced my appreciation for
                        long-term, incremental progress and rebuilding skills from fundamentals, which 
                        mirrors how I approach learning in technical fields.
                        I also thoroughly enjoy being a passive listener of music. From orchestral to pop
                        to international music to metal, I love exploring different genres and styles.
                    </p>
                </div>

                <div className="interest-card">
                    <h3>Creative Worlds & Exploration</h3>
                    <p>
                        I enjoy games like <em>Hollow Knight</em>, <em>Silksong (finally)</em>,{" "}
                        <em>Stardew Valley</em>, <em>Minecraft</em>, and <em>Terraria</em>. Especially
                        games that encourage creativity, exploration and emergent systems. I'm drawn to environments
                        that reward curiosity and experimentation whether that's through design,
                        world-building or problem solving.
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
                    <h3>Travel & Culture</h3>
                    <p>
                        I enjoy traveling and learning about cultures and ways of life. I have traveled
                        for most of my life and lived overseas for several years during childhood.
                        Exposure to diverse perspectives has been one of the most impactful ways
                        I’ve grown. It challenges my assumptions, broadens context and shapes how I approach
                        collaboration and problem solving. I'd love to travel more and am motivated by the
                        fact that there is still so much more of the world to experience.
                    </p>
                </div>
            </div>
        </section>
    );
}
