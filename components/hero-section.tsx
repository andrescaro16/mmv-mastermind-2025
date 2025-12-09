import { CTAButton } from './cta-button'
import { MapPin, Calendar, Star, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground pt-20 pb-20">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-repeat"></div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium tracking-wide uppercase">Mastermind Misión de Vida · Llanogrande 2025</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            El evento presencial luxury que alinea tu identidad, tu negocio y tu espíritu con el propósito para el que fuiste creado.
          </h1>

          {/* Info strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-primary-foreground/90 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>14 de diciembre de 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Llanogrande (Medellín) · Lugar top</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Solo para emprendedores con propósito</span>
            </div>
          </div>

          {/* Mini Promise */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed text-pretty">
            En un solo día sales con tu identidad espiritual reforzada, una visión clara para tu marca en 2026, una oferta alineada a 10K/mes, un plan de acción de 90 días y una experiencia profunda de encuentro con Dios en tu negocio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <CTAButton size="large" href="https://wa.link/sjmou8">
              QUIERO ESTAR EN LLANOGRANDE
            </CTAButton>
            <CTAButton size="large" variant="secondary" href="https://wa.link/qng9f0">
              QUIERO PROGRAMA + EVENTO (MMV)
            </CTAButton>
          </div>

          {/* Video VSL Placeholder */}
          {/* <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/20 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-4 mx-auto cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-15 border-t-transparent border-l-25 border-l-white border-b-15 border-b-transparent ml-2"></div>
                </div>
                <p className="font-medium text-lg">Ver Video VSL</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
