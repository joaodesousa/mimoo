"use client"

import { useRef } from "react"
import Image from "next/image"
import BrailleText from "@/components/braille-text"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const timelineItems = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "MI.MOO was founded with a vision to make fashion truly inclusive, starting as a response to the unbalanced rights within the fashion industry.",
      image: "/images/tote-bag.png",
    },
    {
      year: "2020",
      title: "First Collection",
      description:
        "We launched our first collection featuring Braille elements, making a statement about accessibility in fashion.",
      image: "/images/models-collage.png",
    },
    {
      year: "2021",
      title: "ACAPO Collaboration",
      description:
        "Our partnership with ACAPO marked a significant milestone in our journey to create fashion that bridges different worlds.",
      image: "/images/tshirt-collab.png",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description:
        "MI.MOO's innovative approach to inclusive fashion gained international attention, expanding our reach and impact.",
      image: "/images/packaging.png",
    },
  ]

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
          <Image
            src="/images/models-collage.png"
            alt="MI.MOO fashion collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <BrailleText text="ABOUT US" className="text-lg mb-4" />
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Our Story
            </h1>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              MI.MOO is rooted in the Portuguese word "mimo," symbolizing the sweetness and care in treating
              individuals.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <BrailleText text="PHILOSOPHY" className="text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Brand Philosophy</h2>
              <div className="w-16 h-1 bg-orange-500"></div>
              <p className="text-lg text-muted-foreground">
                The dot in our name is not just a stylistic choice—it represents a bridge between different worlds,
                connecting those who can see with those who experience the world through touch.
              </p>
              <p className="text-muted-foreground">
                At MI.MOO, we maintain a simple, minimalist aesthetic while offering a fresh and engaging experience.
                Our designs are thoughtfully created to be both visually appealing and accessible through touch,
                ensuring that everyone can appreciate and enjoy our products.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-200 rounded-full"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/packaging.png"
                  alt="MI.MOO packaging with Braille"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-stone-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <BrailleText text="JOURNEY" className="text-orange-500 mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Journey</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to where we are today, our journey has been guided by our commitment to
              inclusivity.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-24">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 z-10 flex items-center justify-center text-white font-bold hidden md:flex">
                    {index + 1}
                  </div>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:rtl" : ""}`}>
                    <div className={`space-y-4 text-left ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                      <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <BrailleText text="VALUES" className="text-orange-500 mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg p-8 border border-stone-200 hover:border-orange-200 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <BrailleText text="I" className="text-2xl text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We design with everyone in mind, making fashion accessible to all regardless of ability.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group relative overflow-hidden rounded-lg p-8 border border-stone-200 hover:border-orange-200 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <BrailleText text="S" className="text-2xl text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to ethical production methods and sustainable materials that respect our planet.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group relative overflow-hidden rounded-lg p-8 border border-stone-200 hover:border-orange-200 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <BrailleText text="C" className="text-2xl text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  Created by people, for people. We believe in the power of community to drive positive change.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <BrailleText text="TEAM" className="text-orange-500 mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">The People Behind MI.MOO</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together expertise in fashion, accessibility, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Team Member ${i}`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-medium">Role</p>
                      <p className="text-sm opacity-80">Brief description of their contribution to MI.MOO</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Team Member {i}</h3>
                <p className="text-orange-500">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <BrailleText text="JOIN US" className="text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Be Part of Our Journey</h2>
            <p className="text-lg text-white/80">
              Join us in our mission to make fashion more inclusive and accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-orange-500 font-medium hover:bg-orange-50 transition-colors"
              >
                Explore Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

