import { CTAButton } from './cta-button'

const teamMembers = [
  {
    role: 'CEO',
    name: 'Alejandro Jaramillo',
    description: 'Fundador y visionario de Expansión Life y MMV.',
    image: 'https://placehold.co/400x533/ffffff/563766?text=Alejo'
  },
  {
    role: 'Project Manager',
    name: 'Andrés Caro',
    description: 'Orquestando cada detalle desde el amor para la excelencia.',
    image: 'https://placehold.co/400x533/ffffff/563766?text=Andres'
  },
  {
    role: 'Closer',
    name: 'Susana Gutierrez',
    description: 'Guiando tu proceso de decisión con claridad.',
    image: 'https://placehold.co/400x533/ffffff/563766?text=Susana'
  },
  {
    role: 'Mentor y Guía',
    name: 'David Alzate',
    description: 'Sosteniendo la visión espiritual y estratégica.',
    image: 'https://placehold.co/400x533/ffffff/563766?text=David'
  },
  {
    role: 'Setter',
    name: 'Jose Prado',
    description: 'Asegurando que estés en el lugar correcto.',
    image: 'https://placehold.co/400x533/ffffff/563766?text=Jose'
  },
  {
    role: 'Setter',
    name: 'Felipe Padilla',
    description: 'Conectando contigo desde el primer mensaje.',
    image: 'https://placehold.co/400x533/ffffff/563766?text=Felipe'
  }
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
            QUIÉN TE ACOMPAÑA
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Un equipo formado en estrategia, ventas, marca, contenido, espiritualidad y acompañamiento humano. Todos viven el método. Y todos están para sostenerte.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-3/4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-6 pt-20 text-white">
                  <p className="text-sm font-medium text-primary-foreground/80 mb-1 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
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
