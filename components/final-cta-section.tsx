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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <CTAButton size="large" className="w-full sm:w-auto">
              QUIERO MI LUGAR EN LLANOGRANDE 2025
            </CTAButton>
            <CTAButton size="large" variant="secondary" className="w-full sm:w-auto">
              QUIERO EL PROGRAMA + EL MASTERMIND
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
