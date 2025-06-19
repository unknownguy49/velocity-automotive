"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AutomotiveNavbar() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Models", href: "#models" },
    { name: "Performance", href: "#performance" },
    { name: "Partners", href: "#partners" },
    { name: "Analytics", href: "#analytics" },
    { name: "Reviews", href: "#reviews" },
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 dark:bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/10 dark:border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Car className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-white dark:text-black tracking-wider">VELOCITY</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 dark:text-black/80 hover:text-white dark:hover:text-black px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="text-white/80 dark:text-black/80 hover:text-white dark:hover:text-black hover:bg-white/10 dark:hover:bg-black/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 dark:text-black/80 hover:text-white dark:hover:text-black hover:bg-white/10 dark:hover:bg-black/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 dark:bg-white/95 backdrop-blur-xl rounded-lg mt-2 shadow-2xl border border-white/10 dark:border-black/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 dark:text-black/80 hover:text-white dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
