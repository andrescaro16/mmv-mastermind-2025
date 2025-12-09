import { Check, Star, Lock, Crown } from 'lucide-react'
import { CTAButton } from './cta-button'

export function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-[#1a1025] text-white relative overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Elige tu nivel de compromiso
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No es solo un evento. Es el inicio de tu siguiente dimensión.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Card 1: Entrada General */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Entrada General</h3>
              <div className="text-3xl font-bold text-white">300 USD</div>
              <p className="text-sm text-gray-400 mt-2">Día 1 · Mastermind Presencial</p>
            </div>
            
            <ul className="space-y-4 mb-8 grow">
              {[
                'Acceso al Día 1 (14 Dic)',
                'Kit de bienvenida',
                'Cuaderno de trabajo',
                'Sesiones estratégicas',
                'Networking consciente',
                'Plan de acción claro',
                'Experiencias de Alto Impacto',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <CTAButton href="https://wa.link/sjmou8" className="w-full bg-white/10 hover:bg-white/20 border-none">
              ELEGIR GENERAL
            </CTAButton>
          </div>

          {/* Card 2: Entrada VIP */}
          <div className="bg-linear-to-b from-primary/20 to-primary/5 backdrop-blur-sm rounded-3xl p-8 border border-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.15)] transform md:-translate-y-4 flex flex-col h-full relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              + Implementación con Equipo
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                <Crown className="w-5 h-5" /> Entrada VIP
              </h3>
              <div className="text-4xl font-bold text-white">800 USD</div>
              <p className="text-sm text-gray-300 mt-2">Día 1 + Día 2 (Implementación)</p>
            </div>
            
            <ul className="space-y-4 mb-8 grow">
              {[
                'Todo lo de la Entrada General',
                'Acceso al Día 2 (15 Dic)',
                'Implementación 1 a 1',
                'Sesión con Alejo y equipo',
                'Revisión de oferta y nicho',
                'Estrategia de ventas personalizada',
                'Optimización de procesos',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white">
                  <Star className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <CTAButton href="https://wa.link/pr7mde" className="w-full bg-primary hover:bg-primary/90 border-none shadow-lg shadow-primary/25">
              QUIERO SER VIP
            </CTAButton>
          </div>

          {/* Card 3: Programa MMV + Evento */}
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-xl font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Programa MMV + Evento
              </h3>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-400">
                PREMIUM
              </div>
              <p className="text-sm text-gray-500 mt-2">La experiencia completa</p>
            </div>
            
            <div className="grow relative z-10 flex flex-col justify-center items-center text-center py-8">
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                El programa completo Método Misión de Vida + Acceso al evento presencial
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Solo bajo aplicación</p>
            </div>

            <CTAButton href="https://wa.link/qng9f0" variant="secondary" className="w-full relative z-10 border-gray-700 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/30">
              APLICAR AHORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
