import { CTAButton } from './cta-button'
import { Check, X } from 'lucide-react'

export function TargetAudienceSection() {
  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            PARA QUIÉN ES (Y PARA QUIÉN NO ES)
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Para quién ES */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                ESTE EVENTO ES PARA TI SI:
              </h3>
              <ul className="space-y-4">
                {[
                  'Eres coach, mentor, terapeuta o emprendedor con propósito.',
                  'Facturas entre 1–4K USD/mes.',
                  'Sabes que fuiste creado para más y quieres alinearte con ese llamado.',
                  'Tu mensaje aún no está claro.',
                  'Tu marca no refleja tu valor.',
                  'Publicas contenido pero no conviertes.',
                  'Tienes miedo de subir precios, pero deseas vivir del high-ticket.',
                  'Quieres integrar espiritualidad y estrategia sin perder autenticidad.',
                  'Buscas un entorno premium, profundo y transformador.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quién NO ES */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border opacity-90">
              <h3 className="text-2xl font-bold mb-8 text-destructive flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                ESTE EVENTO NO ES PARA TI SI:
              </h3>
              <ul className="space-y-4">
                {[
                  'Buscas motivación sin acción.',
                  'No estás dispuesto a tomar decisiones.',
                  'No crees en integrar a Dios en el mundo del negocio.',
                  'Prefieres lo "barato" sobre lo transformacional.',
                  'Aún no estás comprometido con tu misión.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-destructive mt-1 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
