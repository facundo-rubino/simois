import { PageTransition } from '../components/layout'
import { SectionTitle, MapPinIcon, ArrowRightIcon } from '../components/common'
import { ProductoCard } from '../components/productos'
import { productos } from '../data/productos'
import { Link } from 'react-router-dom'

export default function ProductosPage() {
  // Group products by category
  const stylingProducts = productos.filter(p =>
    ['Fijación Media', 'Fijación Alta', 'Textura & Volumen', 'Spray Sal Marina'].includes(p.categoria)
  )
  const barbaCuidado = productos.filter(p =>
    ['Cuidado de Barba', 'Afeitado', 'Post Afeitado'].includes(p.categoria)
  )

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

      {/* Styling Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionTitle
            subtitle="Estilizado"
            title="Ceras &"
            highlight="Styling"
            align="left"
            className="mb-14"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stylingProducts.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Barba Products */}
      <section className="py-20 md:py-28 bg-simois-light">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionTitle
            subtitle="Cuidado"
            title="Barba &"
            highlight="Afeitado"
            align="left"
            className="mb-14"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {barbaCuidado.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Where to buy */}
      <section className="py-14 md:py-20 bg-white">
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
