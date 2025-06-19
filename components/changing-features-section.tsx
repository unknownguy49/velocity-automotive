"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featureCategories = [
  {
    title: "POWER, PRECISION, AND PERFORMANCE",
    mainHeading: "Unparalleled",
    subHeading: "Automotive Engineering",
    features: [
      { name: "ENGINE", color: "bg-red-200 dark:bg-red-100", icon: "🔥" },
      { name: "TRANSMISSION", color: "bg-orange-200 dark:bg-orange-100", icon: "⚙️" },
      { name: "SUSPENSION", color: "bg-yellow-200 dark:bg-yellow-100", icon: "🏎️" },
      { name: "BRAKING", color: "bg-green-200 dark:bg-green-100", icon: "🛑" },
    ],
    description: {
      title: "Real-Time Performance Monitoring",
      subtitle: "Advanced telemetry systems providing instant feedback on all vehicle parameters",
    },
  },
  {
    title: "INNOVATION, EFFICIENCY, AND SUSTAINABILITY",
    mainHeading: "Next-Generation",
    subHeading: "Electric Powertrain",
    features: [
      { name: "BATTERY", color: "bg-blue-200 dark:bg-blue-100", icon: "🔋" },
      { name: "MOTOR", color: "bg-purple-200 dark:bg-purple-100", icon: "⚡" },
      { name: "CHARGING", color: "bg-pink-200 dark:bg-pink-100", icon: "🔌" },
      { name: "REGEN", color: "bg-cyan-200 dark:bg-cyan-100", icon: "♻️" },
    ],
    description: {
      title: "Intelligent Energy Management",
      subtitle: "AI-powered systems optimizing energy distribution for maximum performance and range",
    },
  },
  {
    title: "LUXURY, COMFORT, AND TECHNOLOGY",
    mainHeading: "Premium",
    subHeading: "Interior Experience",
    features: [
      { name: "DISPLAY", color: "bg-indigo-200 dark:bg-indigo-100", icon: "📱" },
      { name: "AUDIO", color: "bg-teal-200 dark:bg-teal-100", icon: "🎵" },
      { name: "CLIMATE", color: "bg-lime-200 dark:bg-lime-100", icon: "❄️" },
      { name: "SEATING", color: "bg-rose-200 dark:bg-rose-100", icon: "🪑" },
    ],
    description: {
      title: "Adaptive Cabin Environment",
      subtitle: "Personalized comfort settings that learn and adapt to driver preferences",
    },
  },
]

export default function ChangingFeaturesSection() {
  const [currentCategory, setCurrentCategory] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % featureCategories.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const currentFeatures = featureCategories[currentCategory]

  return (
    <section
      id="features"
      className="py-20 sm:py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 tracking-[0.2em] sm:tracking-[0.3em]">
            {currentFeatures.title}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            {currentFeatures.mainHeading}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 dark:text-gray-300 tracking-tight">
            {currentFeatures.subHeading}
          </h2>
        </div>

        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
            {currentFeatures.features.map((feature, index) => (
              <div
                key={feature.name}
                className={`${feature.color} rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 transform transition-all duration-700 hover:scale-110 animate-fade-in shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <span className="text-xl sm:text-2xl lg:text-3xl">{feature.icon}</span>
                <span className="font-bold text-gray-800 text-sm sm:text-base lg:text-lg tracking-wide">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              {currentFeatures.description.title}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {currentFeatures.description.subtitle}
            </p>
          </div>

          <div className="relative">
            <Card className="bg-white dark:bg-gray-800 shadow-2xl border-0 overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold"
                    >
                      VELOCITY SYSTEM
                    </Badge>
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">ACTIVE</div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-lg sm:text-xl">V</span>
                      </div>
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        Performance Mode
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-10 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center"
                        >
                          <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16 space-x-2 sm:space-x-3">
          {featureCategories.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 ${
                index === currentCategory ? "bg-red-500 w-8 sm:w-12" : "bg-gray-400 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
