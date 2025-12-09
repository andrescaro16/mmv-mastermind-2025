import { CTAButton } from './cta-button'
import { Sparkles, TrendingUp, Crown } from 'lucide-react'

export function UniqueSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            QUÉ HACE ÚNICO ESTE EVENTO
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Este evento es único porque integra tres dimensiones que nadie más combina con esta profundidad:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Dimension 1 */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Espiritualidad aplicada al negocio (de verdad)
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Aquí no hablamos de Dios como concepto… Aquí Dios es el centro del negocio. Oración, Palabra, activaciones, presencia y dirección práctica.
              </p>
            </div>

            {/* Dimension 2 */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Estrategia real que funciona en el mercado
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sin humo. Sin motivación vacía. Es estrategia probada, alineada, estructurada y bajada a tierra. Tu marca, tu oferta, tu posicionamiento, tu contenido, tus precios y tu monetización… con claridad quirúrgica.
              </p>
            </div>

            {/* Dimension 3 */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Un contexto de lujo que eleva tu estándar interno
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Un lugar top en Llanogrande. Diseño, atmósfera, estética, excelencia. Este entorno te hace sentir y pensar desde tu identidad más alta. Te recuerda que tú ya perteneces a este nivel.
              </p>
            </div>
          </div>

          <div className="bg-accent/30 p-8 rounded-2xl text-center mb-12">
            <p className="text-lg md:text-xl font-medium text-foreground">
              No es un retiro espiritual. No es un congreso de marketing. Es un santuario estratégico para emprendedores conscientes listos para subir de nivel.
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
