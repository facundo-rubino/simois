import { PageTransition } from '../components/layout'
import { MapPinIcon, ArrowRightIcon } from '../components/common'
import { ProductoCard } from '../components/productos'
import { productos } from '../data/productos'
import { Link } from 'react-router-dom'

export default function ProductosPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-simois-bordo relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-simois-orange rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-4">
            Línea Exclusiva
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Productos <span className="text-simois-orange">Simois</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Mantené tu estilo sin esfuerzo en casa. Formulados específicamente para el hombre moderno.
          </p>
        </div>
      </section>

      {/* All products — editorial alternating layout */}
      <section className="bg-white dark:bg-simois-dark">
        {productos.map((producto, index) => (
          <div key={producto.id}>
            <ProductoCard producto={producto} index={index} />
            {index < productos.length - 1 && (
              <div className="border-t border-gray-100 dark:border-white/10" />
            )}
          </div>
        ))}
      </section>

      {/* Where to buy */}
      <section className="py-14 md:py-20 bg-simois-light dark:bg-simois-dark/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-simois-dark rounded-2xl p-8 md:p-14 text-center">
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Disponibles en Nuestros Locales
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Visitanos en cualquiera de nuestras ubicaciones para probar y adquirir nuestros productos premium.
            </p>
            <Link
              to="/locales"
              className="inline-flex items-center gap-2 text-simois-orange font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
            >
              <MapPinIcon className="w-5 h-5" />
              Ver Locales
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
