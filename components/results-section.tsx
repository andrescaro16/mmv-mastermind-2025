import { Check } from 'lucide-react'

const results = [
  'Entender claramente tu propósito y cómo se traduce en tu negocio.',
  'Tener claridad sobre tu nicho y por qué no estabas comunicando a la persona correcta.',
  'Tener un mapa completo de tu oferta (o de cómo crearla).',
  'Saber qué contenido crear, cómo contarlo y cómo generar clientes desde tu esencia.',
  'Entender el proceso completo de ventas y por qué no estabas cerrando antes.',
  'Saber qué significa "ordenar un negocio" (y dejar de intentar todo al tiempo).',
  'Ver con tus propios ojos la estructura completa de MMV y cómo la puedes aplicar.',
  'Volverte parte de un ambiente de personas que hablan tu mismo idioma espiritual y emprendedor.'
]

export function ResultsSection() {
  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground text-balance">
            DESPUÉS DEL EVENTO VAS A:
          </h2>

          {/* Results grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-base md:text-lg text-card-foreground leading-relaxed">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
