"use client"

import { useState, useEffect } from "react"

export default function PremiumLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [showV, setShowV] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          // Show V animation
          setTimeout(() => setShowV(true), 300)
          // Start fade out
          setTimeout(() => setFadeOut(true), 1500)
          // Complete loading
          setTimeout(onComplete, 2000)
          return 100
        }
        return prev + 1.5
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Progress bar - centered */}
      <div className="relative z-10">
        <div className="w-80 h-1 bg-gray-800 overflow-hidden">
          <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Percentage - bottom left */}
      <div className="absolute bottom-16 left-16 z-10">
        <div className="text-white text-8xl font-light tracking-wider">
          {String(Math.floor(progress)).padStart(2, "0")}%
        </div>
      </div>

      {/* V Animation */}
      {showV && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-white text-9xl font-black animate-scale-in">V</div>
          {/* Expanding circle effect */}
          <div
            className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"
            style={{ animationDuration: "1s", animationIterationCount: "1" }}
          />
        </div>
      )}
    </div>
  )
}
