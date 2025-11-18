import { CTAButton } from './cta-button'
import { Check } from 'lucide-react'

const includes = [
  'Acceso al día completo del evento en Rionegro con Alejandro Jaramillo y el equipo MMV.',
  'Material de trabajo del Método Misión de Vida para aterrizar tu propósito, tu oferta y tu plan.',
  'Activaciones espirituales y ejercicios guiados durante el día.',
  'Networking con personas de misión que están en un camino similar al tuyo.',
  'Acceso a un grupo exclusivo en WhatsApp para coordinar logística y comunicación.'
]

export function IncludesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            QUÉ INCLUYE TU ENTRADA
          </h2>

          {/* Includes list */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border mb-12">
            <div className="space-y-6 mb-8">
              {includes.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base md:text-lg text-card-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Investment placeholder */}
            <div className="border-t border-border pt-8">
              <div className="bg-accent/50 rounded-2xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Inversión</p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  {/* Add price here when available */}
                  Consultar
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <CTAButton size="large">
              Quiero asegurar mi entrada
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
