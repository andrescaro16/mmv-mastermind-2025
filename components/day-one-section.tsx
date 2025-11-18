import { CTAButton } from './cta-button'
import { Sparkles, Users, Package, MessageCircle, User, FileText, Settings, Megaphone, Cog } from 'lucide-react'

const topics = [
  {
    icon: Sparkles,
    title: 'Conexión con Dios',
    description: 'Antes de hablar de negocios, hablamos de propósito. Te mostraremos cómo se ve un negocio sostenido por tu relación con Dios, cómo tomar decisiones desde la guía espiritual y cómo construir desde la identidad correcta, no desde la carencia.'
  },
  {
    icon: Users,
    title: 'Nicho',
    description: 'Entenderás quién es realmente tu "yo del pasado", cómo se identifica su dolor, qué nivel de conciencia tiene y por qué no estás vendiendo hoy (aunque tengas talento).'
  },
  {
    icon: Package,
    title: 'Oferta',
    description: 'No más vender sesiones sueltas. Verás la estructura real de una oferta transformadora: promesa, metodología, precio y vehículo. Te vas a dar cuenta de que siempre tuviste la semilla, solo faltaba ordenarla.'
  },
  {
    icon: MessageCircle,
    title: 'Ventas',
    description: 'Te enseñaremos cómo se vende desde el amor, la responsabilidad y la verdad. Sin manipular, sin scripts huecos. Con claridad, presencia y guía.'
  },
  {
    icon: User,
    title: 'Marca Personal',
    description: 'Tu historia, tu transformación y tu identidad espiritual se vuelven tu mensaje. Te mostraremos cómo comunicar tu esencia sin perder profesionalismo ni profundidad.'
  },
  {
    icon: FileText,
    title: 'Contenido',
    description: 'No es sobre ser "viral". Es sobre ser CLARO. Qué decir. Cómo decirlo. Qué historias contar. Cómo hablarle a tu nicho directo al corazón.'
  },
  {
    icon: Settings,
    title: 'Setting',
    description: 'El paso olvidado por casi todos: cómo sostener la conversación inicial, cuál es tu rol en esa fase y por qué la mayoría de oportunidades se pierden aquí.'
  },
  {
    icon: Megaphone,
    title: 'Anuncios',
    description: 'Nada avanzado, solo la verdad: cómo funcionan, cuándo usarlos, cuánto invertir y qué esperar. Lo suficiente para que dejes de temerle a la palabra "ads".'
  },
  {
    icon: Cog,
    title: 'Operaciones & Ejecución',
    description: 'Vas a entender por qué no escalas. No por falta de ganas, sino por falta de sistema. Te mostraremos cómo se ve un negocio ordenado, simple y real.'
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
              El primer día es teoría, claridad, verdad… y experiencias de alto impacto.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-pretty">
              El verdadero crecimiento no pasa por hacer más, sino por ORDENAR tu interior, tu mensaje y tu negocio en coherencia con Dios. En este primer día, vas a entender paso a paso la estructura completa que sostiene el Método Misión de Vida… y por qué, cuando la aplicas, tu negocio deja de ser un caos y empieza a multiplicarse.
            </p>
          </div>

          {/* Topics grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <topic.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <CTAButton>
              Quiero ser parte
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
