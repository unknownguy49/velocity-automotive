"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"

interface ScrollRevealTextProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export default function ScrollRevealText({
  children,
  className = "",
  threshold = 0.3,
  delay = 0,
}: ScrollRevealTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, delay])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  )
}
