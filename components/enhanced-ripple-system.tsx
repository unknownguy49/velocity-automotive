"use client"

import { useEffect, useRef, useState } from "react"

interface WaveRipple {
  id: number
  x: number
  y: number
  timestamp: number
  intensity: number
}

export default function EnhancedRippleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ripples, setRipples] = useState<WaveRipple[]>([])
  const animationRef = useRef<number>()
  const lastMousePos = useRef({ x: 0, y: 0 })

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

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x
      const dy = e.clientY - lastMousePos.current.y
      const speed = Math.sqrt(dx * dx + dy * dy)

      lastMousePos.current = { x: e.clientX, y: e.clientY }

      const newRipple: WaveRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        intensity: Math.min(speed / 10, 3), // Speed affects intensity
      }

      setRipples((prev) => [...prev.slice(-8), newRipple])
    }

    let throttleTimer: NodeJS.Timeout | null = null
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return
      throttleTimer = setTimeout(() => {
        handleMouseMove(e)
        throttleTimer = null
      }, 80)
    }

    document.addEventListener("mousemove", throttledMouseMove)

    const animate = () => {
      // Create flowing water effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const currentTime = Date.now()

      ripples.forEach((ripple, index) => {
        const age = currentTime - ripple.timestamp
        const maxAge = 4000

        if (age > maxAge) return

        const progress = age / maxAge
        const radius = progress * 1200 * ripple.intensity
        const opacity = Math.max(0, (1 - progress) * ripple.intensity * 0.8)

        // Create flowing wave patterns
        for (let wave = 0; wave < 5; wave++) {
          const waveRadius = radius - wave * 150
          if (waveRadius <= 0) continue

          const waveOpacity = opacity * (0.6 - wave * 0.1)

          // Main wave circle
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, waveRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(239, 68, 68, ${waveOpacity})`
          ctx.lineWidth = 3 - wave * 0.4
          ctx.stroke()

          // Add secondary waves for more realistic water effect
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, waveRadius + 20, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(251, 146, 60, ${waveOpacity * 0.5})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Add flowing gradient effect
        const flowGradient = ctx.createRadialGradient(ripple.x, ripple.y, 0, ripple.x, ripple.y, radius)
        flowGradient.addColorStop(0, `rgba(239, 68, 68, ${opacity * 0.15})`)
        flowGradient.addColorStop(0.3, `rgba(251, 146, 60, ${opacity * 0.1})`)
        flowGradient.addColorStop(0.7, `rgba(252, 211, 77, ${opacity * 0.05})`)
        flowGradient.addColorStop(1, "rgba(239, 68, 68, 0)")

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = flowGradient
        ctx.fill()

        // Add interference patterns between ripples
        ripples.forEach((otherRipple, otherIndex) => {
          if (index >= otherIndex) return

          const otherAge = currentTime - otherRipple.timestamp
          const otherProgress = otherAge / maxAge
          const otherRadius = otherProgress * 1200 * otherRipple.intensity

          const distance = Math.sqrt(Math.pow(ripple.x - otherRipple.x, 2) + Math.pow(ripple.y - otherRipple.y, 2))

          // Create interference where ripples meet
          if (Math.abs(radius - otherRadius) < 100 && distance < radius + otherRadius) {
            const midX = (ripple.x + otherRipple.x) / 2
            const midY = (ripple.y + otherRipple.y) / 2

            ctx.beginPath()
            ctx.arc(midX, midY, 30, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(239, 68, 68, ${opacity * 0.3})`
            ctx.fill()
          }
        })
      })

      setRipples((prev) => prev.filter((ripple) => currentTime - ripple.timestamp < 4000))
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove)
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
      className="fixed inset-0 pointer-events-none z-30 mix-blend-screen opacity-80"
      style={{ background: "transparent" }}
    />
  )
}
