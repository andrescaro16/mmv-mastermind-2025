import { Check } from 'lucide-react'
import { CTAButton } from './cta-button'

const identificationPoints = [
  'Sientes un llamado de Dios, pero no sabes cómo aterrizarlo en un negocio claro, ordenado y rentable.',
  'Te cansa la espiritualidad sin estructura y las estrategias de negocio sin alma.',
  'Has ayudado a personas, pero no logras convertir eso en una oferta clara que puedas cobrar con coherencia.',
  'Haces contenido, pero no sabes si hablas claro, si hablas fuerte o si hablas a quien tienes que hablarle.',
  'Sientes que avanzas, pero sin dirección. Como si faltara la pieza que conecta TODO.',
  'Quisieras vivir de tu propósito, pero te pierdes entre tantos consejos contradictorios.',
  'Sabes que fuiste llamad@ a más, pero hay algo dentro que te dice "es hora de ordenarte".'
]

export function IdentifySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              ¿TE IDENTIFICAS CON ESTO?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Si alguna de estas frases te describe, este evento es para ti.
            </p>
          </div>

          {/* List */}
          <div className="space-y-5 mb-12">
            {identificationPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-card-foreground leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8 text-balance">
              Si esto te resonó, este evento es para ti. No para entretenerte… sino para TRANSFORMARTE.
            </p>
            <CTAButton>
              Quiero ser parte
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
