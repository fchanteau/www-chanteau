import { Cloud, PanelsTopLeft, Server, type LucideIcon } from "lucide-react";

export type Technology = {
    name: string;
    colorClass: string;
};

export const technologies: Technology[] = [
    { name: ".NET", colorClass: "text-primary" },
    { name: "React", colorClass: "text-secondary" },
    { name: "Azure", colorClass: "text-primary" },
    { name: "Terraform", colorClass: "text-on-surface" },
    { name: "Kubernetes", colorClass: "text-primary" },
    { name: "CI/CD", colorClass: "text-on-surface" },
];

export type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    accent: "primary" | "secondary";
};

export const services: Service[] = [
    {
        icon: Server,
        title: "Architecture Backend",
        description:
            "Développement d'API robustes et de services métier en .NET, conçus pour répondre aux exigences de performance et de scalabilité.",
        accent: "primary",
    },
    {
        icon: PanelsTopLeft,
        title: "Développement Frontend",
        description:
            "Conception d'expériences utilisateur fluides et performantes grâce à React, TypeScript et une approche orientée qualité.",
        accent: "secondary",
    },
    {
        icon: Cloud,
        title: "Architecture Cloud & DevOps",
        description:
            "Automatisation, déploiement et supervision d'environnements Cloud fiables pour accélérer la livraison et garantir la qualité des applications.",
        accent: "primary",
    },
];
