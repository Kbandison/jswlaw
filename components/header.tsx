"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Mail } from "lucide-react"
import { mainNavigation } from "@/data/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 lg:grid lg:grid-cols-3 lg:gap-30">
          {/* Desktop Layout */}
          <Link href="/" className="hidden lg:flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-[var(--jsw-primary)]">
              JSW Law Group
            </div>
          </Link>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex items-center justify-between w-full relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[var(--jsw-primary)] hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <Link href="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="text-xl sm:text-2xl font-serif font-bold text-[var(--jsw-primary)] whitespace-nowrap">
                <span className="hidden sm:inline">JSW Law Group</span>
                <span className="sm:hidden">JSW Law</span>
              </div>
            </Link>
            
            <Button 
              asChild
              size="sm"
              className="bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white flex-shrink-0 text-xs px-1.5 py-1"
            >
              <Link href="/contact">
                <span className="hidden sm:inline">Free Consultation</span>
                <span className="sm:hidden">Free Consult</span>
              </Link>
            </Button>
          </div>

          <nav className="hidden lg:flex items-center justify-center space-x-8 whitespace-nowrap">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[var(--jsw-primary)] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-end">
            <Button 
              asChild
              className="bg-[var(--jsw-primary)] hover:bg-[var(--jsw-primary-dark)] text-white"
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--jsw-primary)] transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a 
                  href="tel:(678) 638-0110" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-[var(--jsw-primary)] transition-colors px-2 py-1"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">(678) 638-0110</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Subnavbar - Desktop Only */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4 space-x-12 text-sm font-medium text-gray-600">
            <a 
              href="tel:(678) 638-0110" 
              className="flex items-center space-x-2 hover:text-[var(--jsw-primary)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(678) 638-0110</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>5855 Medlock Bridge Pkwy, Suwanee, GA 30024</span>
            </div>
            <a 
              href="mailto:hlwoo@jswlaw.com" 
              className="flex items-center space-x-2 hover:text-[var(--jsw-primary)] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>hlwoo@jswlaw.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}