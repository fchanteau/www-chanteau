import { technologies } from "../home.data";

export function TechStack() {
    return (
        <div className="animate-fade-in-up w-full max-w-4xl pt-stack-lg mt-section-gap">
            <p className="font-label-sm text-on-surface-variant mb-6 text-center uppercase tracking-widest">
                Technologies &amp; expertises
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20"
                    >
                        <span className={`font-code-block text-code-block ${technology.colorClass}`}>
                            {technology.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
