import Image from "next/image";
import { Experiences } from "./components/Experiences";

export default function Page() {
    return (
        <main className="animate-fade-in-up grow pt-30 pb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
            <header className="mb-section-gap text-center md:text-left">
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md">Professional Journey</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A chronological overview of architectural implementations, system scaling, and technical leadership across various enterprise environments.</p>
            </header>
            <div className="relative border-l border-outline-variant/30 ml-4 md:ml-8 space-y-stack-md">
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Lead Developer .NET / React</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Talan - CIGL Esch</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                OCT 2025 - PRESENT
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Pilotage du développement d'une application métier destinée à un organisme public local</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Conception et mise en œuvre de l'architecture applicative et cloud sur Microsoft Azure</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Encadrement technique des développements .NET et React et mise en place des bonnes pratiques</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Responsable de la livraison de la solution, du développement à l'exploitation sur Kubernetes</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">React</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Typescript</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Kubernetes</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Terraform</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Github</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur IA Générative</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Talan - GSF</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                JUNE 2025 - SEPT 2025
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Conception et développement de solutions d'IA générative avec Python et Microsoft Foundry</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Mise en place d'une plateforme d'indexation et de recherche de données structurées et non structurées</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Développement d'un agent conversationnel basé sur l'architecture RAG et intégré à Open WebUI</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Intégration de composants IA au sein d'architectures cloud Azure évolutives</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Python</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Microsoft Foundry</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Postgre SQL</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Open WebUI</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur Full Stack (.NET / Angular)</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Talan - Mercator</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                FEV 2025 - MAI 2025
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Contribution au développement d'une plateforme de visualisation de données géospatiales maritimes en 3D</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Conception des APIs et services .NET assurant la gestion et l'exposition des données cartographiques</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Développement d'interfaces Angular pour la navigation et l'exploitation des données maritimes</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Participation aux décisions d'architecture et aux choix techniques au sein d'une équipe agile</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Angular</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Typescript</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Python</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure Devops</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur Full Stack / Ingénieur Cloud</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Talan - Klépierre</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                OCT 2024 - JANV 2025
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Contribution à la définition de l'architecture cible et à la structuration des solutions techniques</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Animation d'ateliers de conception réunissant les équipes métier, développement et infrastructure</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Création du socle frontend et harmonisation des APIs backend pour accélérer les développements</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Automatisation des infrastructures et mise en place des pipelines CI/CD pour fiabiliser les déploiements</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">React</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Typescript</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Terraform</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure Devops</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Kubernetes</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur Full Stack</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Talan - Société Générale (SGME)</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                SEPT 2021 - SEPT 2024
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Développement et évolution d'applications financières critiques au sein de la plateforme SG Markets</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Conception de services backend et d'APIs REST destinés à des systèmes à forte volumétrie</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Réalisation d'interfaces web modernes avec Angular et React</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Amélioration continue de la qualité logicielle et des processus de livraison CI/CD</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">React</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Angular</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Typescript</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Github</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Kubernetes</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur Backend</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Ai3 - Groupe Atlantic</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                SEPT 2020 - SEPT 2021
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Conception et évolution d'APIs REST au cœur du système d'information du groupe</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Développement et maintenance de services métiers à fort enjeu opérationnel</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Accompagnement des équipes recette et production pour garantir la stabilité des applications</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Renforcement de la qualité logicielle grâce à l'automatisation des tests</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">TFS</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur Full Stack</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Ai3 - Pernod Ricard</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                NOV 2018 - MARS 2020
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Développement et évolution d'applications métier au sein d'un contexte international</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Contribution à la modernisation du patrimoine applicatif via plusieurs migrations vers .NET Core</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Participation à l'industrialisation des déploiements et à l'amélioration de la qualité logicielle</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Accompagnement de l'adoption des pratiques cloud et DevOps</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Vue.js</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure Devops</span>
                        </div>
                    </div>
                </div>
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
                    <div className="glass-panel rounded-lg p-stack-md glow-hover relative overflow-hidden transition-all duration-300">
                        <div className="scanline"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-stack-md gap-stack-md">
                            <div>
                                <h2 className="font-headline-md text-headline-md text-on-surface">Développeur Full Stack (Alternance)</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Ai3</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                NOV 2016 - NOV 2018
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Refonte du portail de services managés utilisé par les clients et équipes internes</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Développement d'interfaces connectées à Microsoft Dynamics pour optimiser les processus métier</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Mise en œuvre de l'authentification Azure Active Directory et des mécanismes de sécurité associés</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Développement d'outils internes contribuant à l'efficacité des équipes commerciales</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">.NET</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Angular</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        // <div className="flex flex-col gap-18 w-3/4 mx-auto">
        //     <h1 className="text-emerald font-bold pt-48 text-center text-9xl">
        //         I&apos;m François.
        //     </h1>

        //     <div className="flex justify-center items-center gap-40">
        //         <Image src="/assets/me.jpg" width={400} height={400} alt="François Chanteau" className="rounded-t-full" />
        //         <div className="flex flex-col gap-6">
        //             <h2 className="text-6xl font-bold">I&apos;m a Fullstack Web Developer working in Nantes, France.</h2>
        //             <p className="text-2xl text-emerald">Experienced full-stack web developer, specialized in designing business web applications, I work end to end on projects built with .NET and JavaScript (C#, React).</p>
        //             <p className="text-2xl text-emerald">I also have a strong understanding of DevOps practices, particularly around Kubernetes and GitHub, and make daily use of AI tools such as GitHub Copilot to improve development quality and efficiency, all within Azure cloud environments.</p>
        //         </div>
        //     </div>

        //     <Experiences />
        // </div>
    )
}