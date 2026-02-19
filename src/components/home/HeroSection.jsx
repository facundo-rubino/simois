import { Button } from '../common'

export function HeroSection() {

  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden bg-simois-bordo">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(63, 32, 33, 0.85), rgba(63, 32, 33, 0.75)), url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Interior de Barbería Simois"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Eyebrow text */}
          <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-5 md:mb-6">
            Premium Barbershop Experience
          </p>

          {/* Main Title - Single h1 for SEO */}
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.95] mb-6 md:mb-8">
            Tu Estilo
            <br />
            <span className="text-simois-orange">Tus Reglas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-base md:text-xl max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
            Conocé a los maestros detrás de cada corte. Nuestro equipo de expertos está listo para elevar tu imagen al siguiente nivel.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              variant="primary"
              size="lg"
              bookingOptions={{}}
            >
              Reservar Ahora
            </Button>
            <Button
              variant="outline-white"
              size="lg"
              to="/productos"
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom vignette — no color dependency, just subtle darkening */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  )
}
