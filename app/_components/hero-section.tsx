import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TechStack } from "./tech-stack";

export function HeroSection() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-section-gap relative z-10 flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                <div className="animate-fade-in-left flex-1 flex flex-col items-center md:items-start">
                    <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface max-w-4xl mb-stack-md leading-tight">
                        Développeur Full Stack, Architecte&nbsp;<span className="text-primary">Cloud</span> Azure
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
                        Avec plus de 10 années d&apos;expérience, j&apos;accompagne les entreprises dans la conception et la réalisation de solutions web modernes. De l&apos;architecture backend en .NET aux interfaces React, en passant par les infrastructures Azure, je privilégie des solutions fiables, maintenables et orientées métier.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-stack-lg">
                        <Link
                            href="/about"
                            className="bg-primary hover:scale-105 text-on-primary px-8 py-3 font-label-sm text-label-sm hover:bg-surface-tint transition-all duration-200 flex items-center justify-center gap-2 glow-effect"
                        >
                            Mes expériences
                            <ArrowRight />
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:scale-105 border border-outline bg-transparent text-on-surface px-8 py-3 font-label-sm text-label-sm hover:border-secondary hover:text-secondary transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            Contactez-moi
                        </Link>
                    </div>
                </div>
                <div className="relative shrink-0 animate-fade-in-right">
                    <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xl animate-pulse"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl border-2 border-primary/30 overflow-hidden glow-effect">
                        <Image
                            src="/assets/me.jpg"
                            width={400}
                            height={400}
                            alt="François Chanteau"
                            priority
                            sizes="(min-width: 768px) 320px, 256px"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <TechStack />
        </section>
    );
}
