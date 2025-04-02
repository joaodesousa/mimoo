"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import { motion, AnimatePresence } from "framer-motion"

export function CartButton() {
  const { toggleCart, itemCount } = useCart()

  return (
    <Button 
      onClick={toggleCart} 
      variant="ghost" 
      size="icon" 
      className="relative"
      aria-label="Open shopping cart"
    >
      <ShoppingBag className="h-5 w-5" />
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center justify-center"
            style={{ minWidth: '18px', height: '18px', padding: '0 5px' }}
          >
            {itemCount}
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Shopping cart</span>
    </Button>
  )
}