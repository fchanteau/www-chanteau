import { ArrowRight, Cloud, PanelsTopLeft, Server } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grow pt-24 pb-section-gap relative">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50"></div>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-section-gap relative z-10 flex flex-col items-center text-center"><div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface max-w-4xl mb-stack-md leading-tight">
            Développeur Full Stack, Architecte&nbsp;<span className="text-primary">Cloud</span> Azure
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
            Avec plus de 10 années d'expérience, j'accompagne les entreprises dans la conception et la réalisation de solutions web modernes. De l'architecture backend en .NET aux interfaces React, en passant par les infrastructures Azure, je privilégie des solutions fiables, maintenables et orientées métier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-stack-lg">
            <button className="bg-primary text-on-primary px-8 py-3 font-label-sm text-label-sm hover:bg-surface-tint transition-colors duration-200 flex items-center justify-center gap-2 glow-effect">
              <Link href="/about" className="flex items-center justify-center gap-2">
                Mes expériences
                <ArrowRight />
              </Link>
            </button>
            <button className="border border-outline bg-transparent text-on-surface px-8 py-3 font-label-sm text-label-sm hover:border-secondary hover:text-secondary transition-colors duration-200 flex items-center justify-center gap-2">
              <Link href="/contact">
                Contactez-moi
              </Link>
            </button>
          </div>
        </div>
        <div className="relative shrink-0">
          <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-xl animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl border-2 border-primary/30 overflow-hidden glow-effect">
            <Image src="/assets/me.jpg" width={400} height={400} alt="François Chanteau" className="w-full h-full object-cover" />
            {/* <img alt="François Chanteau - Professional Headshot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3tJc19ECSrJjKoe1xg06RSw2DtuDheehgSeb5HVUfhRSkRrSR1MImQn8b20EnoajvCCtvZpeaf3bnQeRMDal4898F8dtw3u7D4_Gl1mhXcrriU6vEgWE6Cq1cLmAVeOWVHYTAKovb8HTM5VW44XyfcT9fNlAsdPFlYM4eEIr2yD3rdrTIzD3fQFMJqdegwQiXzWw9rv5HLILg60tf2XJAAr7V9bHnqB-c0kubVb4PUBHsKYUSAlMuQ" /> */}
          </div>
        </div>
      </div>
        <div className="w-full max-w-4xl pt-stack-lg mt-section-gap">
          <p className="font-label-sm text-on-surface-variant mb-6 text-center uppercase tracking-widest">Technologies & expertises</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80">
            <div className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20">
              <span className="font-code-block text-code-block text-primary">.NET</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20">
              <span className="font-code-block text-code-block text-secondary">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20">
              <span className="font-code-block text-code-block text-primary">Azure</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20">
              <span className="font-code-block text-code-block text-on-surface">Terraform</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20">
              <span className="font-code-block text-code-block text-primary">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-surface-container py-3 px-6 border border-outline-variant/20">
              <span className="font-code-block text-code-block text-on-surface">CI/CD</span>
            </div>
          </div>
        </div></section>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-section-gap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-6 hover:border-primary transition-colors duration-300 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <Server />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Architecture Backend</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Développement d'API robustes et de services métier en .NET, conçus pour répondre aux exigences de performance et de scalabilité.</p>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-6 hover:border-secondary transition-colors duration-300 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
              <PanelsTopLeft />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Développement Frontend</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Conception d'expériences utilisateur fluides et performantes grâce à React, TypeScript et une approche orientée qualité.</p>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-6 hover:border-primary transition-colors duration-300 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <Cloud />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Architecture Cloud & DevOps</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Automatisation, déploiement et supervision d'environnements Cloud fiables pour accélérer la livraison et garantir la qualité des applications.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
