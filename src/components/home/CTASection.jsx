import { Button } from '../common'

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-simois-bordo relative overflow-hidden">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-simois-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-simois-orange rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-4">
          Reservá ahora
        </p>
        <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
          ¿Listo Para Tu Cambio?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          Seleccioná tu local preferido y reservá tu turno online en segundos. Evitá esperas y asegurá tu lugar con los mejores.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline-white"
            size="lg"
            to="/locales"
          >
            Seleccionar Local
          </Button>
          <Button
            variant="primary"
            size="lg"
            bookingOptions={{}}
          >
            Agendar Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
