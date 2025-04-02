import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import BrailleText from "@/components/braille-text"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import BrailleDots from "@/components/braille-dots"
import HeroSection from "@/components/hero-section"
import OurHistorySection from "@/components/history-section"
import ProductShowcase from "@/components/product-showcase"
import Values from "@/components/values"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Keeping this as you liked it */}
      <HeroSection />

      <OurHistorySection />

      <ProductShowcase />
      <Values />

      {/* Tactile Newsletter Section */}
      <section className="py-20 bg-stone-50 relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 opacity-5">
            <BrailleDots pattern="join" className="w-full h-full" />
          </div>
          <div className="absolute bottom-10 right-10 w-40 h-40 opacity-5">
            <BrailleDots pattern="us" className="w-full h-full" />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-stone-200">
              <div className="text-center space-y-6 mb-8">
                <h2 className="text-3xl font-bold tracking-tighter">Junta-te à Nossa Comunidade</h2>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-orange-500"></div>
                </div>
                <BrailleText text="STAY CONNECTED" className="text-sm text-orange-500" />
                <p className="text-muted-foreground">
                Subscreve a nossa newsletter para se manter atualizado sobre as novas colecções, colaborações e o nosso percurso rumo a uma indústria da moda mais inclusiva.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium flex items-center gap-2">
                      <span>Nome</span>
                      <BrailleText text="Name" className="text-xs text-orange-500" />
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-full focus:border-orange-500 focus:ring focus:ring-orange-500/20 transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium flex items-center gap-2">
                      <span>Apelido</span>
                      <BrailleText text="Last" className="text-xs text-orange-500" />
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full px-4 py-3 border border-input rounded-full focus:border-orange-500 focus:ring focus:ring-orange-500/20 transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <span>Email</span>
                    <BrailleText text="Email" className="text-xs text-orange-500" />
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-input rounded-full focus:border-orange-500 focus:ring focus:ring-orange-500/20 transition-all"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full rounded-full bg-orange-500 hover:bg-orange-600">
                    Subscreve a Newsletter
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

