import { CheckIcon } from '../common'

export function CursoCard({ curso }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={curso.imagen || `https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80`}
          alt={curso.nombre}
          className="w-full h-full object-cover"
        />
        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 bg-simois-orange text-white text-xs font-medium rounded-full">
            {curso.tipo}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bebas text-2xl text-simois-dark mb-2">
          {curso.nombre}
        </h3>

        <ul className="space-y-2 mb-4">
          {curso.contenido.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-simois-dark/70">
              <CheckIcon className="w-4 h-4 text-simois-orange shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
