import { PageTransition } from '../components/layout'
import { SectionTitle, Button } from '../components/common'
import { ServicioCard } from '../components/servicios'
import { servicios } from '../data/servicios'
import { productos } from '../data/productos'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/common'

export default function ServiciosPage() {
  // Show first 4 products as preview
  const productosPreview = productos.slice(0, 4)

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-simois-bordo relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-simois-orange rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-4">
            Premium Experience
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Tu Estilo,{' '}
            <span className="text-simois-orange">Tus Reglas</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            El mejor look es el que controlás vos. Descubrí una experiencia de barbería premium en Montevideo diseñada para elevar tu imagen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionTitle
            title="Nuestros"
            highlight="Servicios"
            className="mb-14"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicios.map((servicio) => (
              <ServicioCard key={servicio.id} servicio={servicio} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-14 md:py-16 bg-simois-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bebas text-3xl md:text-4xl text-white mb-2 leading-tight">
                Haz Esto Para Evitar{' '}
                <span className="text-simois-orange">Malos Entendidos</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                La comunicación con tu barbero es clave.
              </p>
            </div>
            <Button variant="outline-dark" className="whitespace-nowrap">
              Leer Consejos
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 md:py-28 bg-simois-light">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionTitle
            subtitle="Línea Exclusiva"
            title="Productos"
            highlight="Simois"
            description="Mantené tu estilo sin esfuerzo en casa. Formulados específicamente para el hombre moderno."
            className="mb-14"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {productosPreview.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="aspect-square bg-simois-light rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={producto.imagen || `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&q=80`}
                    alt={producto.nombre}
                    className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-bebas text-lg text-simois-dark mb-1">
                  {producto.nombre}
                </h4>
                <p className="text-simois-orange text-xs font-semibold uppercase tracking-wider mb-2">
                  {producto.categoria}
                </p>
                <p className="text-simois-dark/60 text-xs line-clamp-2 leading-relaxed mb-3">
                  {producto.descripcion}
                </p>
                <Link
                  to={`/productos#${producto.id}`}
                  className="text-simois-dark text-sm font-medium hover:text-simois-orange transition-colors"
                >
                  Ver Detalles →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 text-simois-orange font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
            >
              Ver Todos los Productos
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
