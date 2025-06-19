"use client"

import { useEffect, useRef, useState } from "react"

interface TextRipple {
  id: number
  x: number
  y: number
  timestamp: number
  intensity: number
}

export default function TextRippleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ripples, setRipples] = useState<TextRipple[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleTextHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if hovering over text elements
      const isTextElement =
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        (target.tagName === "DIV" && target.textContent?.trim()) ||
        target.classList.contains("text-") ||
        target.closest('h1, h2, h3, p, span, [class*="text-"]')

      if (isTextElement) {
        const newRipple: TextRipple = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          intensity: 1.5,
        }

        setRipples((prev) => [...prev.slice(-4), newRipple])
      }
    }

    // Throttle hover events
    let throttleTimer: NodeJS.Timeout | null = null
    const throttledHover = (e: MouseEvent) => {
      if (throttleTimer) return
      throttleTimer = setTimeout(() => {
        handleTextHover(e)
        throttleTimer = null
      }, 150)
    }

    document.addEventListener("mouseover", throttledHover)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const currentTime = Date.now()

      ripples.forEach((ripple) => {
        const age = currentTime - ripple.timestamp
        const maxAge = 2000

        if (age > maxAge) return

        const progress = age / maxAge
        const radius = progress * 400
        const opacity = Math.max(0, (1 - progress) * 0.9)

        // Create text-specific ripple pattern
        for (let wave = 0; wave < 3; wave++) {
          const waveRadius = radius - wave * 60
          if (waveRadius <= 0) continue

          const waveOpacity = opacity * (0.7 - wave * 0.2)

          // Main text ripple
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, waveRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${waveOpacity})`
          ctx.lineWidth = 2 - wave * 0.3
          ctx.stroke()

          // Secondary glow
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, waveRadius + 15, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(239, 68, 68, ${waveOpacity * 0.6})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Add text glow effect
        const textGradient = ctx.createRadialGradient(ripple.x, ripple.y, 0, ripple.x, ripple.y, radius)
        textGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.15})`)
        textGradient.addColorStop(0.5, `rgba(239, 68, 68, ${opacity * 0.1})`)
        textGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = textGradient
        ctx.fill()
      })

      setRipples((prev) => prev.filter((ripple) => currentTime - ripple.timestamp < 2000))
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener("mouseover", throttledHover)
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (throttleTimer) {
        clearTimeout(throttleTimer)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40 mix-blend-screen"
      style={{ background: "transparent" }}
    />
  )
}
