"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const performanceData = [
  { month: "Jan", horsepower: 800, torque: 750, efficiency: 85 },
  { month: "Feb", horsepower: 850, torque: 780, efficiency: 87 },
  { month: "Mar", horsepower: 900, torque: 820, efficiency: 89 },
  { month: "Apr", horsepower: 950, torque: 860, efficiency: 91 },
  { month: "May", horsepower: 1000, torque: 900, efficiency: 93 },
  { month: "Jun", horsepower: 1020, torque: 950, efficiency: 95 },
]

const salesData = [
  { model: "Hypercar", sales: 45 },
  { model: "Electric", sales: 120 },
  { model: "Luxury", sales: 85 },
  { model: "Sport", sales: 200 },
  { model: "SUV", sales: 150 },
]

const trackData = [
  { lap: "Lap 1", speed: 180 },
  { lap: "Lap 2", speed: 195 },
  { lap: "Lap 3", speed: 210 },
  { lap: "Lap 4", speed: 205 },
  { lap: "Lap 5", speed: 217 },
  { lap: "Lap 6", speed: 215 },
]

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-20 sm:py-32 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white dark:text-black mb-6 tracking-tight">
            PERFORMANCE <span className="text-red-500">ANALYTICS</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 dark:text-gray-600 max-w-4xl mx-auto">
            Real-time data insights from our engineering excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <Card className="bg-gray-900/50 dark:bg-gray-100/50 border-gray-800 dark:border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="text-white dark:text-black text-lg sm:text-xl">
                Engine Performance Evolution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-6">
              <ChartContainer
                config={{
                  horsepower: {
                    label: "Horsepower",
                    color: "hsl(var(--chart-1))",
                  },
                  torque: {
                    label: "Torque",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[250px] sm:h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" fontSize={12} />
                    <YAxis fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="horsepower" stroke="var(--color-horsepower)" strokeWidth={2} />
                    <Line type="monotone" dataKey="torque" stroke="var(--color-torque)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 dark:bg-gray-100/50 border-gray-800 dark:border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="text-white dark:text-black text-lg sm:text-xl">Model Sales Distribution</CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-6">
              <ChartContainer
                config={{
                  sales: {
                    label: "Sales",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[250px] sm:h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="model" fontSize={12} />
                    <YAxis fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900/50 dark:bg-gray-100/50 border-gray-800 dark:border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-white dark:text-black text-lg sm:text-xl">
              Track Performance - Speed Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-6">
            <ChartContainer
              config={{
                speed: {
                  label: "Speed (MPH)",
                  color: "hsl(var(--chart-4))",
                },
              }}
              className="h-[250px] sm:h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trackData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="lap" fontSize={12} />
                  <YAxis fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="speed"
                    stroke="var(--color-speed)"
                    fill="var(--color-speed)"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
