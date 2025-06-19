"use client"

import { useState, useEffect } from "react"

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Geometric pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-screen w-screen">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>

        {/* Progress content */}
        <div className="relative z-10 text-center">
          <div className="text-8xl font-bold text-white mb-8">{String(progress).padStart(2, "0")}%</div>
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
