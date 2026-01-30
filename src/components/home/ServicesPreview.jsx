import { Link } from 'react-router-dom'
import { servicios } from '../../data/servicios'
import { Button, SectionTitle, ScissorsIcon, StarIcon } from '../common'

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-simois-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Nuestra Carta"
          title="Servicios"
          highlight="Premium"
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all ${
                servicio.destacado ? 'ring-2 ring-simois-orange' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-simois-light rounded-lg flex items-center justify-center mb-4">
                {servicio.destacado ? (
                  <StarIcon className="w-6 h-6 text-simois-orange" filled />
                ) : (
                  <ScissorsIcon className="w-6 h-6 text-simois-dark" />
                )}
              </div>

              {/* Content */}
              <h3 className="font-bebas text-2xl text-simois-dark mb-2">
                {servicio.nombre}
              </h3>
              <p className="text-simois-dark/60 text-sm mb-4 line-clamp-2">
                {servicio.descripcion}
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="font-bebas text-xl text-simois-dark">
                  {servicio.precio}
                </span>
                <Link
                  to="/servicios"
                  className="text-simois-orange font-medium text-sm hover:underline"
                >
                  Reservar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
