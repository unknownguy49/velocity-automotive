"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface RippleButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
}

/**
 * Compatibility wrapper.
 * Keeps the old `import "./ripple-button"` statements working,
 * but now renders a plain shadcn Button (no ripple animation).
 */
export default function RippleButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
}: RippleButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} onClick={onClick}>
      {children}
    </Button>
  )
}
