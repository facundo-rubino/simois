import { PageTransition } from '../components/layout'
import { LocalCard } from '../components/locales'
import { locales } from '../data/locales'

export default function LocalesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Sidebar with locations */}
        <div className="w-full lg:w-[400px] xl:w-[450px] bg-white lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 overflow-y-auto">
          <div className="p-6">
            <h1 className="font-bebas text-4xl text-simois-dark mb-2">
              Encuentranos
            </h1>
            <p className="text-simois-dark/60 text-sm mb-6">
              {locales.filter(l => l.activo).length} Locales en Montevideo y Canelones
            </p>

            <div className="space-y-1">
              {locales.map((local) => (
                <LocalCard key={local.id} local={local} />
              ))}
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="flex-1 bg-simois-light min-h-[400px] lg:min-h-0 relative">
          {/* Static map image as placeholder */}
          <div className="absolute inset-0">
            <img
              src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-56.15,-34.91,11,0/1200x800?access_token=pk.placeholder"
              alt="Mapa de ubicaciones"
              className="w-full h-full object-cover opacity-50"
              style={{
                filter: 'grayscale(100%)',
              }}
            />
            {/* Overlay with message */}
            <div className="absolute inset-0 flex items-center justify-center bg-simois-dark/10">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center max-w-sm mx-4">
                <div className="w-12 h-12 bg-simois-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-simois-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bebas text-xl text-simois-dark mb-2">
                  Mapa Interactivo
                </h3>
                <p className="text-simois-dark/60 text-sm mb-4">
                  Para habilitar el mapa interactivo, se requiere una API key de Google Maps.
                </p>
                <p className="text-simois-dark/40 text-xs">
                  Mientras tanto, podés hacer click en "Ver en Mapa" en cada local para abrir Google Maps.
                </p>
              </div>
            </div>
          </div>

          {/* Map controls placeholder */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded shadow flex items-center justify-center text-simois-dark hover:bg-simois-light">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded shadow flex items-center justify-center text-simois-dark hover:bg-simois-light">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
