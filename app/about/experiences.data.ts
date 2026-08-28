export type Experience = {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        title: "Lead Developer .NET / React",
        company: "Talan - CIGL Esch",
        period: "OCT 2025 - PRESENT",
        responsibilities: [
            "Pilotage du développement d'une application métier destinée à un organisme public local",
            "Conception et mise en œuvre de l'architecture applicative et cloud sur Microsoft Azure",
            "Encadrement technique des développements .NET et React et mise en place des bonnes pratiques",
            "Responsable de la livraison de la solution, du développement à l'exploitation sur Kubernetes",
        ],
        technologies: [".NET", "React", "Typescript", "Azure", "Kubernetes", "Terraform", "Github"],
    },
    {
        title: "Développeur IA Générative",
        company: "Talan - GSF",
        period: "JUNE 2025 - SEPT 2025",
        responsibilities: [
            "Conception et développement de solutions d'IA générative avec Python et Microsoft Foundry",
            "Mise en place d'une plateforme d'indexation et de recherche de données structurées et non structurées",
            "Développement d'un agent conversationnel basé sur l'architecture RAG et intégré à Open WebUI",
            "Intégration de composants IA au sein d'architectures cloud Azure évolutives",
        ],
        technologies: ["Azure", "Python", "Microsoft Foundry", "Postgre SQL", "Open WebUI"],
    },
    {
        title: "Développeur Full Stack (.NET / Angular)",
        company: "Talan - Mercator",
        period: "FEV 2025 - MAI 2025",
        responsibilities: [
            "Contribution au développement d'une plateforme de visualisation de données géospatiales maritimes en 3D",
            "Conception des APIs et services .NET assurant la gestion et l'exposition des données cartographiques",
            "Développement d'interfaces Angular pour la navigation et l'exploitation des données maritimes",
            "Participation aux décisions d'architecture et aux choix techniques au sein d'une équipe agile",
        ],
        technologies: [".NET", "Angular", "Typescript", "Python", "Azure Devops"],
    },
    {
        title: "Développeur Full Stack / Ingénieur Cloud",
        company: "Talan - Klépierre",
        period: "OCT 2024 - JANV 2025",
        responsibilities: [
            "Contribution à la définition de l'architecture cible et à la structuration des solutions techniques",
            "Animation d'ateliers de conception réunissant les équipes métier, développement et infrastructure",
            "Création du socle frontend et harmonisation des APIs backend pour accélérer les développements",
            "Automatisation des infrastructures et mise en place des pipelines CI/CD pour fiabiliser les déploiements",
        ],
        technologies: [".NET", "React", "Typescript", "Azure", "Terraform", "Azure Devops", "Kubernetes"],
    },
    {
        title: "Développeur Full Stack",
        company: "Talan - Société Générale (SGME)",
        period: "SEPT 2021 - SEPT 2024",
        responsibilities: [
            "Développement et évolution d'applications financières critiques au sein de la plateforme SG Markets",
            "Conception de services backend et d'APIs REST destinés à des systèmes à forte volumétrie",
            "Réalisation d'interfaces web modernes avec Angular et React",
            "Amélioration continue de la qualité logicielle et des processus de livraison CI/CD",
        ],
        technologies: [".NET", "React", "Angular", "Typescript", "Azure", "Github", "Kubernetes"],
    },
    {
        title: "Développeur Backend",
        company: "Ai3 - Groupe Atlantic",
        period: "SEPT 2020 - SEPT 2021",
        responsibilities: [
            "Conception et évolution d'APIs REST au cœur du système d'information du groupe",
            "Développement et maintenance de services métiers à fort enjeu opérationnel",
            "Accompagnement des équipes recette et production pour garantir la stabilité des applications",
            "Renforcement de la qualité logicielle grâce à l'automatisation des tests",
        ],
        technologies: [".NET", "Azure", "TFS"],
    },
    {
        title: "Développeur Full Stack",
        company: "Ai3 - Pernod Ricard",
        period: "NOV 2018 - MARS 2020",
        responsibilities: [
            "Développement et évolution d'applications métier au sein d'un contexte international",
            "Contribution à la modernisation du patrimoine applicatif via plusieurs migrations vers .NET Core",
            "Participation à l'industrialisation des déploiements et à l'amélioration de la qualité logicielle",
            "Accompagnement de l'adoption des pratiques cloud et DevOps",
        ],
        technologies: [".NET", "Vue.js", "Azure", "Azure Devops"],
    },
    {
        title: "Développeur Full Stack (Alternance)",
        company: "Ai3",
        period: "NOV 2016 - NOV 2018",
        responsibilities: [
            "Refonte du portail de services managés utilisé par les clients et équipes internes",
            "Développement d'interfaces connectées à Microsoft Dynamics pour optimiser les processus métier",
            "Mise en œuvre de l'authentification Azure Active Directory et des mécanismes de sécurité associés",
            "Développement d'outils internes contribuant à l'efficacité des équipes commerciales",
        ],
        technologies: [".NET", "Angular", "Azure"],
    },
];
