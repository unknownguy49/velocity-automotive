"use client"

import { useEffect, useRef, useState } from "react"

interface WaveRipple {
  id: number
  x: number
  y: number
  timestamp: number
  intensity: number
}

export default function WaterRippleSystem() {
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

      if (speed > 5) {
        // Only create ripples when mouse is moving
        const newRipple: WaveRipple = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          intensity: Math.min(speed / 20, 2),
        }

        setRipples((prev) => [...prev.slice(-6), newRipple])
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const currentTime = Date.now()

      ripples.forEach((ripple) => {
        const age = currentTime - ripple.timestamp
        const maxAge = 3000

        if (age > maxAge) return

        const progress = age / maxAge
        const radius = progress * 600
        const opacity = Math.max(0, (1 - progress) * 0.8)

        // Create multiple wave rings
        for (let wave = 0; wave < 4; wave++) {
          const waveRadius = radius - wave * 80
          if (waveRadius <= 0) continue

          const waveOpacity = opacity * (0.8 - wave * 0.15)

          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, waveRadius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(239, 68, 68, ${waveOpacity})`
          ctx.lineWidth = 3 - wave * 0.5
          ctx.stroke()

          // Add inner glow
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, waveRadius + 10, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(251, 146, 60, ${waveOpacity * 0.6})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Add center glow
        const gradient = ctx.createRadialGradient(ripple.x, ripple.y, 0, ripple.x, ripple.y, radius)
        gradient.addColorStop(0, `rgba(239, 68, 68, ${opacity * 0.2})`)
        gradient.addColorStop(0.5, `rgba(251, 146, 60, ${opacity * 0.1})`)
        gradient.addColorStop(1, "rgba(239, 68, 68, 0)")

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      setRipples((prev) => prev.filter((ripple) => currentTime - ripple.timestamp < 3000))
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
      style={{ background: "transparent" }}
    />
  )
}
