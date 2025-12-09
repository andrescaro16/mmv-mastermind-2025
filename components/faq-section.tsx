'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowUp } from 'lucide-react'

const faqs = [
  {
    question: "¿Cuál es la diferencia entre la Entrada General y la Entrada VIP?",
    answer: "La Entrada General (300 USD) te da acceso al Día 1, donde vas a alinear tu identidad espiritual, tu visión 2026, tu oferta a 10K/mes, tu contenido y tu plan de acción a 90 días. La Entrada VIP (800 USD) incluye el Día 1 y un segundo día completo de implementación 1 a 1 con Alejo y el equipo MMV, donde te ayudamos de forma personalizada a aterrizar, ajustar y montar tu sistema de nicho, oferta, ventas, contenido, marca y operaciones, dentro de un contexto de lujo, claridad y presencia con Dios. Es para quienes no solo quieren claridad, sino salir con el negocio mucho más armado y listo para ejecutar."
  },
  {
    question: "¿Necesito ser súper espiritual para asistir?",
    answer: "No. Solo necesitas estar abierto a conectar con Dios de forma auténtica. No es religioso; es profundo, práctico y transformador."
  },
  {
    question: "¿Y si no tengo una oferta clara?",
    answer: "Perfecto. Este evento está diseñado para que salgas con una o con claridad absoluta de cómo construirla."
  },
  {
    question: "¿Y si ya tengo una, pero no vendo?",
    answer: "Aquí la ajustamos, la elevamos y la alineamos a precios high-ticket."
  },
  {
    question: "¿Qué tan estratégico es el evento?",
    answer: "Mucho. No es solo espiritualidad; es estrategia real, frameworks, ofertas, contenido y plan 90 días."
  },
  {
    question: "¿Qué pasa si soy introvertido?",
    answer: "El networking es consciente, profundo y guiado. Nada de conversaciones vacías."
  },
  {
    question: "¿Puedo asistir si no soy coach/mentor/terapeuta?",
    answer: "Sí, siempre que tu negocio tenga una dimensión de propósito y acompañamiento a otros."
  },
  {
    question: "¿Hay cupos limitados?",
    answer: "Sí. Es un evento luxury y exclusivo. Solo se abrirá un número reducido de entradas."
  },
  {
    question: "¿Habrá oportunidad de entrar a Método Misión de Vida?",
    answer: "Sí. Los asistentes tienen prioridad y beneficios especiales."
  },
  {
    question: "¿Qué debo llevar?",
    answer: "Sólo tu cuaderno, tu corazón y disposición. Lo demás te lo damos nosotros."
  },
  {
    question: "¿Mi compra puede ser reembolsada?",
    answer: "No. Asegúrate de poder asistir, pues al ser un evento presencial y por motivos de logística y organización se toma en cuenta cada ticket para asumir el costo del evento."
  }
]

export function FAQSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            PREGUNTAS FRECUENTES
          </h2>

          <Accordion type="single" collapsible className="w-full mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex justify-center">
            <button 
              onClick={scrollToPricing}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all duration-300"
            >
              <span className="font-semibold text-primary text-lg">Ver opciones de entradas</span>
              <div className="p-2 rounded-full bg-primary text-primary-foreground group-hover:-translate-y-1 transition-transform duration-300">
                <ArrowUp className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
