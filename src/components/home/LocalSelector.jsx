import { Link } from 'react-router-dom'
import { locales } from '../../data/locales'
import { MapPinIcon } from '../common'

export function LocalSelector() {
  const activeLocales = locales.filter(l => l.activo)

  return (
    <section className="py-6 md:py-8 bg-white border-b border-gray-100" aria-label="Nuestros locales">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          {activeLocales.map((local) => (
            <Link
              key={local.id}
              to={`/locales#${local.id}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-simois-light hover:bg-simois-orange hover:text-white transition-all duration-200 text-sm font-medium text-simois-dark group"
            >
              <MapPinIcon className="w-3.5 h-3.5 text-simois-orange group-hover:text-white transition-colors" />
              {local.nombre}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
