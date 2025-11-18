export function TeamSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            QUIÉN TE ACOMPAÑA
          </h2>

          {/* Alejandro Jaramillo */}
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden mb-12 border border-border">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Alejandro Jaramillo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-card-foreground">
                  Alejandro Jaramillo
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Soy Alejandro. Y si algo he aprendido es que un negocio sin Dios se derrumba… y la espiritualidad sin estructura no paga cuentas ni cumple misión. Pasé por momentos de quiebre, confusión, miedo y pérdidas. Hasta que entendí que Dios me estaba formando. Hoy, a través de Expansión Life y el Método Misión de Vida, acompaño a emprendedores con propósito a construir negocios reales, ordenados, estables y coherentes con su espíritu.
                </p>
              </div>
            </div>
          </div>

          {/* Team MMV */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-8 md:p-12 text-center border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Equipo MMV
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8">
              Un equipo formado en estrategia, ventas, marca, contenido, espiritualidad y acompañamiento humano. Todos viven el método. Y todos están para sostenerte.
            </p>
            
            {/* Team photos placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`/placeholder.svg?height=300&width=300&query=mmv+team+member+${member}+professional+spiritual+coach`}
                    alt={`Equipo MMV ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
