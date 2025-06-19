"use client"

import { useEffect, useState } from "react"

const partnerLogos = [
  { name: "Ferrari", logo: "FERRARI" },
  { name: "Lamborghini", logo: "LAMBORGHINI" },
  { name: "McLaren", logo: "MCLAREN" },
  { name: "Porsche", logo: "PORSCHE" },
  { name: "Bugatti", logo: "BUGATTI" },
  { name: "Koenigsegg", logo: "KOENIGSEGG" },
  { name: "Pagani", logo: "PAGANI" },
  { name: "Aston Martin", logo: "ASTON MARTIN" },
]

const logoSets = [partnerLogos.slice(0, 4), partnerLogos.slice(4, 8)]

export default function PartnersSection() {
  const [currentSet, setCurrentSet] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % logoSets.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="partners" className="py-32 bg-gray-900 dark:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white dark:text-black mb-6 tracking-tight">
            TRUSTED <span className="text-red-500">PARTNERS</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 dark:text-gray-600">
            Collaborating with the world's most prestigious automotive brands
          </p>
        </div>

        <div className="relative h-40 overflow-hidden">
          {logoSets.map((logoSet, setIndex) => (
            <div
              key={setIndex}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                setIndex === currentSet ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {logoSet.map((partner, index) => (
                  <div
                    key={partner.name}
                    className={`text-xl md:text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-red-500 transition-all duration-300 transform hover:scale-110 ${
                      setIndex === currentSet ? "animate-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {logoSets.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSet ? "bg-red-500 animate-pulse w-8" : "bg-gray-600 dark:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
