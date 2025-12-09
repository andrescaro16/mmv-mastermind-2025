import { CTAButton } from './cta-button'
import { ArrowRight } from 'lucide-react'

export function TruthSection() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-br from-primary/5 to-accent/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              LA VISIÓN DEL EVENTO
            </h2>
            <p className="text-xl md:text-2xl font-medium text-primary">
              Este no es un evento más. Es un antes y un después en tu identidad, en tu negocio y en tu relación con Dios dentro del emprendimiento.
            </p>
          </div>

          {/* Transformations Grid */}
          <div className="grid gap-6 mb-16">
            {[
              { from: 'Aquí vienes con ruido…', to: 'Y sales con claridad absoluta.' },
              { from: 'Vienes con dudas sobre tu valor…', to: 'Y sales con la identidad espiritual reforzada de quien sabe quién es en Dios.' },
              { from: 'Vienes con una marca que "más o menos comunica"…', to: 'Y sales con una visión clara para tu marca en 2026.' },
              { from: 'Vienes con una oferta débil o dispersa…', to: 'Y sales con una oferta alineada a 10K/mes, sólida, coherente, irresistible.' },
              { from: 'Vienes con cansancio y frustración…', to: 'Y sales con un plan de acción de 90 días para avanzar con dirección, paz y enfoque.' },
              { from: 'Vienes sintiéndote solo…', to: 'Y sales conectado a una comunidad de emprendedores con propósito que están en tu misma sintonía.' },
              { from: 'Vienes sintiendo a Dios "a veces" en tu negocio…', to: 'Y sales habiéndote encontrado profundamente con Él en cada decisión estratégica del día.' }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-1 text-center md:text-right">
                  <p className="text-lg text-muted-foreground">{item.from}</p>
                </div>
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div className="md:hidden">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg font-semibold text-foreground">{item.to}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton size="large" href="https://wa.link/sjmou8">
              QUIERO ESTAR EN LLANOGRANDE
            </CTAButton>
            <CTAButton size="large" variant="secondary" className="text-primary! border-primary! hover:bg-primary/10!" href="https://wa.link/qng9f0">
              QUIERO PROGRAMA + EVENTO (MMV)
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
