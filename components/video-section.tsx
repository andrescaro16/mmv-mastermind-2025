export function VideoSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-foreground text-balance">
            No te lo puedo explicar. Prefiero que lo sientas.
          </h2>

          {/* Video placeholder */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-muted mb-8">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">Video del evento</p>
              </div>
            </div>
            {/* When you have the actual video URL, replace this with: */}
            {/* <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div> */}
          </div>

          {/* Caption */}
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Dale play. Si algo se mueve en tu corazón, probablemente este evento es para ti.
          </p>
        </div>
      </div>
    </section>
  )
}
