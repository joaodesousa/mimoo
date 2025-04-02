"use client"

import { useRef } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import BrailleText from "@/components/braille-text"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export default function MissionPage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: true })

  const statsRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })

  const stats = [
    { value: "100+", label: "Products with Braille", description: "Making fashion accessible through touch" },
    {
      value: "5+",
      label: "Inclusive Collaborations",
      description: "Partnering with organizations that share our vision",
    },
    { value: "1000+", label: "Lives Impacted", description: "Creating meaningful change in the fashion industry" },
  ]

  const pillars = [
    {
      title: "Accessibility",
      description:
        "We incorporate Braille elements into our designs, not just as a functional feature for those who read by touch, but as a visual reminder of the diversity of human experience.",
      icon: "A",
      color: "bg-orange-100",
    },
    {
      title: "Education",
      description:
        "We're committed to raising awareness about accessibility issues in the fashion industry and advocating for industry-wide changes.",
      icon: "E",
      color: "bg-stone-100",
    },
    {
      title: "Empowerment",
      description:
        "We provide employment opportunities for individuals with visual impairments and donate a portion of our profits to supporting organizations.",
      icon: "P",
      color: "bg-orange-50",
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tshirt-collab.png"
            alt="MI.MOO x ACAPO collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <BrailleText text="OUR MISSION" className="text-lg mb-4" />
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Making Fashion Accessible
            </h1>
            <div className="text-xl font-light mb-8 max-w-2xl mx-auto flex flex-col">
              <BrailleText text="OLHOS QUE NÃO VEEM, INCLUSÃO QUE SE SENTE" className="mb-2" />
              <span>Eyes that don't see, inclusion that is felt.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <BrailleText text="VISION" className="text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Vision</h2>
              <div className="w-16 h-1 bg-orange-500"></div>
              <p className="text-lg text-muted-foreground">
                At MI.MOO, we envision a world where fashion is truly accessible to everyone, regardless of ability. We
                believe that the joy of self-expression through clothing should be universal, and we're committed to
                breaking down barriers that have traditionally excluded individuals with visual impairments from fully
                participating in fashion.
              </p>
              <p className="text-muted-foreground">
                The dot in MI.MOO symbolizes the bridge between different worlds, highlighting that our differences can
                connect rather than divide us. We're not just creating clothes—we're creating connections.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image src="/images/tote-bag.png" alt="MI.MOO tote bag" fill className="object-cover" />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image src="/images/packaging.png" alt="MI.MOO packaging" fill className="object-cover" />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden col-span-2">
                  <Image src="/images/models-collage.png" alt="MI.MOO models" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-stone-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-50" ref={statsRef}>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <BrailleText text="PILLARS" className="text-orange-500 mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Mission Pillars</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission is built on three core pillars that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative rounded-lg overflow-hidden"
              >
                <div className={`absolute inset-0 ${pillar.color} opacity-50`}></div>
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                    <BrailleText text={pillar.icon} className="text-2xl text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-stone-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <BrailleText text="IMPACT" className="text-orange-500 mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Impact</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories of how MI.MOO is making a difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Workshops</h3>
                  <p className="text-muted-foreground">
                    Our workshops bring together people with and without visual impairments to learn about fashion
                    design and accessibility.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Community Workshop"
                  alt="Community workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-500 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Employment Opportunities</h3>
                  <p className="text-muted-foreground">
                    We provide meaningful employment opportunities for individuals with visual impairments in our design
                    and production processes.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Employment Program"
                  alt="Employment program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full"></div>
              <div className="relative z-10 bg-stone-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Our Commitments</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Raising awareness about accessibility issues in fashion</p>
                      <p className="text-sm text-muted-foreground">Through education and advocacy campaigns</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Providing employment opportunities</p>
                      <p className="text-sm text-muted-foreground">For individuals with visual impairments</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Donating to support organizations</p>
                      <p className="text-sm text-muted-foreground">
                        A portion of our profits goes to organizations that support visually impaired communities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Advocating for industry-wide changes</p>
                      <p className="text-sm text-muted-foreground">
                        Working with partners to make fashion more inclusive
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <BrailleText text="COMMITMENT" className="text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Beyond Fashion</h2>
              <div className="w-16 h-1 bg-orange-500"></div>
              <p className="text-lg text-muted-foreground">
                At MI.MOO, we believe that true inclusion isn't just about making accommodations—it's about creating a
                world where everyone belongs. Our mission goes beyond fashion; it's about changing perceptions and
                building a more empathetic society.
              </p>
              <p className="text-muted-foreground">
                Through our products, partnerships, and community initiatives, we're working to create lasting change in
                how the fashion industry approaches accessibility and inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <BrailleText text="JOIN US" className="text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Be Part of Our Mission</h2>
            <p className="text-lg text-white/80">
              Join us in our mission to make fashion more inclusive and accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-orange-500 font-medium hover:bg-orange-50 transition-colors"
              >
                Shop Our Collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

