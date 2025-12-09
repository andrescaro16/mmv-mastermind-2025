import { CTAButton } from './cta-button'
import { ArrowRight } from 'lucide-react'

export function IntegrationSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-repeat mix-blend-overlay"></div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                INTEGRACIÓN CON MÉTODO MISIÓN DE VIDA
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                El Mastermind Misión de Vida es la experiencia presencial del ADN del programa Método Misión de Vida.
              </p>
              <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed">
                Aquí vives en un día lo que en el programa profundizas durante meses. Para muchos asistentes, este evento es el despertar. Pero Método Misión de Vida es la ruta completa.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mb-8">
                <p className="font-medium italic">
                  "Si al final del evento sientes que quieres caminar el 2026 con acompañamiento espiritual y estratégico, con estructura, claridad y guía… MMV es el siguiente paso natural."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="secondary" className="bg-white! text-primary! border-white! hover:bg-white/90!" href="https://wa.link/qng9f0">
                  QUIERO PROGRAMA + EVENTO (MMV)
                </CTAButton>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">ADN del Programa</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Identidad', 'Marca', 'Oferta', 'Monetización',
                  'Contenido', 'Espíritu', 'Comunidad', 'Multiplicación'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg">
                    <ArrowRight className="w-4 h-4 text-cta" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
