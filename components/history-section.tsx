"use client"

import { useState } from "react"
import Image from "next/image"
import BrailleText from "@/components/braille-text"
import BrailleDots from "@/components/braille-dots"
import { motion, AnimatePresence } from "framer-motion"

export default function OurHistorySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const historyPoints = [
    {
      title: "A Origem",
      description:
        'MI.MOO tem as suas raízes na palavra portuguesa "mimo", que simboliza a doçura e o cuidado no tratamento dos indivíduos.',
      image: "/images/tote-bag.png",
      alt: "MI.MOO tote bag",
    },
    {
      title: "O Ponto",
      description:
        "O ponto em MI.MOO realça as diferenças como uma ponte e não como uma barreira, ligando os mundos visual e tátil.",
      image: "/images/packaging.png",
      alt: "MI.MOO packaging with Braille",
    },
    {
      title: "A Missão",
      description: "Estamos empenhados em tornar a moda acessível a todos, garantindo a inclusão em cada ponto.",
      image: "/images/tshirt-collab.png",
      alt: "MI.MOO collaboration",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Braille pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <BrailleDots pattern="mimoo" className="w-full h-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">A Nossa História</h2>
          <BrailleText text="A Nossa História" className="text-sm text-orange-500 pb-2" />
          <div className="w-16 h-1 bg-orange-500 mb-8"></div>
        </div>

        {/* Interactive Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200 transform -translate-y-1/2"></div>
            <div className="flex items-center justify-between relative" style={{ width: "280px" }}>
              {historyPoints.map((point, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-6 h-6 rounded-full z-10 shadow-md transition-all duration-300 focus:outline-none ${
                    activeIndex === index ? "bg-orange-500 scale-125" : "bg-stone-300 hover:bg-orange-300"
                  }`}
                  aria-label={point.title}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">{historyPoints[activeIndex].title}</h3>
                <BrailleText text={historyPoints[activeIndex].title} className="text-sm text-orange-500 mb-4" />
                <p className="text-muted-foreground">{historyPoints[activeIndex].description}</p>

                <div className="flex items-center mt-8">
                  <button
                    onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                    disabled={activeIndex === 0}
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center mr-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <div className="text-sm">
                    {activeIndex + 1} / {historyPoints.length}
                  </div>

                  <button
                    onClick={() => setActiveIndex((prev) => (prev < historyPoints.length - 1 ? prev + 1 : prev))}
                    disabled={activeIndex === historyPoints.length - 1}
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={historyPoints[activeIndex].image || "/placeholder.svg"}
                    alt={historyPoints[activeIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

