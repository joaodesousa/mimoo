import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import BrailleText from "@/components/braille-text"

export default function Footer() {
  return (
    <footer className="border-t bg-stone-50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1 text-xl font-bold">
              MI<span className="text-orange-500">.</span>MOO
            </Link>
            <BrailleText text="BY PEOPLE" className="text-sm text-muted-foreground" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Fashion that bridges differences and promotes inclusivity for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Loja</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/tshirts" className="text-sm text-muted-foreground hover:text-orange-500">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/shop/collaborations" className="text-sm text-muted-foreground hover:text-orange-500">
                  Colaborações
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Nós</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-orange-500">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-sm text-muted-foreground hover:text-orange-500">
                  Missão
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-orange-500">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 min-w-0 px-3 py-2 text-sm border border-input rounded-md"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MI.MOO. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-orange-500">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-orange-500">
              Termos de Serviço
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-orange-500">
              Acessibilidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

