import { useState } from 'react'
import { PageTransition } from '../components/layout'
import { LocalCard } from '../components/locales'
import { locales } from '../data/locales'

export default function LocalesPage() {
  const activeLocales = locales.filter(l => l.activo)
  // State para manejar el ID del local seleccionado
  const [selectedLocalId, setSelectedLocalId] = useState(null)

  // Obtener coordenadas del local seleccionado
  const selectedLocal = locales.find(l => l.id === selectedLocalId)
  
  // Construir URL del mapa basado en la ubicación seleccionada
  // Con q= se muestra el marcador rojo típico de Google Maps en las coordenadas exactas
  const mapUrl = selectedLocal
    ? `https://maps.google.com/maps?q=${selectedLocal.coordenadas.lat},${selectedLocal.coordenadas.lng}&t=m&z=17&output=embed`
    : 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52400!2d-56.15!3d-34.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2suy'

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar with locations */}
        <div className="w-full lg:w-[420px] xl:w-[460px] bg-white lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 overflow-y-auto">
          <div className="p-6 lg:p-8">
            <p className="text-simois-orange font-semibold text-xs tracking-[0.15em] uppercase mb-2">
              Nuestros locales
            </p>
            <h1 className="font-bebas text-4xl lg:text-5xl text-simois-dark mb-2">
              Encontranos
            </h1>
            <p className="text-simois-dark/55 text-sm mb-8">
              {activeLocales.length} Locales en Montevideo y Canelones
            </p>

            <div className="space-y-1">
              {locales.map((local) => (
                <LocalCard
                  key={local.id}
                  local={local}
                  onViewMap={() => setSelectedLocalId(local.id)}
                  isSelected={selectedLocalId === local.id}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps - free iframe embed (no API key required) */}
        <div className="flex-1 min-h-[400px] lg:min-h-0 relative bg-gray-100">
          <iframe
            key={mapUrl}
            title="Mapa de locales Simois en Montevideo"
            src={mapUrl}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </PageTransition>
  )
}
