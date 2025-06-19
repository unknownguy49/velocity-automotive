"use client"

import type React from "react"

import { useState } from "react"
import { Car, Mail, Phone, Facebook, Youtube, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AutomotiveFooter() {
  const [email, setEmail] = useState("")
  const [subscriptionMessage, setSubscriptionMessage] = useState("")

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscriptionMessage("Subscription successful!")
      setEmail("")
      setTimeout(() => setSubscriptionMessage(""), 3000)
    }
  }

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com", icon: Facebook },
    { name: "Instagram", url: "https://instagram.com/_.unknownguy49._", icon: Instagram },
    { name: "YouTube", url: "https://youtube.com", icon: Youtube },
    { name: "LinkedIn", url: "https://linkedin.com/in/dibyadyuti-dutta", icon: Linkedin },
  ]

  return (
    <footer className="bg-black dark:bg-white border-t border-red-500/20 dark:border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Car className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white dark:text-black tracking-wider">VELOCITY</h3>
            </div>
            <p className="text-gray-400 dark:text-gray-600 mb-6 leading-relaxed">
              Redefining automotive excellence through cutting-edge engineering and uncompromising performance.
              Experience the future of high-performance vehicles.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 dark:bg-gray-100/50 p-3 rounded-lg hover:bg-red-500 transition-colors duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 dark:text-gray-600 group-hover:text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white dark:text-black mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", targetId: "home" },
                { name: "Our Fleet", targetId: "models" },
                { name: "Showcase", targetId: "showcase" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleSmoothScroll(link.targetId)}
                    className="text-gray-400 dark:text-gray-600 hover:text-red-500 transition-colors duration-300 hover:translate-x-1 transform inline-block text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white dark:text-black mb-6 tracking-wide">NEWSLETTER</h4>
            <p className="text-gray-400 dark:text-gray-600 mb-6">
              Stay updated with our latest models and automotive innovations.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-900/50 dark:bg-gray-100/50 border-gray-700 dark:border-gray-300 text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-600"
                required
              />
              <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold">
                SUBSCRIBE
              </Button>
            </form>
            {subscriptionMessage && <p className="mt-4 text-green-400 text-sm font-semibold">{subscriptionMessage}</p>}
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-8 border-t border-gray-800 dark:border-gray-200">
          <h4 className="text-lg font-bold text-white dark:text-black mb-6 tracking-wide">CONTACT</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400 dark:text-gray-600">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
              <a href="tel:+919147048510" className="hover:text-red-500 transition-colors duration-300">
                +91 9147048510
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
              <a
                href="mailto:dibyadyutidutta49@gmail.com"
                className="hover:text-red-500 transition-colors duration-300"
              >
                dibyadyutidutta49@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 dark:border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 dark:text-gray-600 text-sm">
              © 2025 Velocity Automotive. All rights reserved. | Engineered for Excellence.
            </div>
          </div>
        </div>

        {/* Performance Stats Bar */}
        <div className="py-6 border-t border-red-500/20 dark:border-red-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-black text-red-500 mb-1">50+</div>
              <div className="text-xs text-gray-400 dark:text-gray-600 tracking-wider">MODELS DELIVERED</div>
            </div>
            <div>
              <div className="text-2xl font-black text-red-500 mb-1">1,020</div>
              <div className="text-xs text-gray-400 dark:text-gray-600 tracking-wider">MAX HORSEPOWER</div>
            </div>
            <div>
              <div className="text-2xl font-black text-red-500 mb-1">2.1s</div>
              <div className="text-xs text-gray-400 dark:text-gray-600 tracking-wider">0-60 MPH</div>
            </div>
            <div>
              <div className="text-2xl font-black text-red-500 mb-1">217</div>
              <div className="text-xs text-gray-400 dark:text-gray-600 tracking-wider">TOP SPEED MPH</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
