import { services } from "../home.data";

import { ServiceCard } from "./service-card";

export function Services() {
    return (
        <section className="animate-fade-in-up max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-section-gap relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
}
