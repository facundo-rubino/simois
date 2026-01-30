import { Button } from '../common'

export function BarberoCard({ barbero, compact = false }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
      {/* Image */}
      <div className={`relative overflow-hidden ${compact ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        <img
          src={barbero.foto || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80`}
          alt={barbero.nombre}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay with name */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-simois-bordo to-transparent p-4 pt-16">
          <h3 className="font-bebas text-2xl text-white">{barbero.nombre}</h3>
          <p className="text-simois-orange text-sm font-medium uppercase tracking-wider">
            {barbero.localNombre}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-simois-dark/60 text-sm mb-4 line-clamp-2">
          {barbero.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {barbero.especialidades.map((esp, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-simois-light text-simois-dark text-xs rounded-full"
            >
              {esp}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          fullWidth
          bookingOptions={{ barberoId: barbero.id, localId: barbero.localId }}
        >
          Reservar Turno →
        </Button>
      </div>
    </div>
  )
}
