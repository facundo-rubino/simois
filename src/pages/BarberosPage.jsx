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
      <section className="py-20 md:py-28 bg-simois-bordo relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-simois-orange rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-4">
            Nuestro equipo
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Tu Estilo,{' '}
            <span className="text-simois-orange">Tus Reglas</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Conocé a los maestros detrás de cada corte. Nuestro equipo de expertos está listo para elevar tu imagen al siguiente nivel.
          </p>
        </div>
      </section>

      {/* Barberos Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionTitle
            title="Nuestro"
            highlight="Equipo"
            className="mb-14"
          />

          {isMobile ? (
            <BarberoCarousel barberos={barberos} />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
