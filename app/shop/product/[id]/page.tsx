"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingBag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BrailleText from "@/components/braille-text"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "@/components/product-card"

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  // Sample product data
  const product = {
    id: 1,
    name: "T-shirt Colaboração ACAPO",
    braille: "ACAPO",
    price: "35,00€",
    description:
      "A parte da frente apresenta um padrão tátil em Braille e um design minimalista, criado em colaboração com a ACAPO (Associação dos Cegos e Amblíopes de Portugal). A parte de trás tem um design desenhado por artistas invisuais.",
    materials: "100% algodão orgânico | Acabamento tátil em Braille",
    features: [
      "Design inclusivo com elementos em Braille",
      "Material sustentável e de alta qualidade",
      "Corte regular unissexo",
      "Parte dos lucros revertem para a ACAPO",
    ],
    images: [
      "/images/tshirt-collab.png",
      "/images/models-collage.png",
      "/images/packaging.png",
      "/images/tote-bag.png",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#FFFFFF", "#000000", "#F97316"],
    inStock: true,
  }

  // Related products
  const relatedProducts = [
    { id: 1, image: "/images/tote-bag.png", name: "Sacola MI.MOO", price: "25,00€" },
    { id: 2, image: "/images/tshirt-collab.png", name: "T-shirt MI.MOO Clássica", price: "30,00€" },
    { id: 3, image: "/images/models-collage.png", name: "T-shirt Padrão Braille", price: "30,00€" },
    { id: 4, image: "/images/packaging.png", name: "Caixa Presente Experience", price: "45,00€" },
  ]

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm flex items-center space-x-1 text-muted-foreground">
        <Link href="/" className="hover:text-orange-500 transition-colors">
          Início
        </Link>
        <span>
          <ChevronRight className="h-4 w-4" />
        </span>
        <Link href="/shop" className="hover:text-orange-500 transition-colors">
          Loja
        </Link>
        <span>
          <ChevronRight className="h-4 w-4" />
        </span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.images[activeImage]}
              alt={`${product.name} - Image ${activeImage + 1}`}
              fill
              className="object-cover"
              priority
            />

            {/* Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full opacity-80 hover:opacity-100"
                onClick={() => setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Imagem anterior</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full opacity-80 hover:opacity-100"
                onClick={() => setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Imagem seguinte</span>
              </Button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <ScrollArea className="whitespace-nowrap">
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
                    activeImage === index ? "ring-2 ring-orange-500" : "ring-1 ring-transparent"
                  }`}
                >
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <BrailleText text={product.braille} className="text-sm text-orange-500 mb-2" />
            <h1 className="text-3xl font-bold tracking-tighter">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">{product.price}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div>
            <h3 className="text-sm font-medium mb-2">Materiais</h3>
            <p className="text-sm text-muted-foreground">{product.materials}</p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium mb-3">Cor</h3>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`h-8 w-8 rounded-full border ${index === 0 ? "ring-2 ring-orange-500 ring-offset-2" : ""}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Opção de cor ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between mb-3">
              <h3 className="text-sm font-medium">Tamanho</h3>
              <button className="text-xs text-orange-500 hover:underline">Guia de Tamanhos</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`min-w-[3rem] border rounded-md px-3 py-2 text-sm font-medium transition-colors 
                    ${
                      selectedSize === size
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-input hover:bg-muted"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium mb-3">Quantidade</h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-md"
                onClick={decrementQuantity}
                disabled={quantity === 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Diminuir quantidade</span>
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-md" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Aumentar quantidade</span>
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button
              className="flex-1 gap-2 bg-orange-500 hover:bg-orange-600"
              disabled={!selectedSize || !product.inStock}
            >
              <ShoppingBag className="h-4 w-4" />
              Adicionar ao Carrinho
            </Button>
            <Button variant="outline" size="icon" className="rounded-md">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Adicionar à lista de desejos</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-md">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Partilhar produto</span>
            </Button>
          </div>

          {/* Incentives */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border bg-stone-50 p-4">
            <div className="text-center">
              <h4 className="text-sm font-medium">Envio Gratuito</h4>
              <p className="text-xs text-muted-foreground">Em encomendas acima de 50€</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-medium">Devoluções</h4>
              <p className="text-xs text-muted-foreground">30 dias</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="features">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger
              value="features"
              className="rounded-none border-b-2 border-transparent px-4 py-3 text-sm data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Características
            </TabsTrigger>
            <TabsTrigger
              value="sizing"
              className="rounded-none border-b-2 border-transparent px-4 py-3 text-sm data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Tamanhos e Cuidados
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="rounded-none border-b-2 border-transparent px-4 py-3 text-sm data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Envio e Devoluções
            </TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Características do Produto</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <h4 className="text-md font-medium mb-2">Experiência Tátil</h4>
                <p className="text-muted-foreground">
                  Cada produto é desenhado com elementos táteis, tornando-o acessível tanto para pessoas com visão como para pessoas com deficiência visual. Os padrões em Braille são cuidadosamente elaborados para manter a sua integridade mesmo após várias lavagens.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sizing" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Informação de Tamanhos</h3>
              <p className="text-muted-foreground">
                Os nossos produtos são desenhados tendo em mente um ajuste inclusivo. Recomendamos encomendar o seu tamanho normal para um ajuste regular, ou um tamanho acima para um ajuste mais solto.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left font-medium">Tamanho</th>
                      <th className="py-3 text-left font-medium">Peito (cm)</th>
                      <th className="py-3 text-left font-medium">Comprimento (cm)</th>
                      <th className="py-3 text-left font-medium">Manga (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">XS</td>
                      <td className="py-3">88-92</td>
                      <td className="py-3">66</td>
                      <td className="py-3">20</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">S</td>
                      <td className="py-3">92-96</td>
                      <td className="py-3">68</td>
                      <td className="py-3">21</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">M</td>
                      <td className="py-3">96-100</td>
                      <td className="py-3">70</td>
                      <td className="py-3">22</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">L</td>
                      <td className="py-3">100-104</td>
                      <td className="py-3">72</td>
                      <td className="py-3">23</td>
                    </tr>
                    <tr>
                      <td className="py-3">XL</td>
                      <td className="py-3">104-108</td>
                      <td className="py-3">74</td>
                      <td className="py-3">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="pt-4">
                <h4 className="text-md font-medium mb-2">Instruções de Lavagem</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Lavar à máquina em água fria com cores similares</li>
                  <li>Não usar lixívia</li>
                  <li>Secar em tambor a temperatura baixa</li>
                  <li>Passar a ferro a temperatura baixa se necessário</li>
                  <li>Não lavar a seco</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Informação de Envio</h3>
                <p className="text-muted-foreground mt-2">
                  Enviamos para a maioria dos países em todo o mundo. Os tempos e custos de envio podem variar dependendo da sua localização.
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li><span className="font-medium">Portugal:</span> 1-3 dias úteis</li>
                  <li><span className="font-medium">União Europeia:</span> 3-5 dias úteis</li>
                  <li><span className="font-medium">Resto do Mundo:</span> 7-14 dias úteis</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Envio gratuito em encomendas acima de 50€ dentro da UE. Os custos de envio internacionais serão calculados no checkout.
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium">Política de Devoluções</h3>
                <p className="text-muted-foreground mt-2">
                  Aceitamos devoluções até 30 dias após a compra para artigos em estado original. Os custos de envio da devolução são da responsabilidade do cliente, exceto se o artigo foi recebido danificado ou com defeito.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Para iniciar uma devolução, por favor contacte a nossa equipa de apoio ao cliente em <span className="text-orange-500">devolucoes@mimoo.com</span>.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Social Impact Section */}
      <div className="mb-16 bg-stone-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <BrailleText text="IMPACTO" className="text-sm text-orange-500" />
          <h2 className="text-2xl font-bold tracking-tighter">O Nosso Impacto Social</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-muted-foreground">
            Por cada T-shirt Colaboração ACAPO vendida, doamos 5€ à associação ACAPO para apoiar programas para pessoas com deficiência visual em Portugal. Ao comprar este produto, está a contribuir para uma sociedade mais inclusiva.
          </p>
          <Link href="/mission" className="inline-flex items-center text-orange-500 hover:underline font-medium">
            Saiba mais sobre a nossa missão
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* Related Products Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tighter">Também Pode Gostar</h2>
          <Link href="/shop" className="text-orange-500 hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} image={product.image} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  )
}