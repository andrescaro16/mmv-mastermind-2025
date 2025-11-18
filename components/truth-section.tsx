import { CTAButton } from './cta-button'

export function TruthSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-foreground">
            LA VERDAD
          </h2>

          {/* Content paragraphs */}
          <div className="space-y-8 mb-12">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 text-pretty">
              No necesitas más cursos, más tácticas o más &quot;productividad&quot;. El verdadero problema es que te enseñaron a construir desconectado de Dios… o a conectar con Dios sin estructura. Ambos caminos te llevan al mismo lugar: frustración.
            </p>
            
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 text-pretty">
              Tu propósito no necesita ruido. Necesita ORDEN: espiritual, emocional y estratégico. Eso es MMV. Eso es este evento.
            </p>
            
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 text-pretty">
              Si decides dar el paso, nosotros te acompañamos. No para que te vuelvas alguien nuevo, sino para que recuerdes quién ya eres.
            </p>
          </div>

          {/* CTA */}
          <CTAButton size="large">
            Quiero ser parte
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
