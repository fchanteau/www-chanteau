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
                                OCT 2025 — PRESENT
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Led the development of a business application for a local public-sector organization, supporting operational and social services</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Designed and implemented the application and cloud architecture within the <strong>Microsoft Azure</strong> environment</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Provided technical leadership on <strong>.NET</strong> and <strong>React</strong>, establishing development best practices</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Contributed across the full project lifecycle: design, development, deployment, and maintenance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">05</span>
                                <span>Implemented containerized solutions and orchestration using <strong>Kubernetes</strong></span>
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
                                <h2 className="font-headline-md text-headline-md text-on-surface">GenAI Developer – Python / Microsoft Foundry</h2>
                                <h3 className="font-body-lg text-body-lg text-primary">Talan - GSF</h3>
                            </div>
                            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant/50 px-3 py-1 rounded border border-outline-variant/30 self-start">
                                JUNE 2025 —  SEPT 2025
                            </div>
                        </div>
                        <ul className="list-none space-y-stack-md mb-stack-md font-body-md text-body-md text-on-surface-variant">
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">01</span>
                                <span>Design and development of <strong>Generative AI</strong> solutions using <strong>Python</strong> and <strong>Microsoft Foundry</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">02</span>
                                <span>Implementation of a data indexing pipeline for efficient ingestion and retrieval of structured and unstructured data.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">03</span>
                                <span>Development of a <strong>RAG (Retrieval-Augmented Generation)</strong> AI agent implemented within <strong>Open WebUI</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-code-block text-primary">04</span>
                                <span>Integration of AI components into scalable, cloud-based architectures on <strong>Microsoft Azure</strong></span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Azure</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Python</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Postgre SQL</span>
                            <span className="font-code-block text-code-block bg-surface-variant text-on-surface-variant px-2 py-1 rounded border border-outline-variant/50">Open WebUI</span>
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