"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Marcus Rodriguez",
    role: "Professional Race Driver",
    company: "Formula Velocity",
    content:
      "The precision and power delivery of this hypercar is absolutely phenomenal. It's redefined what I thought was possible on the track.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Elena Petrov",
    role: "Automotive Journalist",
    company: "Speed Magazine",
    content:
      "I've driven every supercar on the market, but nothing comes close to the engineering excellence and pure adrenaline of this machine.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "James Chen",
    role: "Collector & Enthusiast",
    company: "Private Collection",
    content:
      "This isn't just a car, it's a masterpiece. The attention to detail and performance capabilities are simply unmatched in the industry.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Isabella Ferrari",
    role: "Track Day Instructor",
    company: "Apex Racing School",
    content:
      "Teaching students in this vehicle has been incredible. The technology assists while still delivering that raw, authentic driving experience.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    name: "Alexander Volkov",
    role: "Automotive Engineer",
    company: "Performance Dynamics",
    content:
      "From an engineering perspective, this represents the absolute pinnacle of automotive innovation and design excellence.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section
      id="reviews"
      className="py-32 bg-gradient-to-br from-red-900 via-black to-gray-900 dark:from-red-100 dark:via-white dark:to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white dark:text-black mb-6 tracking-tight">
            DRIVER <span className="text-red-500">TESTIMONIALS</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 dark:text-gray-700 max-w-4xl mx-auto">
            Hear from the professionals who push our vehicles to their limits
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-black/50 dark:bg-white/50 backdrop-blur-xl shadow-2xl border-red-500/20 dark:border-red-500/20">
                    <CardContent className="p-12 text-center">
                      <div className="flex justify-center mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-red-500 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-2xl text-white dark:text-black mb-12 italic font-light leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center space-x-6">
                        <Avatar className="w-20 h-20 border-2 border-red-500">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-red-500 text-white text-lg font-bold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-bold text-xl text-white dark:text-black">{testimonial.name}</div>
                          <div className="text-gray-300 dark:text-gray-700">{testimonial.role}</div>
                          <div className="text-red-500 font-semibold">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-black/80 dark:bg-white/80 border-red-500/50 text-white dark:text-black hover:bg-red-500/20 shadow-2xl w-16 h-16"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-black/80 dark:bg-white/80 border-red-500/50 text-white dark:text-black hover:bg-red-500/20 shadow-2xl w-16 h-16"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 w-12" : "bg-gray-500 hover:bg-gray-400"
                }`}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
