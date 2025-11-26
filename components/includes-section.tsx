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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Tangibles */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border flex flex-col">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Tangibles</h3>
              <ul className="space-y-4 grow">
                {[
                  'Acceso full day al evento (10 horas de experiencia).',
                  'Cuaderno de trabajo premium.',
                  'Frameworks estratégicos exclusivos.',
                  'Kit Misión de Vida físico.',
                  'Material descargable en PDF post-evento.',
                  'Foto profesional individual.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intangibles */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border flex flex-col">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Intangibles</h3>
              <ul className="space-y-4 grow">
                {[
                  'Activaciones espirituales profundas.',
                  'Mentoría estratégica en vivo.',
                  'Networking consciente con personas en tu misma frecuencia.',
                  'Claridad de identidad, marca, oferta y contenido.',
                  'Estructura real para crecer a 10K/mes.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bonos */}
            <div className="bg-linear-to-br from-primary/5 to-accent/30 rounded-3xl p-8 shadow-lg border border-primary/20 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
                BONUS
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Bonos Exclusivos</h3>
              <ul className="space-y-4 grow">
                {[
                  'Sesión grupal online de seguimiento (30–40 días después).',
                  'Prioridad en aplicaciones a Método Misión de Vida.',
                  'Mesas de nicho y espacios guiados de comunidad.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
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
