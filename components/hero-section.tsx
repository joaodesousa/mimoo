"use client"

import Image from "next/image"
import Link from "next/link"
import BrailleText from "@/components/braille-text"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-full h-full">
          <div className="col-span-3 md:col-span-2 relative overflow-hidden">
            <Image
              src="/images/models-collage.png"
              alt="MI.MOO fashion collection"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="hidden md:block relative overflow-hidden">
            <Image
              src="/images/tshirt-collab.png"
              alt="MI.MOO x ACAPO collaboration"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            MI<span className="text-orange-500">.</span>MOO
          </h1>
          <BrailleText text="Inclusive Fashion" className="text-xl md:text-2xl font-light mb-6" />

          {/* Option 1: Elegant Fade-in Dot */}
          <Link href="/shop" className="group inline-flex items-center gap-3 relative">
            <span className="text-lg font-medium">Explora a coleção</span>
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
            <span className="sr-only">Explore our collection</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

