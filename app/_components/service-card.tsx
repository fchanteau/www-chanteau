import { Service } from "../home.data";

const ACCENT_STYLES = {
    primary: {
        card: "hover:border-primary",
        icon: "text-primary group-hover:bg-primary-container group-hover:text-on-primary-container",
    },
    secondary: {
        card: "hover:border-secondary",
        icon: "text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container",
    },
} as const;

export function ServiceCard({ icon: Icon, title, description, accent }: Service) {
    const styles = ACCENT_STYLES[accent];

    return (
        <div className={`bg-surface-container-low border border-outline-variant/20 rounded-lg p-6 transition-colors duration-300 group ${styles.card}`}>
            <div className={`w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-4 transition-colors ${styles.icon}`}>
                <Icon />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
        </div>
    );
}
