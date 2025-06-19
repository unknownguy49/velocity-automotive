"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Zap } from "lucide-react"

export default function AutomotiveHero() {
  const [scrollY, setScrollY] = useState(0)
  const [currentCar, setCurrentCar] = useState(0)

  const cars = ["HYPERCAR", "SUPERCAR", "ELECTRIC", "LUXURY"]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCar((prev) => (prev + 1) % cars.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 dark:from-white dark:via-gray-100 dark:to-red-100"
    >
      {/* Parallax animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 dark:bg-red-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 dark:bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-2000"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Top tagline with proper spacing */}
          <div className="pt-20 sm:pt-24">
            <p className="text-red-500 text-sm sm:text-lg lg:text-xl font-light tracking-[0.2em] sm:tracking-[0.3em] animate-fade-in hover:text-red-400 transition-colors duration-300 cursor-pointer">
              REDEFINING AUTOMOTIVE EXCELLENCE
            </p>
          </div>

          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white dark:text-black leading-none tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
              DRIVE THE
            </h1>

            <h2 className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight hover:scale-110 transition-transform duration-300 cursor-pointer">
              {cars[currentCar]}
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 dark:text-gray-700 leading-relaxed font-light hover:text-white dark:hover:text-black transition-colors duration-300 cursor-pointer">
              Experience the pinnacle of automotive engineering where cutting-edge technology meets uncompromising
              performance
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4 py-8 sm:py-12">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("models")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-none shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 border-2 border-red-500/50 w-full sm:w-auto"
            >
              <Zap className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:animate-spin" />
              EXPLORE MODELS
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("showcase")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-none shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-white dark:border-black w-full sm:w-auto"
            >
              <Calendar className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-125 transition-transform duration-300" />
              SEE EVENTS
            </Button>
          </div>

          {/* Performance stats */}
          <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16 pt-8 sm:pt-12 lg:pt-16 border-t border-white/20 dark:border-black/20">
              <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white dark:text-black mb-2 sm:mb-4">
                  0-60
                </div>
                <div className="text-red-500 font-light tracking-wider text-xs sm:text-sm lg:text-base">
                  2.1 SECONDS
                </div>
              </div>

              <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white dark:text-black mb-2 sm:mb-4">
                  TOP SPEED
                </div>
                <div className="text-red-500 font-light tracking-wider text-xs sm:text-sm lg:text-base">217 MPH</div>
              </div>

              <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white dark:text-black mb-2 sm:mb-4">
                  POWER
                </div>
                <div className="text-red-500 font-light tracking-wider text-xs sm:text-sm lg:text-base">1,020 HP</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pb-8 sm:pb-12">
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-6 h-10 sm:h-12 border-2 border-white/50 dark:border-black/50 rounded-full flex justify-center animate-bounce mx-auto">
                <div className="w-1 h-3 sm:h-4 bg-white/50 dark:bg-black/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
