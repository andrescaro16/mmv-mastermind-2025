import { X } from 'lucide-react'
import { CTAButton } from './cta-button'

const problems = [
  'Sabes que tienes un propósito. Lo sientes ardiendo adentro. Pero… tu negocio no refleja lo que Dios puso en tu vida.',
  'Tienes un llamado claro, pero tu mensaje sigue siendo confuso.',
  'Tu marca no expresa tu valor real ni tu autoridad espiritual.',
  'Publicas contenido… pero no convierte.',
  'A veces te sientes estancado, con ruido mental y sin dirección.',
  'Tu identidad espiritual está debilitada o dispersa.',
  'No has logrado integrar Dios + estrategia de una forma coherente y efectiva.',
  'Te da miedo subir precios o dar el salto a high-ticket, aunque sabes que ya estás para eso.',
  'Te sientes solo, sin un espacio donde otros hablen tu mismo idioma.'
]

export function IdentifySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              EL PROBLEMA QUE VIVES HOY
            </h2>
          </div>

          {/* List */}
          <div className="space-y-5 mb-12">
            {problems.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-base md:text-lg text-card-foreground leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="text-center mb-12 bg-accent/30 p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Y lo más duro es esto:
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Sabes que fuiste creado para más… pero aún no sabes cómo llegar ahí.
              <br />
              <span className="font-semibold text-primary block mt-2">Este evento es la respuesta a esa tensión interna.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="https://wa.link/sjmou8">QUIERO ESTAR EN LLANOGRANDE</CTAButton>
            <CTAButton variant="secondary" className="text-primary! border-primary! hover:bg-primary/10!" href="https://wa.link/qng9f0">
              QUIERO PROGRAMA + EVENTO (MMV)
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
