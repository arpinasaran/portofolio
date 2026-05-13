"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "Arvin is incredibly intelligent, remarkably quick to learn, and genuinely humble despite his brilliance.",
    author: "Clara Aurelia",
    role: "Colleague",
  },
  {
    id: 2,
    quote: "If I could describe Arvin in one word, charismatic would be perfect.",
    author: "Faiz",
    role: "Team Member",
  },
  {
    id: 3,
    quote: "Arvin is passionate and deeply driven.",
    author: "Zhafif",
    role: "Collaborator",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-cream-beige/30 bg-cream-beige/10">
                <CardContent className="p-6 md:p-8">
                  <Quote className="h-8 w-8 text-cream-beige opacity-50 mb-4" />
                  <p className="text-lg md:text-xl italic mb-6 text-cream-beige/90">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-cream-beige/20">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-cream-beige">{testimonial.author}</h4>
                      <p className="text-sm text-cream-beige/70">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-cream-beige text-cream-beige bg-cream-beige/10"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-cream-beige" : "bg-cream-beige/30"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-cream-beige text-cream-beige bg-cream-beige/10"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
