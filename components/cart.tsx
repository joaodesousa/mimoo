"use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Trash2, ShoppingBag, MinusCircle, PlusCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BrailleText from "@/components/braille-text"
import { cn } from "@/lib/utils"

export type CartItem = {
  id: number
  name: string
  price: string
  quantity: number
  image: string
}

type CartDrawerProps = {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) => {
  const [subtotal, setSubtotal] = useState("€0.00")

  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("€", ""))
      return sum + price * item.quantity
    }, 0)
    
    setSubtotal(`€${total.toFixed(2)}`)
  }, [cartItems])

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 right-0">
        <SheetHeader className="px-4 py-4 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-medium flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-orange-500" />
              <span>Your Cart</span>
              <BrailleText text="CART" className="text-xs text-orange-500 ml-2" />
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <div className="rounded-full bg-stone-100 p-3 mb-4">
              <ShoppingBag className="h-6 w-6 text-stone-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground text-sm mb-6">Add items to your cart to see them here.</p>
            <Button className="rounded-full bg-orange-500 hover:bg-orange-600" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0 bg-stone-100">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.price}</p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <MinusCircle className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <PlusCircle className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-red-50 hover:text-red-500"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-stone-50">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal:</span>
                  <span>{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total:</span>
                  <span>{subtotal}</span>
                </div>
              </div>

              <SheetFooter className="flex flex-col gap-2 mt-6">
                <Button className="w-full rounded-full bg-orange-500 hover:bg-orange-600">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}