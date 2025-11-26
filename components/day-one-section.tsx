import { CTAButton } from './cta-button'
import { Sparkles, User, Package, FileText, TrendingUp, Heart } from 'lucide-react'

const phases = [
  {
    icon: Sparkles,
    title: 'Fase 1 · Dios Primero',
    description: 'Activación, adoración, oración y Palabra que alinean tu espíritu con tu visión.',
    result: 'Resultado: silencio interno + paz + claridad para escuchar a Dios.'
  },
  {
    icon: User,
    title: 'Fase 2 · Identidad & Marca Profética',
    description: 'Descubres quién eres en Dios, qué representas en el mercado y cuál es tu mensaje real.',
    result: 'Resultado: identidad firme y narrativa de marca clara.'
  },
  {
    icon: Package,
    title: 'Fase 3 · Oferta & Monetización desde la Misión',
    description: 'Construyes o ajustas tu oferta high-ticket a 10K/mes, con estructura, precio y posicionamiento.',
    result: 'Resultado: oferta alineada, premium y lista para vender.'
  },
  {
    icon: FileText,
    title: 'Fase 4 · Contenido que Conecta Cielo & Conversión',
    description: 'Aprendes a crear contenido que toca el corazón, mueve la fe y convierte en clientes reales.',
    result: 'Resultado: guion de contenido listo para publicar.'
  },
  {
    icon: TrendingUp,
    title: 'Fase 5 · Plan 90 Días: Tu Misión 10K',
    description: 'Diseñas tu hoja de ruta estratégica para los próximos 90 días.',
    result: 'Resultado: dirección, enfoque y compromiso con tu versión 2026.'
  },
  {
    icon: Heart,
    title: 'Fase 6 · Cierre Profético',
    description: 'Un momento íntimo de encuentro con Dios que marca el cierre y activa decisiones.',
    result: 'Resultado: convicción, fortaleza y claridad del siguiente paso.'
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
                <div className="bg-accent/50 p-3 rounded-lg border border-accent">
                  <p className="text-sm font-medium text-foreground">
                    {phase.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton>QUIERO ESTAR EN LLANOGRANDE</CTAButton>
            <CTAButton variant="secondary" className="text-primary! border-primary! hover:bg-primary/10!">
              QUIERO PROGRAMA + EVENTO (MMV)
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
