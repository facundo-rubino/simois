import { Button, MapPinIcon, ClockIcon } from '../common'

export function LocalCard({ local, onViewMap, isSelected }) {
  const isOpen = local.activo && !local.proximaApertura
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase()
  const todayHours = local.horarios?.[today] || 'No disponible'

  return (
    <div
      className={`p-4 border-l-4 rounded-r-lg transition-all duration-200 ${
        isSelected
          ? 'border-simois-orange bg-simois-orange/10'
          : local.proximaApertura
          ? 'border-gray-300 bg-gray-50'
          : 'border-transparent hover:border-simois-orange hover:bg-simois-light/50'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-2.5">
        <h3 className="font-bebas text-xl text-simois-dark">
          {local.nombre}
        </h3>
        <span
          className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
            local.proximaApertura
              ? 'bg-gray-100 text-gray-600'
              : isOpen
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
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
        <p className="text-simois-dark/55 text-sm italic mb-2 pl-6">
          "{local.descripcion}"
        </p>
      )}

      {local.distancia && (
        <p className="text-simois-dark/45 text-xs mb-2 pl-6">
          A {local.distancia}
        </p>
      )}

      {local.nuevo && (
        <span className="inline-block px-2.5 py-0.5 bg-simois-orange/10 text-simois-orange text-xs font-semibold rounded-full mb-2 ml-6">
          Nuevo Local
        </span>
      )}

      {local.abreA && !isOpen && (
        <div className="flex items-center gap-1.5 text-simois-dark/55 text-sm mb-3 pl-6">
          <ClockIcon className="w-4 h-4" />
          <span>Abre {local.abreA}</span>
        </div>
      )}

      {local.activo && !local.proximaApertura && (
        <div className="pl-6 mt-3">
          {isSelected ? (
            <Button
              variant="primary"
              size="sm"
              bookingOptions={{ localId: local.id }}
            >
              Reservar Acá
            </Button>
          ) : (
            <button
              onClick={() => onViewMap()}
              className="inline-flex items-center gap-1.5 text-simois-orange text-sm font-semibold hover:underline underline-offset-4 transition-colors"
              aria-label={`Ver ${local.nombre} en el mapa`}
            >
              Ver en Mapa →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
