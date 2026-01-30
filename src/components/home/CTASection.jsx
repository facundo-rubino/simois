import { Button } from '../common'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-simois-bordo">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
          ¿Listo Para Tu Cambio?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Seleccioná tu local preferido y reservá tu turno online en segundos. Evitá esperas y asegurá tu lugar con los mejores.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            to="/locales"
            className="border-white text-white hover:bg-white hover:text-simois-bordo"
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
