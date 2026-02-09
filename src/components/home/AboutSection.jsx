import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../common'

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80"
                alt="Barbero profesional trabajando en Barbería Simois"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-simois-orange rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-simois-orange font-semibold text-xs tracking-[0.15em] uppercase mb-3">
              Quienes somos
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-simois-dark leading-tight mb-6">
              Más Que Un
              <br />
              <span className="text-simois-orange">Corte de Pelo</span>
            </h2>

            <p className="text-simois-dark/70 mb-4 leading-relaxed text-base">
              En Barbería Simois, entendemos que tu estilo es tu carta de presentación. Desde nuestros inicios en Pocitos, nos hemos dedicado a perfeccionar el arte de la barbería clásica fusionada con las tendencias modernas.
            </p>

            <p className="text-simois-dark/70 mb-8 leading-relaxed text-base">
              Nuestro equipo de profesionales no solo corta cabello, esculpimos identidad. Cada visita es una experiencia diseñada para que te relajes y salgas con la confianza al máximo.
            </p>

            <Link
              to="/barberos"
              className="inline-flex items-center gap-2 text-simois-orange font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
            >
              Nuestra Historia
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
