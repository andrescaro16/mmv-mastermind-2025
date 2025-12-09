import { CTAButton } from './cta-button'
import { Sparkles, User, Package, FileText, TrendingUp, Heart } from 'lucide-react'

const phases = [
  {
    icon: Sparkles,
    title: 'Fase 1 · Dios Primero',
    description: 'Activación, adoración, oración y Palabra que alinean tu espíritu con tu visión.'
  },
  {
    icon: User,
    title: 'Fase 2 · Identidad & Marca Profética',
    description: 'Descubres quién eres en Dios, qué representas en el mercado y cuál es tu mensaje real.'
  },
  {
    icon: Package,
    title: 'Fase 3 · Oferta & Monetización desde la Misión',
    description: 'Construyes o ajustas tu oferta high-ticket a 10K/mes, con estructura, precio y posicionamiento.'
  },
  {
    icon: FileText,
    title: 'Fase 4 · Contenido que Conecta Cielo & Conversión',
    description: 'Aprendes a crear contenido que toca el corazón, mueve la fe y convierte en clientes reales.'
  },
  {
    icon: TrendingUp,
    title: 'Fase 5 · Plan 90 Días: Tu Misión 10K',
    description: 'Diseñas tu hoja de ruta estratégica para los próximos 90 días.'
  },
  {
    icon: Heart,
    title: 'Fase 6 · Cierre Profético',
    description: 'Un momento íntimo de encuentro con Dios que marca el cierre y activa decisiones.'
  }
]

export function DayOneSection() {
  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground text-balance">
              LO QUE VIVIRÁS DURANTE EL DÍA
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              (AGENDA TRANSFORMACIONAL)
            </p>
          </div>

          {/* Phases grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <phase.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 grow">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
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
