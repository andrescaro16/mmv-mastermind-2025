import { CTAButton } from './cta-button'
import { Star, Play } from 'lucide-react'

const textTestimonials = [
  {
    name: 'Carlos M.',
    role: 'Emprendedor Digital',
    content: 'MMV cambió completamente mi perspectiva sobre cómo liderar mi negocio y mi vida. La claridad que obtuve es impagable.',
    image: 'https://placehold.co/100x100/563766/ffffff?text=CM'
  },
  {
    name: 'Ana L.',
    role: 'Coach de Vida',
    content: 'La energía y la comunidad que se crea en este evento es única. Me sentí acompañada y retada a crecer.',
    image: 'https://placehold.co/100x100/563766/ffffff?text=AL'
  },
  {
    name: 'Jorge R.',
    role: 'Consultor',
    content: 'Herramientas prácticas y profundas. No es solo motivación, es transformación real y aplicable.',
    image: 'https://placehold.co/100x100/563766/ffffff?text=JR'
  }
]

const videoTestimonials = [
  {
    id: 1,
    thumbnail: 'https://placehold.co/640x360/563766/ffffff?text=Video+Testimonio+1',
    duration: '2:15',
    author: 'María Fernanda'
  },
  {
    id: 2,
    thumbnail: 'https://placehold.co/640x360/563766/ffffff?text=Video+Testimonio+2',
    duration: '1:45',
    author: 'Roberto Gómez'
  }
]

const imageTestimonials = [
  { id: 1, src: 'https://placehold.co/400x600/563766/ffffff?text=Testimonio+Foto+1', alt: 'Testimonio escrito 1' },
  { id: 2, src: 'https://placehold.co/400x600/563766/ffffff?text=Testimonio+Foto+2', alt: 'Testimonio escrito 2' },
  { id: 3, src: 'https://placehold.co/400x600/563766/ffffff?text=Testimonio+Foto+3', alt: 'Testimonio escrito 3' },
  { id: 4, src: 'https://placehold.co/400x600/563766/ffffff?text=Testimonio+Foto+4', alt: 'Testimonio escrito 4' }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            LO QUE DICEN QUIENES YA HAN VIVIDO MMV
          </h2>

          {/* Text Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {textTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-3xl shadow-lg border border-border flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 grow italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative aspect-video bg-black/90 rounded-3xl overflow-hidden shadow-xl border border-border group cursor-pointer">
                <img 
                  src={video.thumbnail} 
                  alt={`Testimonio de ${video.author}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{video.author}</p>
                  <p className="text-white/70 text-sm">Historia de transformación ({video.duration})</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Testimonials */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {imageTestimonials.map((img) => (
              <div key={img.id} className="aspect-9/16 rounded-2xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
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
