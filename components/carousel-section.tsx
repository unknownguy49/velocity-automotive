"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const carouselItems = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "Harness the power of artificial intelligence to gain unprecedented insights into your business data.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Scale your applications seamlessly with our robust cloud infrastructure solutions.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Security First",
    description: "Enterprise-grade security measures to protect your most valuable digital assets.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Real-time Collaboration",
    description: "Connect your team with powerful collaboration tools that work in real-time.",
    image: "/placeholder.svg?height=400&width=600",
    color: "from-orange-500 to-red-500",
  },
]

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative solutions can transform your business
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <Card className="border-0 rounded-none">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                        <div className={`bg-gradient-to-br ${item.color} p-12 flex flex-col justify-center text-white`}>
                          <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                          <p className="text-lg mb-8 opacity-90">{item.description}</p>
                          <Button variant="secondary" className="self-start bg-white text-gray-900 hover:bg-gray-100">
                            Learn More
                          </Button>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-12 flex items-center justify-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="max-w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
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
