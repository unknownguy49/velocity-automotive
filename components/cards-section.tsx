"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Globe, Cpu, Database, Cloud, ArrowRight, Star } from "lucide-react"

const cardData = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure",
    features: ["99.9% Uptime", "Global CDN", "Edge Computing"],
    color: "from-yellow-400 to-orange-500",
    popular: false,
  },
  {
    id: 2,
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your sensitive data",
    features: ["End-to-end Encryption", "SOC 2 Compliant", "24/7 Monitoring"],
    color: "from-green-400 to-blue-500",
    popular: true,
  },
  {
    id: 3,
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our distributed infrastructure",
    features: ["Multi-region", "Auto-scaling", "Load Balancing"],
    color: "from-purple-400 to-pink-500",
    popular: false,
  },
  {
    id: 4,
    icon: Cpu,
    title: "AI-Powered",
    description: "Leverage artificial intelligence for smarter business decisions",
    features: ["Machine Learning", "Predictive Analytics", "Automation"],
    color: "from-blue-400 to-cyan-500",
    popular: false,
  },
  {
    id: 5,
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions for modern applications",
    features: ["Real-time Sync", "Backup & Recovery", "Analytics"],
    color: "from-indigo-400 to-purple-500",
    popular: false,
  },
  {
    id: 6,
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for the cloud with modern architecture patterns",
    features: ["Microservices", "Containerized", "DevOps Ready"],
    color: "from-teal-400 to-green-500",
    popular: false,
  },
]

export default function CardsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => {
            const IconComponent = card.icon
            return (
              <Card
                key={card.id}
                className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer group ${
                  hoveredCard === card.id ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {card.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{card.description}</p>

                  <ul className="space-y-2">
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
