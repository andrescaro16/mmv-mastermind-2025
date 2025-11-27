import { CTAButton } from './cta-button'

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main message */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-balance">
            Tu espíritu ya sabe si este evento es para ti.
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 text-pretty max-w-3xl mx-auto">
            Tu corazón ya lo sintió. Ahora solo falta que tu identidad tome una decisión alineada.
            <br />
            <span className="font-bold block mt-4 text-2xl md:text-3xl">14 de diciembre de 2025 será un antes y un después. Ven a vivirlo.</span>
          </p>

          {/* Final CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <CTAButton size="large" className="w-full sm:w-auto">
              QUIERO MI LUGAR EN LLANOGRANDE 2025
            </CTAButton>
            <CTAButton size="large" variant="secondary" className="w-full sm:w-auto">
              QUIERO EL PROGRAMA + EL MASTERMIND
            </CTAButton>
          </div>

          {/* VIP CTA Additional Block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-bold mb-6 text-center">
              ¿Sabes que no quieres solo claridad, sino IMPLEMENTACIÓN acompañada?
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Si quieres estar en el Día 1 (Mastermind presencial):</p>
                  <p className="text-primary-foreground/80 mb-3">Haz clic en el botón y asegura tu entrada general por 300 USD.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-yellow-300">2</span>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1 text-yellow-300">Si sabes que tu siguiente nivel requiere sentarte 1 a 1 con Alejo y su equipo para implementar todo,</p>
                  <p className="text-primary-foreground/80 mb-4">envíame la palabra VIP por DM o haz clic en el botón de Entrada VIP (800 USD) y asegura tu lugar para los 2 días completos.</p>
                  <CTAButton className="w-full sm:w-auto bg-yellow-500 text-primary hover:bg-yellow-400 border-none">
                    QUIERO MI ENTRADA VIP (800 USD)
                  </CTAButton>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm font-medium text-yellow-200/80">
                ⚠️ Los cupos VIP son muy limitados y se asignan solo a personas realmente comprometidas con implementar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
