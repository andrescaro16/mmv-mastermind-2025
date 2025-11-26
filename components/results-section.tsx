import { Check, ArrowRight, X } from 'lucide-react'
import { CTAButton } from './cta-button'

export function ResultsSection() {
  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground text-balance">
            BENEFICIOS CONCRETOS
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Al terminar el día:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Sales con... */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <ArrowRight className="w-6 h-6" />
                Sales con...
              </h3>
              <ul className="space-y-4">
                {[
                  'Tu identidad espiritual reforzada.',
                  'Mensaje y marca clara.',
                  'Una oferta alineada a 10K/mes (o claridad absoluta para construirla).',
                  'Guion de contenido listo para publicar.',
                  'Un plan de acción de 90 días.',
                  'Fe renovada.',
                  'Convicción, dirección y enfoque.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Te llevas... */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <ArrowRight className="w-6 h-6" />
                Te llevas...
              </h3>
              <ul className="space-y-4">
                {[
                  'Estrategia real.',
                  'Comunidad.',
                  'Presencia de Dios en el negocio.',
                  'Decisiones tomadas desde tu espíritu, no desde tu miedo.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Y dejas atrás... */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border opacity-90">
              <h3 className="text-xl font-bold mb-6 text-destructive flex items-center gap-2">
                <X className="w-6 h-6" />
                Y dejas atrás...
              </h3>
              <ul className="space-y-4">
                {[
                  'El ruido.',
                  'El estancamiento.',
                  'El autosabotaje.',
                  'La identidad débil.',
                  'La confusión del "¿qué hago ahora?"'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-destructive mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton size="large">
              QUIERO ESTAR EN LLANOGRANDE
            </CTAButton>
            <CTAButton size="large" variant="secondary" className="text-primary! border-primary! hover:bg-primary/10!">
              QUIERO PROGRAMA + EVENTO (MMV)
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
