import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTAButton } from './cta-button'

const faqs = [
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
  }
]

export function FAQSection() {
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
