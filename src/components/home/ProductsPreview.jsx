import { Link } from 'react-router-dom'
import { Button, CheckIcon } from '../common'

export function ProductsPreview() {
  const features = [
    'Cera Mate de Alta Fijación',
    'Spray de Sal Marina (Surfer Vibes)',
    'Polvo Texturizante de Volumen',
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-3">
              Línea exclusiva
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-simois-dark leading-tight mb-6">
              Productos
              <br />
              <span className="text-simois-orange">Simois</span>
            </h2>

            <p className="text-simois-dark/70 mb-8 leading-relaxed text-base">
              Llevá la calidad de la barbería a tu casa. Desarrollamos nuestra propia línea de ceras, sprays y polvos texturizantes para que mantengas tu estilo sin esfuerzo todos los días.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-simois-orange/10 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-4 h-4 text-simois-orange" />
                  </span>
                  <span className="text-simois-dark text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="dark" to="/productos">
              Tienda Online
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-simois-light flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80"
                alt="Productos de cuidado capilar Simois"
                className="w-3/4 h-3/4 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
