import BrailleText from "./braille-text"
import { Heart } from "lucide-react"

export default function Values(){
    return(
        <>
    
        {/* Interactive Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">O Nossos Valores</h2>
            <BrailleText text="Os Nossos Valores" className="text-sm text-orange-500 pb-2" />
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
            <p className="max-w-2xl text-lg text-muted-foreground">
            Interage com os nossos valores fundamentais através de uma experiência tátil
            </p>
          </div>

          {/* Interactive Braille Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 p-8 border border-stone-200 rounded-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrailleText
                        text="Inclusividade"
                        className="text-4xl text-orange-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                      <Heart className="h-12 w-12 text-orange-500" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Inclusividade</h3>
                <p className="text-muted-foreground text-center">
                Desenhamos a pensar em todos, tornando a moda acessível a todos, independentemente das suas capacidades.
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 p-8 border border-stone-200 rounded-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrailleText
                        text="Acessibilidade"
                        className="text-4xl text-orange-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Acessibilidade</h3>
                <p className="text-muted-foreground text-center">
                Os nossos produtos incorporam elementos em Braille, fazendo a ponte entre a moda e a funcionalidade.
                </p>
              </div>
            </div>

            <div className="group relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 p-8 border border-stone-200 rounded-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrailleText
                        text="BY"
                        className="text-4xl text-orange-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                      <span className="text-2xl font-bold text-orange-500">BY</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Comunidade</h3>
                <p className="text-muted-foreground text-center">
                Criado por pessoas, para pessoas. Acreditamos no poder da comunidade para promover mudanças positivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}