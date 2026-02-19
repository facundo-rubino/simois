import { Button, StarIcon, CheckIcon } from '../common'

export function ServicioCard({ servicio }) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group ${
        servicio.destacado ? 'ring-2 ring-simois-orange' : ''
      }`}
    >
      {/* Badge for destacado */}
      {servicio.destacado && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-simois-orange text-white text-xs font-semibold rounded-full shadow-sm">
            <StarIcon className="w-3 h-3" filled />
            Más Popular
          </span>
        </div>
      )}

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={servicio.imagen || `https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80`}
          alt={servicio.nombre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-16">
          <span className="text-simois-orange text-xs font-semibold uppercase tracking-wider">
            {servicio.categoria}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bebas text-2xl text-simois-dark mb-2">
          {servicio.nombre}
        </h3>
        <p className="text-simois-dark/60 text-sm mb-5 leading-relaxed">
          {servicio.descripcion}
        </p>

        {/* Detalles */}
        {servicio.detalles && (
          <ul className="space-y-2.5 mb-6">
            {servicio.detalles.map((detalle, index) => (
              <li key={index} className="flex items-center gap-2.5 text-sm text-simois-dark/70">
                <CheckIcon className="w-4 h-4 text-simois-orange shrink-0" />
                {detalle}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <Button
          variant={servicio.destacado ? 'primary' : 'dark'}
          fullWidth
          bookingOptions={{ servicioId: servicio.id }}
        >
          Quiero este →
        </Button>
      </div>
    </div>
  )
}
