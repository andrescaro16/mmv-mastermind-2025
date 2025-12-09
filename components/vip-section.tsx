import { Check, Star, Zap, Users, Target, MessageCircle, PenTool, Layout, Settings, DollarSign } from 'lucide-react'
import { CTAButton } from './cta-button'

export function VipSection() {
  const implementationItems = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Conexión con Dios",
      description: "Alineamos tu corazón, tu visión y tus decisiones de negocio con la dirección que Dios está poniendo en ti."
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: "Nicho y posicionamiento",
      description: "Pulimos a quién le hablas realmente, qué nivel de conciencia atiendes y cómo te diferencias de otros mentores."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
      title: "Oferta high-ticket",
      description: "Ajustamos tu promesa, tu proceso, tu transformación y tu precio para que tu oferta pueda sostener ingresos de 10K/mes o más."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-yellow-400" />,
      title: "Ventas y sistema comercial",
      description: "Revisamos tu flujo de leads, tus conversaciones, tu guion de cierre y los ajustes necesarios para que puedas convertir con más claridad, amor y autoridad."
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Marca personal",
      description: "Refinamos tu narrativa, tu presencia, tu bio, tu mensaje clave y cómo te presentas al mundo."
    },
    {
      icon: <PenTool className="w-6 h-6 text-yellow-400" />,
      title: "Contenido que convierte",
      description: "Definimos piezas estratégicas, secuencias, ideas y formatos que atraigan a los clientes correctos."
    },
    {
      icon: <Settings className="w-6 h-6 text-yellow-400" />,
      title: "Setting y estructura de llamadas",
      description: "Te ayudamos a ordenar cómo calificas, filtras y conduces las conversaciones hacia una decisión."
    },
    {
      icon: <Layout className="w-6 h-6 text-yellow-400" />,
      title: "Anuncios (si aplica)",
      description: "Vemos contigo el potencial de pago (ads), pautas básicas y cómo integrarlo al ecosistema."
    },
    {
      icon: <Settings className="w-6 h-6 text-yellow-400" />,
      title: "Operaciones y ejecución",
      description: "Organizamos cómo se ve tu backend: entrega, seguimiento, soporte, procesos, para que no te consumas en la operación."
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-[#1a1025] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 font-bold text-sm mb-6">
              EXPERIENCIA EXCLUSIVA
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Día 2 · Entrada VIP: <span className="text-primary-foreground">Implementación 1:1</span> para expandir tu Misión de Vida
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Para los pocos que no solo quieren claridad, sino IMPLEMENTACIÓN real guiada por Alejo y el equipo MMV.
            </p>
          </div>

          {/* Intro Text */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16 text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              El segundo día es una experiencia VIP, íntima y profundamente estratégica, diseñada para que no te vayas solo con ideas… sino con tu sistema montado y optimizado, de la mano de Alejo y todo el equipo de MMV.
            </p>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              Si el Día 1 es la activación,<br />
              el Día 2 VIP es la implementación total.
            </div>
          </div>

          {/* Promise */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Promesa del Día 2</h3>
            <div className="bg-linear-to-br from-primary/20 to-primary/5 p-8 rounded-3xl border border-primary/30">
              <p className="text-lg md:text-xl text-center leading-relaxed">
                1 día completo para implementar 1 a 1 con Alejo y nuestro equipo de expertos en marketing, ventas, servicio y operaciones, todo el ecosistema que hoy sostiene un negocio de hasta 50K USD/mes, para que puedas escalar tu marca personal desde un contexto de lujo, presencia con Dios y emprendedores conscientes de alto nivel.
              </p>
            </div>
          </div>

          {/* What happens */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">¿Qué pasa en el Día 2 VIP?</h3>
            <p className="text-center text-gray-400 mb-12">Trabajamos contigo mano a mano, de forma personalizada, para ajustar y montar las piezas clave de tu negocio:</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationItems.map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="max-w-3xl mx-auto mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">¿Cómo funciona el Día 2 VIP?</h3>
              <p className="text-gray-300 mb-6 text-center">
                No es un taller masivo. Es un día de implementación acompañado, con cupos muy limitados, donde:
              </p>
              <ul className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                {[
                  "Pasas 1 a 1 con Alejo a revisar identidad, visión, oferta y alineación espiritual.",
                  "Pasas 1 a 1 con cada miembro del equipo MMV (marketing, contenido, ventas, operaciones) para optimizar cada área.",
                  "Entre sesión y sesión hay espacios de networking consciente, conversaciones profundas, pausas de presencia y momentos de conexión con Dios.",
                  "Terminas el día con un ecosistema mucho más armado, con decisiones tomadas, sistemas creados y tareas claras para ejecutar."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-200 font-medium text-center">
                En el día 1 ganas claridad y dirección. Este día te vas con tu negocio ordenado y potenciado.
              </div>
            </div>
          </div>

          <div className="flex justify-center pb-12">
            <CTAButton href="https://wa.link/pr7mde" className="bg-yellow-500 text-primary hover:bg-yellow-400 border-none shadow-lg shadow-yellow-500/20 text-lg px-8 py-6">
              QUIERO MI ENTRADA VIP (800 USD)
            </CTAButton>
          </div>

        </div>
      </div>
    </section>
  )
}
