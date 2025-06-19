"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Zap, Gauge, Fuel } from "lucide-react"
import { Button } from "@/components/ui/button"

const carModels = [
  {
    id: 1,
    name: "APEX HYPERCAR",
    model: "AH-1 FURY",
    price: "$2,500,000",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    specs: {
      power: "1,020 HP",
      torque: "1,050 lb-ft",
      acceleration: "2.1s 0-60",
      topSpeed: "217 MPH",
    },
    color: "from-red-600 to-orange-600",
    description: "The ultimate expression of automotive perfection",
  },
  {
    id: 2,
    name: "ELECTRIC BEAST",
    model: "EB-X LIGHTNING",
    price: "$180,000",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    specs: {
      power: "750 HP",
      torque: "900 lb-ft",
      acceleration: "2.8s 0-60",
      range: "400 miles",
    },
    color: "from-blue-600 to-cyan-600",
    description: "Zero emissions, maximum performance",
  },
  {
    id: 3,
    name: "LUXURY GRAND TOURER",
    model: "LGT-S PHANTOM",
    price: "$350,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    specs: {
      power: "650 HP",
      torque: "750 lb-ft",
      acceleration: "3.2s 0-60",
      topSpeed: "205 MPH",
    },
    color: "from-purple-600 to-pink-600",
    description: "Where luxury meets unbridled power",
  },
]

export default function CarModelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carModels.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carModels.length) % carModels.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carModels.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section id="models" className="py-20 sm:py-32 bg-black dark:bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white dark:text-black mb-6 tracking-tight">
            OUR <span className="text-red-500">FLEET</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 dark:text-gray-600 max-w-4xl mx-auto font-light">
            Each vehicle represents the pinnacle of engineering excellence
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-none">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carModels.map((car) => (
                <div key={car.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px]">
                    <div className="relative group order-2 lg:order-1">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${car.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <img
                        src={car.image || "/placeholder.svg"}
                        alt={car.name}
                        className="w-full h-80 sm:h-96 object-cover rounded-none shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-black/80 dark:bg-white/80 backdrop-blur-sm px-4 py-2 rounded-none">
                        <span className="text-white dark:text-black font-bold text-lg">{car.price}</span>
                      </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                      <div>
                        <div className="text-red-500 text-sm font-bold tracking-[0.3em] mb-2">{car.name}</div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white dark:text-black mb-4 tracking-tight">
                          {car.model}
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-400 dark:text-gray-600 font-light leading-relaxed">
                          {car.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-gray-900/50 dark:bg-gray-100/50 p-4 sm:p-6 border border-gray-800 dark:border-gray-200 hover:scale-105 transition-transform duration-300">
                          <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mb-3" />
                          <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">
                            {car.specs.power}
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm">POWER OUTPUT</div>
                        </div>
                        <div className="bg-gray-900/50 dark:bg-gray-100/50 p-4 sm:p-6 border border-gray-800 dark:border-gray-200 hover:scale-105 transition-transform duration-300">
                          <Gauge className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mb-3" />
                          <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">
                            {car.specs.acceleration}
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm">ACCELERATION</div>
                        </div>
                        <div className="bg-gray-900/50 dark:bg-gray-100/50 p-4 sm:p-6 border border-gray-800 dark:border-gray-200 hover:scale-105 transition-transform duration-300">
                          <Fuel className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mb-3" />
                          <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">
                            {car.specs.torque}
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm">TORQUE</div>
                        </div>
                        <div className="bg-gray-900/50 dark:bg-gray-100/50 p-4 sm:p-6 border border-gray-800 dark:border-gray-200 hover:scale-105 transition-transform duration-300">
                          <Gauge className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mb-3" />
                          <div className="text-xl sm:text-2xl font-bold text-white dark:text-black">
                            {car.specs.topSpeed || car.specs.range}
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm">
                            {car.specs.topSpeed ? "TOP SPEED" : "RANGE"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/80 dark:bg-white/80 border-white/20 dark:border-black/20 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 w-12 h-12 sm:w-16 sm:h-16"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/80 dark:bg-white/80 border-white/20 dark:border-black/20 text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 w-12 h-12 sm:w-16 sm:h-16"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          <div className="flex justify-center mt-8 sm:mt-12 space-x-4">
            {carModels.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-red-500 w-8 sm:w-12" : "bg-gray-600 dark:bg-gray-400 hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
