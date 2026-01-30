import { PageTransition } from '../components/layout'
import { SectionTitle } from '../components/common'
import { BarberoCard, BarberoCarousel } from '../components/barberos'
import { barberos } from '../data/barberos'
import { useIsMobile } from '../hooks/useMediaQuery'

export default function BarberosPage() {
  const isMobile = useIsMobile()

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-simois-bordo">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-2">
            Tu Estilo,{' '}
            <span className="text-simois-orange">Tus Reglas</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Conocé a los maestros detrás de cada corte. Nuestro equipo de expertos está listo para elevar tu imagen al siguiente nivel.
          </p>
        </div>
      </section>

      {/* Barberos Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestro"
            highlight="Equipo"
            className="mb-12"
          />

          {isMobile ? (
            <BarberoCarousel barberos={barberos} />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {barberos.map((barbero) => (
                <BarberoCard key={barbero.id} barbero={barbero} />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
