"use client"

import { useEffect, useState } from "react"

const customerLogos = [
  { name: "NVIDIA", logo: "NVIDIA" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Google", logo: "Google" },
  { name: "Amazon", logo: "Amazon" },
  { name: "Apple", logo: "Apple" },
  { name: "Meta", logo: "Meta" },
  { name: "Tesla", logo: "Tesla" },
  { name: "Netflix", logo: "Netflix" },
]

const logoSets = [customerLogos.slice(0, 4), customerLogos.slice(4, 8)]

export default function CustomersSection() {
  const [currentSet, setCurrentSet] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % logoSets.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="customers" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of companies that trust our platform
          </p>
        </div>

        <div className="relative h-32 overflow-hidden">
          {logoSets.map((logoSet, setIndex) => (
            <div
              key={setIndex}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                setIndex === currentSet ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {logoSet.map((customer, index) => (
                  <div
                    key={customer.name}
                    className={`text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 transform hover:scale-110 ${
                      setIndex === currentSet ? "animate-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {customer.logo}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Blinking indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {logoSets.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSet ? "bg-blue-600 animate-pulse" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
