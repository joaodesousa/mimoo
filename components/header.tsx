"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import BrailleText from "@/components/braille-text"
import { motion } from "framer-motion"
import { CartButton } from "./cart-button"
import { CartDrawer } from "./cart"
import { CartProvider, useCart } from "./cart-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart } = useCart()

  const routes = [
    { href: "/", label: "Home", braille: "H" },
    { href: "/shop", label: "Loja", braille: "S" },
    { href: "/about", label: "Sobre", braille: "A" },
    { href: "/mission", label: "Missão", braille: "M" },
    { href: "/contact", label: "Contacto", braille: "C" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0" hideCloseButton>
              <MobileMenu routes={routes} pathname={pathname} onClose={() => setIsMenuOpen(false)} />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-1">
            <div className="relative flex items-center">
              <span className="text-xl font-bold font-mono">MI</span>
              <span className="text-xl font-bold text-orange-500 font-mono">.</span>
              <span className="text-xl font-bold font-mono">MOO</span>
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                <BrailleText text="MIMOO" className="text-xs text-orange-500 opacity-70" />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {routes.map((route) => {
              const isActive = pathname === route.href

              return (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={`relative inline-block transition-colors ${
                      isActive ? "text-orange-500" : "text-foreground hover:text-orange-500/80"
                    }`}
                  >
                    <span className="text-sm font-medium">{route.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center">
          <CartButton />
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </header>
  )
}

// Mobile Menu Component
function MobileMenu({
  routes,
  pathname,
  onClose,
}: {
  routes: { href: string; label: string; braille: string }[]
  pathname: string
  onClose: () => void
}) {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Menu Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Link href="/" className="flex items-center gap-1" onClick={onClose}>
          <div className="relative">
            <span className="text-xl font-bold font-mono">MI</span>
            <span className="text-xl font-bold text-orange-500 font-mono">.</span>
            <span className="text-xl font-bold font-mono">MOO</span>
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
              <BrailleText text="MIMOO" className="text-xs text-orange-500 opacity-70" />
            </div>
          </div>
        </Link>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>

      {/* Menu Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Braille Pattern Background */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-10 gap-4 p-8 opacity-5 pointer-events-none">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-orange-500"></div>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="relative z-10 flex-1 flex flex-col justify-center p-8">
            <nav className="space-y-8">
              {routes.map((route) => {
                const isActive = pathname === route.href

                return (
                  <Link key={route.href} href={route.href} className="block group" onClick={onClose}>
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-4 transition-colors ${
                          isActive ? "bg-orange-500" : "bg-stone-200"
                        }`}
                      ></div>
                      <div className="flex flex-col">
                        <span
                          className={`text-2xl font-medium transition-colors ${
                            isActive ? "text-orange-500" : "text-foreground"
                          }`}
                        >
                          {route.label}
                        </span>
                        <BrailleText
                          text={route.label}
                          className={`text-sm transition-opacity ${
                            isActive ? "opacity-100 text-orange-500" : "opacity-50 text-stone-400"
                          }`}
                        />
                      </div>
                    </div>

                    {isActive && (
                      <div className="mt-3 pl-7 border-l-2 border-orange-500">
                        <p className="text-sm text-muted-foreground">
                          {route.href === "/" && "Explora a nossa coleção de moda inclusiva"}
                          {route.href === "/shop" && "Descobre os nossos produtos com elementos tácteis"}
                          {route.href === "/about" && "Conhece a nossa história e os nossos valores"}
                          {route.href === "/mission" && "Descubre o nosso compromisso com a inclusão"}
                          {route.href === "/contact" && "Fala com a nossa equipa"}
                        </p>
                      </div>
                    )}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-8 border-t">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full bg-stone-100">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-stone-100">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-stone-100">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MI.MOO</p>
                <CartButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}