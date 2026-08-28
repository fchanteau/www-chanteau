import { Experience } from "../experiences.data";

export function ExperienceCard({ title, company, period, responsibilities, technologies }: Experience) {
    return (
        <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
            <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                <div className="scanline"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                    <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
                        <h3 className="font-body-lg text-body-lg text-primary">{company}</h3>
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                        {period}
                    </div>
                </div>
                <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                    {responsibilities.map((responsibility, index) => (
                        <li key={responsibility} className="flex items-center gap-2">
                            <span className="font-code-block text-primary">{String(index + 1).padStart(2, "0")}</span>
                            <span>{responsibility}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span key={technology} className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
