import React from 'react'
import { Navbar, Hero, FeaturesGrid, Sponsors, Stats, CTA, Footer } from '../organisms'

export function LandingTemplate() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <Stats />
        <Sponsors />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingTemplate


