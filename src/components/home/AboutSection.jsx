import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../common'

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
                alt="Barbero trabajando"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-simois-orange rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-bebas text-4xl md:text-5xl text-simois-dark mb-2">
              Más Que Un
            </h2>
            <h2 className="font-bebas text-4xl md:text-5xl text-simois-orange mb-6">
              Corte de Pelo
            </h2>

            <p className="text-simois-dark/70 mb-4 leading-relaxed">
              En Barbería Simois, entendemos que tu estilo es tu carta de presentación. Desde nuestros inicios en Pocitos, nos hemos dedicado a perfeccionar el arte de la barbería clásica fusionada con las tendencias modernas.
            </p>

            <p className="text-simois-dark/70 mb-6 leading-relaxed">
              Nuestro equipo de profesionales no solo corta cabello, esculpimos identidad. Cada visita es una experiencia diseñada para que te relajes y salgas con la confianza al máximo.
            </p>

            <Link
              to="/barberos"
              className="inline-flex items-center gap-2 text-simois-orange font-medium hover:gap-3 transition-all"
            >
              Nuestra Historia
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
