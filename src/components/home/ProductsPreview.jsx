import { Link } from 'react-router-dom'
import { Button, CheckIcon } from '../common'

export function ProductsPreview() {
  const features = [
    'Cera Mate de Alta Fijación',
    'Spray de Sal Marina (Surfer Vibes)',
    'Polvo Texturizante de Volumen',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-bebas text-4xl md:text-5xl text-simois-dark mb-2">
              Productos
            </h2>
            <h2 className="font-bebas text-4xl md:text-5xl text-simois-orange mb-6">
              Simois
            </h2>

            <p className="text-simois-dark/70 mb-6 leading-relaxed">
              Llevá la calidad de la barbería a tu casa. Desarrollamos nuestra propia línea de ceras, sprays y polvos texturizantes para que mantengas tu estilo sin esfuerzo todos los días.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-simois-orange/10 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-4 h-4 text-simois-orange" />
                  </span>
                  <span className="text-simois-dark">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="dark" to="/productos">
              Tienda Online
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-simois-light flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80"
                alt="Productos Simois"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
