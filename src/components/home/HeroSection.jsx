import { Button } from '../common'
import { useIsMobile } from '../../hooks/useMediaQuery'

export function HeroSection() {
  const isMobile = useIsMobile()

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-simois-bordo">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(63, 32, 33, 0.7), rgba(63, 32, 33, 0.85)), url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&q=80')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          {/* Small text above title */}
          <p className="text-simois-orange font-medium text-sm tracking-widest uppercase mb-4">
            Premium Barbershop Experience
          </p>

          {/* Main Title */}
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-2">
            Tu Estilo
          </h1>
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-simois-orange leading-none mb-6">
            Tus Reglas
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8">
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
              variant="outline"
              size="lg"
              to="/productos"
              className="border-white text-white hover:bg-white hover:text-simois-bordo"
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
