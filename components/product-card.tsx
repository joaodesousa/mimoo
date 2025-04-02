import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  image: string
  name: string
  price: string
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="min-w-[250px] max-w-sm group">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button size="icon" className="rounded-full h-10 w-10 bg-orange-500 hover:bg-orange-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium">
          <Link href="/shop/product" className="hover:underline">
            {name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{price}</p>
      </div>
    </div>
  )
}

