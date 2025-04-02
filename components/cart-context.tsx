"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { CartItem } from "./cart"

type CartContextType = {
  isCartOpen: boolean
  cartItems: CartItem[]
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [itemCount, setItemCount] = useState(0)

  // Initialize cart from localStorage (if available)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('mimoo-cart')
      if (storedCart) {
        try {
          setCartItems(JSON.parse(storedCart))
        } catch (error) {
          console.error('Failed to parse cart data from localStorage:', error)
        }
      }
    }
  }, [])

  // Update localStorage when cart changes
  useEffect(() => {
    if (typeof window !== 'undefined' && cartItems.length > 0) {
      localStorage.setItem('mimoo-cart', JSON.stringify(cartItems))
    }
    
    // Calculate total item count
    const count = cartItems.reduce((total, item) => total + item.quantity, 0)
    setItemCount(count)
  }, [cartItems])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen(prev => !prev)

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setCartItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(item => item.id === newItem.id)
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...currentItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        return updatedItems
      } else {
        // Add new item with quantity 1
        return [...currentItems, { ...newItem, quantity: 1 }]
      }
    })
    
    // Open cart drawer when adding items
    openCart()
  }

  const removeFromCart = (id: number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('mimoo-cart')
  }

  const value = {
    isCartOpen,
    cartItems,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}