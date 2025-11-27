import { CTAButton } from './cta-button'
import { Check, Gift, Zap, BookOpen } from 'lucide-react'

export function IncludesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            TODO LO QUE INCLUYE EL EVENTO
          </h2>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border mb-16">
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                'Acceso full day al evento (10 horas de experiencia).',
                'Cuaderno de trabajo premium.',
                'Frameworks estratégicos exclusivos.',
                'Kit Misión de Vida físico.',
                'Material descargable en PDF post-evento.',
                'Activaciones espirituales.',
                'Mentoría estratégica en vivo.',
                'Networking consciente con personas en tu misma frecuencia.',
                'Claridad de identidad, marca, oferta y contenido.',
                'Estructura real para crecer a 10K/mes.',
                'Sesión grupal online de seguimiento (30–40 días después).',
                'Prioridad en aplicaciones a Método Misión de Vida.',
                'Mesas de nicho y espacios guiados de comunidad.'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
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
