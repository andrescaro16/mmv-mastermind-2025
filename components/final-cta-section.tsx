import { CTAButton } from './cta-button'

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main message */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Estás a un clic de ordenar lo que llevas años cargando.
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 text-pretty">
            Si tu alma ya dijo que sí, no esperes más. Hazlo por ti y por la misión que Dios te entregó.
          </p>

          {/* Availability bar */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-10 border border-white/20">
            <div className="mb-3">
              <p className="text-sm font-medium text-primary-foreground/80 mb-2">
                PLAZAS LIMITADAS
              </p>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-cta h-full rounded-full transition-all duration-1000"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <p className="text-lg font-semibold text-primary-foreground">
              75% ocupadas
            </p>
          </div>

          {/* Final CTA */}
          <CTAButton size="large">
            Quiero ser parte
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
