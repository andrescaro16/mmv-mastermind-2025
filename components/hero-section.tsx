import { CTAButton } from './cta-button'
import { MapPin, Calendar } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-repeat"></div>
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Location and date badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <MapPin className="w-4 h-4" />
              <span className="text-sm md:text-base font-medium">Rionegro</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Calendar className="w-4 h-4" />
              <span className="text-sm md:text-base font-medium">14 de Diciembre</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-8 leading-tight text-balance">
            EL EVENTO DONDE ORDENAS TU PROPÓSITO, TU MENSAJE Y TU NEGOCIO CON DIOS EN EL CENTRO
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-center mb-10 max-w-4xl mx-auto leading-relaxed text-primary-foreground/90 text-pretty">
            Un día intensivo para ordenar tu propósito, tu mensaje y tu negocio mediante la estructura del Método Misión de Vida, colocando a Dios como la fuente de todo.
          </p>

          {/* FOMO strip */}
          <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 mb-10 max-w-3xl mx-auto">
            <p className="text-center text-base md:text-lg font-medium text-primary-foreground">
              Las entradas son extremadamente limitadas. Quien llega aquí no es por casualidad.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <CTAButton size="large">
              Quiero ser parte
            </CTAButton>
            <p className="text-sm text-primary-foreground/80 text-center max-w-md">
              Serás redirigid@ a WhatsApp para asegurar tu entrada y resolver tus dudas.
            </p>
          </div>

          {/* Hero image placeholder - Alejandro */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Alejandro Jaramillo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
