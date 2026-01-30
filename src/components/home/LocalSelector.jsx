import { Link } from 'react-router-dom'
import { locales } from '../../data/locales'
import { MapPinIcon } from '../common'

export function LocalSelector() {
  const activeLocales = locales.filter(l => l.activo)

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {activeLocales.map((local) => (
            <Link
              key={local.id}
              to={`/locales#${local.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-simois-light hover:bg-simois-orange hover:text-white transition-all text-sm font-medium text-simois-dark"
            >
              <MapPinIcon className="w-4 h-4" />
              {local.nombre}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
