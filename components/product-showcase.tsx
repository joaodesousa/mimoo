"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BrailleText from "@/components/braille-text"

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "MI.MOO Tote Bag",
      braille: "Tote",
      price: "€25.00",
      image: "/images/tote-bag.png",
      alt: "MI.MOO Tote Bag",
      color: "bg-stone-100",
    },
    {
      id: 2,
      name: "ACAPO Collaboration Tee",
      braille: "Collab",
      price: "€35.00",
      image: "/images/tshirt-collab.png",
      alt: "ACAPO Collaboration Tee",
      color: "bg-orange-50",
    },
    {
      id: 3,
      name: "Classic MI.MOO Tee",
      braille: "Classic",
      price: "€30.00",
      image: "/images/models-collage.png",
      alt: "Classic MI.MOO Tee",
      color: "bg-stone-50",
    },
    {
      id: 4,
      name: "Gift Box Experience",
      braille: "Gift",
      price: "€45.00",
      image: "/images/packaging.png",
      alt: "Gift Box Experience",
      color: "bg-orange-100",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background pattern - subtle dots */}
      <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Sente A Nossa Coleção</h2>
            <BrailleText text="Sente A Nossa Coleção" className="text-sm text-orange-500 pb-2" />
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <p className="max-w-2xl text-lg text-muted-foreground">
            Descobre os últimos lançamentos da nossa coleção
            </p>
          </div>
        </div>

      <div className="container px-4 md:px-6 relative z-10">

        {/* Simple Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <Link href={`/shop/product/${product.id}`} key={product.id} className="group tactile-card overflow-hidden p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-white">
              <div className={`relative aspect-square rounded-xl overflow-hidden ${product.color} p-6 mb-4`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-1">
                <BrailleText text={product.braille} className="text-xs text-orange-500 mb-1" />
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="font-bold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Simple Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button className="rounded-full bg-orange-500 hover:bg-orange-600 px-8">Explorar Todos os Produtos</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

