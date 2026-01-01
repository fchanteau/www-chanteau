import { BriefcaseBusiness, Calendar1, MapPin, ChevronDown, ChevronUp } from "lucide-react";

type ExperienceItemProps = {
    active?: boolean;
    index: number;
    onClick: (index: number) => void
}

export function ExperienceItem({ active = false, onClick, index }: ExperienceItemProps) {
    const accordeonHeaderActiveClass = active ? "bg-emerald text-white" : "";
    const accordeonTitleActiveClass = active ? "text-white" : "text-emerald";

    const accordeonBodyActiveClass = active ? "max-h-[999px] py-4" : "max-h-0 py-0";

    const Chevron = active ? ChevronUp : ChevronDown;

    return (
        <div className={`accordeon-item border-2 border-emerald rounded-xl group`}>
            <div onClick={() => onClick(index)} role="button" className={`accordeon-header p-8 rounded-t-lg flex justify-between items-center ${accordeonHeaderActiveClass}
            hover:bg-emerald hover:text-white hover:cursor-pointer transition-colors duration-300`}>
                <div className="flex gap-8 items-center"> 
                    <BriefcaseBusiness />
                    <div className="accordeon-title">
                        <h3 className={`text-4xl font-bold ${accordeonTitleActiveClass} group-hover:text-white transition-colors duration-300`}>Confirmed Consultant</h3>
                        <p className={`${accordeonTitleActiveClass} group-hover:text-white transition-colors duration-300 hover:underline`}><a target="_blank" href="https://www.talan.com">@ Talan</a></p>
                    </div>
                </div>
                <div className={`accordeon-actions flex gap-16 items-center ${accordeonTitleActiveClass} group-hover:text-white transition-colors duration-300`}>
                    <ul className="space-y-1 font-bold">
                        <li className="flex items-center justify-center gap-2"><Calendar1 /> 2021 - Present</li>
                        <li className="flex items-center justify-center gap-2"><MapPin /> Nantes, France</li>
                    </ul>
                    <Chevron />
                </div>
            </div>
            <div className={`accordeon-body px-8 bg-white rounded-b-xl overflow-hidden transition-all duration-300 ${accordeonBodyActiveClass}`}>
                <div className="relative px-4">
                    <div className="absolute h-full w-px bg-emerald"></div>
                    <ul className="space-y-12">
                        <li className="relative pl-12">
                            <span className="absolute -left-2.5 top-1 h-5.25 w-5.25 rounded-full bg-white border-5 border-emerald"></span>

                            <time className="block text-sm text-gray-600">Oct 2025 - Present</time>
                            <h3 className="text-lg font-semibold text-emerald">
                                Lead Developer .NET / React
                            </h3>
                            <ul className="list-disc ml-8 space-y-1 text-emerald">
                                <li>Led the development of a business application for a local public-sector organization, supporting operational and social services</li>
                                <li>Designed and implemented the application and cloud architecture within the <strong>Microsoft Azure</strong> environment</li>
                                <li>Provided technical leadership on <strong>.NET</strong> and <strong>React</strong>, establishing development best practices</li>
                                <li>Contributed across the full project lifecycle: design, development, deployment, and maintenance</li>
                                <li>Implemented containerized solutions and orchestration using <strong>Kubernetes</strong></li>
                            </ul>
                            <div className="flex mt-4 gap-4 font-bold">
                                <span className="rounded-full border-2 border-blue-700 text-blue-700 px-4 py-1 text-sm">.NET</span>
                                <span className="rounded-full border-2 border-purple-500 text-purple-500 px-4 py-1 text-sm">C#</span>
                                <span className="rounded-full border-2 border-blue-500 text-blue-500 px-4 py-1 text-sm">React</span>
                                <span className="rounded-full border-2 border-yellow-500 text-yellow-500 px-4 py-1 text-sm">Typescript</span>
                                <span className="rounded-full border-2 border-blue-800 text-blue-800 px-4 py-1 text-sm">Azure</span>
                                <span className="rounded-full border-2 border-blue-500 text-blue-500 px-4 py-1 text-sm">Kubernetes</span>
                                <span className="rounded-full border-2 border-blue-800 text-blue-800 px-4 py-1 text-sm">Terraform</span>
                                <span className="rounded-full border-2 border-gray-500 text-gray-500 px-4 py-1 text-sm">Github</span>
                            </div>
                        </li>

                        <li className="relative pl-12">
                            <span className="absolute -left-2.5 top-1 h-5.25 w-5.25 rounded-full bg-white border-5 border-emerald"></span>

                            <time className="block text-sm text-gray-600">June 2025 - Sept 2025</time>
                            <h3 className="text-lg font-semibold text-emerald">
                                GenAI Developer – Python / Microsoft Foundry
                            </h3>
                            <ul className="list-disc ml-8 space-y-1 text-emerald">
                                <li>Design and development of <strong>Generative AI</strong> solutions using <strong>Python</strong> and <strong>Microsoft Foundry</strong></li>
                                <li>Implementation of a data indexing pipeline for efficient ingestion and retrieval of structured and unstructured data</li>
                                <li>Development of a <strong>RAG (Retrieval-Augmented Generation)</strong> AI agent implemented within <strong>Open WebUI</strong></li>
                                <li>Integration of AI components into scalable, cloud-based architectures on <strong>Microsoft Azure</strong></li>
                            </ul>
                            <div className="flex mt-4 gap-4 font-bold">
                                <span className="rounded-full border-2 border-blue-800 text-blue-800 px-4 py-1 text-sm">Azure</span>
                                <span className="rounded-full border-2 border-yellow-500 text-yellow-500 px-4 py-1 text-sm">Python</span>
                                <span className="rounded-full border-2 border-blue-800 text-blue-800 px-4 py-1 text-sm">Postgre SQL</span>
                                <span className="rounded-full border-2 border-gray-500 text-gray-500 px-4 py-1 text-sm">Open WebUI</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}