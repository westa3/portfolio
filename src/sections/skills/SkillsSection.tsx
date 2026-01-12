import { SkillBand } from "../../components/SkillBand";
import {
    SiReact,
    SiSwift,
    SiPython,
    SiTypescript,
    SiJavascript,
    SiGit,
    SiC,
    SiCplusplus,
    SiGnubash,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiAmazon,
    SiSqlite,
    SiGithub,
    SiAtlassian,
    SiXcode,
    SiBlender,
    SiOracle,
    SiMongodb,
    SiSupabase,
    SiGoogle
} from "react-icons/si";

import {
    FaApple,
    FaLinux,
    FaWindows
} from "react-icons/fa";

export function SkillsSection() {
    return (
        <section id="skills">
            <h2 className="skills-title">Tools & Skills</h2>
            <p className="skills-sub">
                The tools I work/worked with most often and the environments I've built in.
            </p>

            <div className="skill-bands">
                <SkillBand
                    level="Proficient"
                    tone="strong"
                    items={[
                        { label: "Swift", icon: <SiSwift /> },
                        { label: "Python", icon: <SiPython /> },
                        { label: "TypeScript", icon: <SiTypescript /> },
                        { label: "JavaScript", icon: <SiJavascript /> },
                        { label: "Git", icon: <SiGit /> },
                        { label: "SQL"}
                    ]}
                />

                <SkillBand
                    level="Familiar"
                    tone="soft"
                    items={[
                        { label: "C", icon: <SiC /> },
                        { label: "C++", icon: <SiCplusplus /> },
                        { label: "Bash", icon: <SiGnubash /> },
                        { label: "REST APIs"},
                        { label: "React", icon: <SiReact /> },
                        { label: "React Native"},
                        { label: "HTML", icon: <SiHtml5 /> },
                        { label: "CSS", icon: <SiCss3 /> },
                        { label: "Node.js", icon: <SiNodedotjs /> },
                        { label: "AWS (Lambda, API Gateway, RDS, DynamoDB, AppSync, S3, IAM, Cognito)", icon: <SiAmazon /> },
                        { label: "SQLite", icon: <SiSqlite /> },
                    ]}
                />

                <SkillBand
                    level="Environments"
                    tone="neutral"
                    items={[
                        { label: "Linux", icon: <FaLinux /> },
                        { label: "Windows", icon: <FaWindows /> },
                        { label: "macOS", icon: <FaApple /> },
                    ]}
                />

                <SkillBand
                    level="Software & Tooling"
                    tone="neutral"
                    items={[
                        { label: "Visual Studio Code" },
                        { label: "GitHub", icon: <SiGithub /> },
                        { label: "Atlassian Suite", icon: <SiAtlassian /> },
                        { label: "Xcode", icon: <SiXcode /> },
                        { label: "Android Studio"},
                        { label: "Blender", icon: <SiBlender /> },
                        { label: "Oracle", icon: <SiOracle /> },
                        { label: "MongoDB", icon: <SiMongodb /> },
                        { label: "Supabase", icon: <SiSupabase /> },
                        { label: "Google Suite", icon: <SiGoogle /> },
                    ]}
                />
            </div>
        </section>
    );
}
