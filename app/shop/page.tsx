import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function ShopPage() {
  // Sample product data
  const products = [
    { id: 1, image: "/images/tote-bag.png", name: "MI.MOO Tote Bag", price: "€25.00" },
    { id: 2, image: "/images/tshirt-collab.png", name: "ACAPO Collaboration Tee", price: "€35.00" },
    { id: 3, image: "/images/models-collage.png", name: "Classic MI.MOO Tee", price: "€30.00" },
    { id: 4, image: "/images/packaging.png", name: "Gift Box Experience", price: "€45.00" },
    { id: 5, image: "/images/tote-bag.png", name: "Limited Edition Tote", price: "€28.00" },
    { id: 6, image: "/images/tshirt-collab.png", name: "Green Statement Tee", price: "€32.00" },
    { id: 7, image: "/images/models-collage.png", name: "Braille Pattern Tee", price: "€30.00" },
    { id: 8, image: "/images/packaging.png", name: "Premium Gift Set", price: "€50.00" },
  ]

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">Shop Collection</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id}
            image={product.image} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  )
}

