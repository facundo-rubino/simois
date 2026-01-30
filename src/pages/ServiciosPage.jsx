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
      <section className="py-16 md:py-24 bg-simois-bordo">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-2">
            Tu Estilo,{' '}
            <span className="text-simois-orange">Tus Reglas</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            El mejor look es el que controlás vos. Descubrí una experiencia de barbería premium en Montevideo diseñada para elevar tu imagen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestros"
            highlight="Servicios"
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((servicio) => (
              <ServicioCard key={servicio.id} servicio={servicio} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-simois-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-bebas text-3xl md:text-4xl text-white mb-1">
                Haz Esto Para Evitar{' '}
                <span className="text-simois-orange">Malos Entendidos</span>
              </h2>
              <p className="text-white/60">
                La comunicación con tu barbero es clave.
              </p>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-simois-dark whitespace-nowrap">
              Leer Consejos
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-24 bg-simois-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-simois-orange font-medium text-sm tracking-widest uppercase mb-2">
              Línea Exclusiva
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-simois-dark mb-4">
              Productos Simois
            </h2>
            <p className="text-simois-dark/60 max-w-xl mx-auto">
              Mantené tu estilo sin esfuerzo en casa. Formulados específicamente para el hombre moderno.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {productosPreview.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-simois-light rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={producto.imagen || `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&q=80`}
                    alt={producto.nombre}
                    className="w-2/3 h-2/3 object-contain"
                  />
                </div>
                <h4 className="font-bebas text-lg text-simois-dark mb-1">
                  {producto.nombre}
                </h4>
                <p className="text-simois-orange text-xs font-medium uppercase tracking-wider mb-3">
                  {producto.categoria}
                </p>
                <p className="text-simois-dark/60 text-xs line-clamp-2 mb-3">
                  {producto.descripcion}
                </p>
                <Link
                  to={`/productos#${producto.id}`}
                  className="text-simois-dark text-sm font-medium hover:text-simois-orange transition-colors"
                >
                  Ver Detalles
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 text-simois-orange font-medium hover:gap-3 transition-all"
            >
              Ver Todos los Productos
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
