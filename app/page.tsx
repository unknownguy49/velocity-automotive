"use client"

import { useState, useEffect } from "react"
import PremiumLoader from "@/components/premium-loader"
import AutomotiveNavbar from "@/components/automotive-navbar"
import AutomotiveHero from "@/components/automotive-hero"
import CarModelsCarousel from "@/components/car-models-carousel"
import PerformanceCards from "@/components/performance-cards"
import PartnersSection from "@/components/partners-section"
import AnalyticsSection from "@/components/analytics-section"
import TestimonialsSection from "@/components/testimonials-section"
import ChangingFeaturesSection from "@/components/changing-features-section"
import ShowcaseSection from "@/components/showcase-section"
import AutomotiveFooter from "@/components/automotive-footer"
import WaterRippleSystem from "@/components/water-ripple-system"
import TextRippleSystem from "@/components/text-ripple-system"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  if (isLoading) {
    return <PremiumLoader onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-black dark:bg-white transition-colors duration-300 relative">
      <WaterRippleSystem />
      <TextRippleSystem />
      <AutomotiveNavbar />
      <AutomotiveHero />
      <CarModelsCarousel />
      <PerformanceCards />
      <PartnersSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <ChangingFeaturesSection />
      <ShowcaseSection />
      <AutomotiveFooter />
    </div>
  )
}
