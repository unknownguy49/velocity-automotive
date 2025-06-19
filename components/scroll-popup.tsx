"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercentage > 50 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <Card className="max-w-md mx-4 bg-white dark:bg-gray-800 shadow-2xl animate-scale-in">
        <CardContent className="p-6 text-center relative">
          <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setIsVisible(false)}>
            <X className="h-4 w-4" />
          </Button>

          <div className="mb-4">
            <Gift className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Special Offer!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get 30% off your first month when you sign up today. Limited time offer!
            </p>
          </div>

          <div className="space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => setIsVisible(false)}
            >
              Claim Offer
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => setIsVisible(false)}>
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
