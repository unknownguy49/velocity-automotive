"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const showcaseItems = [
  {
    id: 1,
    title: "VELOCITY - HYPERCAR LAUNCH",
    year: "2025",
    tags: ["MONACO", "PREMIERE EVENT"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    number: "01",
    description: "The world premiere of our most advanced hypercar, showcasing revolutionary automotive technology",
  },
  {
    id: 2,
    title: "ELECTRIC FUTURE EXPO",
    year: "2025",
    tags: ["CALIFORNIA", "TECH SUMMIT"],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    number: "02",
    description: "Demonstrating the future of sustainable high-performance electric vehicles",
  },
  {
    id: 3,
    title: "TRACK DAY EXPERIENCE",
    year: "2025",
    tags: ["NÜRBURGRING", "PERFORMANCE"],
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    number: "03",
    description:
      "Professional drivers pushing our vehicles to their absolute limits on the world's most challenging track",
  },
]

export default function ShowcaseSection() {
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % showcaseItems.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const current = showcaseItems[currentItem]

  return (
    <section
      id="showcase"
      className="py-32 bg-gradient-to-br from-red-900 to-black dark:from-red-100 dark:to-white min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-red-500 leading-none tracking-tight">
                {current.title.split(" - ")[0]} - <span className="block">{current.title.split(" - ")[1]}</span>
              </h1>
              <div className="text-8xl md:text-9xl font-black text-red-500 opacity-20">{current.year}</div>
            </div>

            <div className="flex flex-wrap gap-4">
              {current.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-red-500 text-red-500 px-6 py-3 text-base font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-xl text-gray-300 dark:text-gray-700 max-w-lg leading-relaxed">{current.description}</p>

            <Button
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 text-xl font-bold rounded-none group shadow-2xl"
              onClick={() => alert("To be implemented later")}
            >
              READ MORE
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-none shadow-2xl">
              <img
                src={current.image || "/placeholder.svg"}
                alt={current.title}
                className="w-full h-[500px] object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent dark:from-black/50 dark:to-transparent"></div>
            </div>

            <div className="absolute -top-12 -right-12 text-9xl md:text-[12rem] font-black text-red-500 opacity-30 pointer-events-none">
              {current.number}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 space-x-4">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentItem ? "bg-red-500 w-12" : "bg-red-500/30 hover:bg-red-500/50"
              }`}
              onClick={() => setCurrentItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
