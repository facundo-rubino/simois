import { Button, MapPinIcon, ClockIcon } from '../common'

export function LocalCard({ local }) {
  const isOpen = local.activo && !local.proximaApertura
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  const todayHours = local.horarios?.[today] || 'No disponible'

  return (
    <div
      className={`p-4 border-l-4 transition-all ${
        local.destacado
          ? 'border-simois-orange bg-simois-orange/5'
          : local.proximaApertura
          ? 'border-gray-300 bg-gray-50'
          : 'border-transparent hover:border-simois-orange hover:bg-simois-light/50'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className={`font-bebas text-xl ${local.destacado ? 'text-simois-orange' : 'text-simois-dark'}`}>
          {local.nombre}
        </h3>
        <span
          className={`px-2 py-1 text-xs font-medium rounded border ${
            local.proximaApertura
              ? 'bg-gray-100 text-gray-600 border-gray-300'
              : isOpen
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-red-50 text-red-700 border-red-200'
          }`}
        >
          {local.proximaApertura ? 'Próximamente' : isOpen ? 'Abierto' : 'Cerrado'}
        </span>
      </div>

      <div className="flex items-start gap-2 text-simois-dark/70 text-sm mb-2">
        <MapPinIcon className="w-4 h-4 text-simois-orange shrink-0 mt-0.5" />
        <span>{local.direccion}</span>
      </div>

      {local.descripcion && (
        <p className="text-simois-dark/60 text-sm italic mb-2">
          "{local.descripcion}"
        </p>
      )}

      {local.distancia && (
        <p className="text-simois-dark/50 text-xs mb-2">
          A {local.distancia}
        </p>
      )}

      {local.nuevo && (
        <span className="inline-block px-2 py-0.5 bg-simois-orange/10 text-simois-orange text-xs font-medium rounded mb-2">
          Nuevo Local
        </span>
      )}

      {local.abreA && !isOpen && (
        <div className="flex items-center gap-1 text-simois-dark/60 text-sm mb-3">
          <ClockIcon className="w-4 h-4" />
          <span>Abre {local.abreA}</span>
        </div>
      )}

      {local.activo && !local.proximaApertura && (
        local.destacado ? (
          <Button
            variant="primary"
            size="sm"
            bookingOptions={{ localId: local.id }}
            className="mt-2"
          >
            Reservar Acá
          </Button>
        ) : (
          <a
            href={`https://www.google.com/maps?q=${local.coordenadas.lat},${local.coordenadas.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-simois-orange text-sm font-medium hover:underline mt-2"
          >
            Ver en Mapa →
          </a>
        )
      )}
    </div>
  )
}
