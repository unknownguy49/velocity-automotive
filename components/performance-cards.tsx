"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Cpu, Battery, Wind, Gauge, Star } from "lucide-react"

const performanceFeatures = [
  {
    id: 1,
    icon: Zap,
    title: "HYBRID POWERTRAIN",
    description: "Revolutionary hybrid system delivering unprecedented power and efficiency",
    features: ["1,020 HP Combined", "Instant Torque", "Regenerative Braking"],
    color: "from-yellow-400 to-red-500",
    popular: true,
  },
  {
    id: 2,
    icon: Shield,
    title: "CARBON FIBER CHASSIS",
    description: "Ultra-lightweight carbon fiber monocoque for maximum strength and agility",
    features: ["50% Weight Reduction", "Crash Protection", "Aerodynamic Design"],
    color: "from-gray-400 to-gray-600",
    popular: false,
  },
  {
    id: 3,
    icon: Cpu,
    title: "AI PERFORMANCE MODE",
    description: "Machine learning algorithms optimize performance in real-time",
    features: ["Predictive Handling", "Adaptive Suspension", "Smart Traction"],
    color: "from-blue-400 to-purple-500",
    popular: false,
  },
  {
    id: 4,
    icon: Battery,
    title: "ADVANCED BATTERY TECH",
    description: "Next-generation battery technology with rapid charging capabilities",
    features: ["400 Mile Range", "15-Min Fast Charge", "Thermal Management"],
    color: "from-green-400 to-blue-500",
    popular: false,
  },
  {
    id: 5,
    icon: Wind,
    title: "ACTIVE AERODYNAMICS",
    description: "Dynamic aerodynamic elements that adapt to driving conditions",
    features: ["Active Spoiler", "Air Curtains", "Underbody Panels"],
    color: "from-cyan-400 to-blue-500",
    popular: false,
  },
  {
    id: 6,
    icon: Gauge,
    title: "TRACK MODE SYSTEM",
    description: "Professional-grade track performance with telemetry data",
    features: ["Lap Timer", "G-Force Monitor", "Performance Analytics"],
    color: "from-red-400 to-pink-500",
    popular: false,
  },
]

export default function PerformanceCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="performance"
      className="py-32 bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white dark:text-black mb-6 tracking-tight">
            PERFORMANCE <span className="text-red-500">TECHNOLOGY</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 dark:text-gray-600 max-w-4xl mx-auto font-light">
            Engineering excellence meets cutting-edge innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performanceFeatures.map((feature) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.id}
                className={`relative overflow-hidden bg-gray-900/50 dark:bg-gray-100/50 border-gray-800 dark:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer group ${
                  hoveredCard === feature.id ? "ring-2 ring-red-500 shadow-red-500/25" : ""
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {feature.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    FLAGSHIP
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-none bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white dark:text-black tracking-wide">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-400 dark:text-gray-600 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300 dark:text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
