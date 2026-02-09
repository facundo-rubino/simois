import { Link } from 'react-router-dom'
import { servicios } from '../../data/servicios'
import { Button, SectionTitle, ScissorsIcon, StarIcon } from '../common'

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-simois-light">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionTitle
          subtitle="Nuestra Carta"
          title="Servicios"
          highlight="Premium"
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                servicio.destacado ? 'ring-2 ring-simois-orange relative' : ''
              }`}
            >
              {/* Popular badge */}
              {servicio.destacado && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 px-3 py-1 bg-simois-orange text-white text-xs font-semibold rounded-full shadow-sm">
                  <StarIcon className="w-3 h-3" filled />
                  Más Popular
                </span>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                servicio.destacado
                  ? 'bg-simois-orange/10'
                  : 'bg-simois-light'
              }`}>
                {servicio.destacado ? (
                  <StarIcon className="w-6 h-6 text-simois-orange" filled />
                ) : (
                  <ScissorsIcon className="w-6 h-6 text-simois-dark/70" />
                )}
              </div>

              {/* Content */}
              <h3 className="font-bebas text-2xl text-simois-dark mb-2">
                {servicio.nombre}
              </h3>
              <p className="text-simois-dark/60 text-sm mb-5 line-clamp-2 leading-relaxed">
                {servicio.descripcion}
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="font-bebas text-2xl text-simois-dark">
                  {servicio.precio}
                </span>
                <Link
                  to="/servicios"
                  className="text-simois-orange font-semibold text-sm hover:underline underline-offset-4 transition-all"
                >
                  Reservar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
