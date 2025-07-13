"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % testimonials.length
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <>
      {/* Desktop Carousel */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <Card className="mx-4">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[var(--jsw-gold)] text-[var(--jsw-gold)]" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      {testimonial.location && (
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border-gray-200 hover:bg-gray-50"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4 text-gray-700" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border-gray-200 hover:bg-gray-50"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4 text-gray-700" />
        </Button>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-[var(--jsw-primary)]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Grid (unchanged) */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[var(--jsw-gold)] text-[var(--jsw-gold)]" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                {testimonial.location && (
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}