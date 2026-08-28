import type { Metadata } from 'next'

import { HeroSection } from './_components/hero-section'
import { Services } from './_components/services'

export const metadata: Metadata = {
  title: 'François Chanteau - Développeur Full Stack & Architecte Cloud Azure',
  description:
    "Développeur Full Stack et architecte Cloud Azure avec plus de 10 ans d'expérience. Conception de solutions web modernes en .NET, React et Azure.",
}

export default function Home() {
  return (
    <main className="grow pt-24 pb-section-gap relative">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50"></div>
      <HeroSection />
      <Services />
    </main>
  )
}
