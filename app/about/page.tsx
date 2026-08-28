import { ExperienceCard } from "./components/ExperienceCard";
import { experiences } from "./experiences.data";

export default function Page() {
    return (
        <main className="animate-fade-in-up grow pt-30 pb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
            <header className="mb-section-gap text-center md:text-left">
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md">Professional Journey</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A chronological overview of architectural implementations, system scaling, and technical leadership across various enterprise environments.</p>
            </header>
            <div className="relative border-l border-outline-variant/30 ml-4 md:ml-8 space-y-stack-md">
                {experiences.map((experience) => (
                    <ExperienceCard key={`${experience.company}-${experience.period}`} {...experience} />
                ))}
            </div>
        </main>
    )
}
