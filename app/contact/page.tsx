"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import BrailleText from "@/components/braille-text"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/packaging.png"
            alt="MI.MOO packaging with Braille"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <BrailleText text="CONTACTO" className="text-lg mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Entre em Contacto</h1>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              Gostaríamos de ouvir a sua opinião. Contacte a equipa MI.MOO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-stone-50 p-8 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visite-nos</h3>
              <p className="text-muted-foreground mb-2">
                Rua da MIMOO, 123
                <br />
                4620-000 Lousada
                <br />
                Portugal
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline inline-flex items-center"
              >
                Ver no mapa
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-stone-50 p-8 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Envie-nos um Email</h3>
              <p className="text-muted-foreground mb-2">
                Informações Gerais:
                <br />
                <a href="mailto:info@mimoo.com" className="text-orange-500 hover:underline">
                  info@mimoo.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Suporte:
                <br />
                <a href="mailto:support@mimoo.com" className="text-orange-500 hover:underline">
                  support@mimoo.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-stone-50 p-8 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ligue-nos</h3>
              <p className="text-muted-foreground mb-2">
                Telefone:
                <br />
                <a href="tel:+351123456789" className="text-orange-500 hover:underline">
                  +351 123 456 789
                </a>
              </p>
              <p className="text-muted-foreground">
                Horário:
                <br />
                Segunda a Sexta, 9h-18h
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-stone-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200 rounded-full -ml-24 -mb-24 opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <BrailleText text="MENSAGEM" className="text-orange-500" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Envie-nos uma Mensagem</h2>
                <div className="w-16 h-1 bg-orange-500"></div>
                <p className="text-lg text-muted-foreground">
                  Estamos comprometidos em tornar a nossa comunicação acessível a todos. Se preferir outras formas de
                  contacto, por favor, informe-nos.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-orange-50 transition-colors"
                    >
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
                        className="h-5 w-5 text-orange-500"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-orange-50 transition-colors"
                    >
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
                        className="h-5 w-5 text-orange-500"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-orange-50 transition-colors"
                    >
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
                        className="h-5 w-5 text-orange-500"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Opções de Acessibilidade</h3>
                  <p className="text-muted-foreground mb-4">Oferecemos várias formas de comunicar connosco:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>Correspondência em Braille</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>Videoconferências com língua gestual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>Mensagens de voz</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span>Reuniões presenciais</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground mb-6">
                      Obrigado pelo seu contacto. Responderemos assim que possível.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full">
                      Enviar Outra Mensagem
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium flex items-center gap-2">
                          <span>Nome</span>
                          <BrailleText text="N" className="text-xs text-orange-500" />
                        </label>
                        <Input
                          id="first-name"
                          placeholder="Insira o seu nome"
                          className="rounded-md focus:border-orange-500 focus:ring focus:ring-orange-500/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium flex items-center gap-2">
                          <span>Apelido</span>
                          <BrailleText text="A" className="text-xs text-orange-500" />
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Insira o seu apelido"
                          className="rounded-md focus:border-orange-500 focus:ring focus:ring-orange-500/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <span>Email</span>
                        <BrailleText text="E" className="text-xs text-orange-500" />
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Insira o seu email"
                        className="rounded-md focus:border-orange-500 focus:ring focus:ring-orange-500/20"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                        <span>Assunto</span>
                        <BrailleText text="A" className="text-xs text-orange-500" />
                      </label>
                      <Input
                        id="subject"
                        placeholder="Insira o assunto"
                        className="rounded-md focus:border-orange-500 focus:ring focus:ring-orange-500/20"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                        <span>Mensagem</span>
                        <BrailleText text="M" className="text-xs text-orange-500" />
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Insira a sua mensagem"
                        rows={5}
                        className="rounded-md focus:border-orange-500 focus:ring focus:ring-orange-500/20"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <span>Método de Contacto Preferido</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="contact-method"
                            className="text-orange-500 focus:ring-orange-500"
                            defaultChecked
                          />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="contact-method" className="text-orange-500 focus:ring-orange-500" />
                          <span>Telefone</span>
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-stone-200 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Mapa Interativo</p>
            <p className="text-sm text-muted-foreground">(Este seria um mapa do Google Maps incorporado em produção)</p>
          </div>
        </div>
      </section>
    </div>
  )
}

