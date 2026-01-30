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
      <section className="py-16 md:py-24 bg-simois-bordo">
        <div className="container mx-auto px-4 text-center">
          <p className="text-simois-orange font-medium text-sm tracking-widest uppercase mb-4">
            Línea Exclusiva
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-4">
            Productos <span className="text-simois-orange">Simois</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Mantené tu estilo sin esfuerzo en casa. Formulados específicamente para el hombre moderno.
          </p>
        </div>
      </section>

      {/* Styling Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Estilizado"
            title="Ceras &"
            highlight="Styling"
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stylingProducts.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Barba Products */}
      <section className="py-16 md:py-24 bg-simois-light">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Cuidado"
            title="Barba &"
            highlight="Afeitado"
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {barbaCuidado.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Where to buy */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-simois-dark rounded-xl p-8 md:p-12 text-center">
            <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4">
              Disponibles en Nuestros Locales
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
              Visitanos en cualquiera de nuestras ubicaciones para probar y adquirir nuestros productos premium.
            </p>
            <Link
              to="/locales"
              className="inline-flex items-center gap-2 text-simois-orange font-medium hover:gap-3 transition-all"
            >
              <MapPinIcon className="w-5 h-5" />
              Ver Locales
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
