import { PageTransition } from '../components/layout'
import { SectionTitle, Button, CheckIcon, WhatsAppIcon } from '../components/common'
import { CursoCard } from '../components/academy'
import { cursos, franquicia, contactoAcademy } from '../data/academy'
import { WHATSAPP_BASE_URL } from '../utils/constants'

export default function AcademyPage() {
  const whatsappCursos = `${WHATSAPP_BASE_URL}/${contactoAcademy.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactoAcademy.mensajeCursos)}`
  const whatsappFranquicia = `${WHATSAPP_BASE_URL}/${contactoAcademy.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactoAcademy.mensajeFranquicia)}`

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-simois-light">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-simois-orange font-semibold text-xs tracking-[0.15em] uppercase mb-4">
                Formación & Franquicias
              </p>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-simois-dark leading-[0.95] mb-6">
                Tu Estilo
                <br />
                <span className="text-simois-orange">Tus Reglas</span>
              </h1>
              <p className="text-simois-dark/70 mb-8 max-w-md text-base leading-relaxed">
                Queremos que mantengas tu estilo sin esfuerzo. En Simois Academy, formamos a la próxima generación de barberos y expandimos nuestra marca con socios estratégicos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="dark" href="#cursos">
                  Explorar Cursos
                </Button>
                <Button variant="outline" href="#franquicia">
                  Franquicias
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                  alt="Interior de Barbería Simois"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 shadow-lg">
                  <p className="font-bebas text-lg text-simois-dark">Barbería Simois</p>
                  <p className="text-simois-orange text-sm font-medium">Excelencia desde el primer corte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling banner */}
      <section className="py-4 bg-simois-orange overflow-hidden">
        <div className="flex animate-marquee">
          {/* Render the set twice for seamless infinite loop */}
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0" aria-hidden={setIndex === 1}>
              {['Cera Mate', 'Spray de Sal', 'Polvo Texturizante', 'Shaving Gel', 'After Shave', 'Aceite para Barba', 'Pomada Cl\u00e1sica', 'T\u00f3nico Capilar'].map((item, i) => (
                <span key={i} className="font-bebas text-xl text-white flex items-center shrink-0">
                  <span className="px-5">{item}</span>
                  <span className="text-white/40">{'\u2022'}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Two columns section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Academy */}
            <div id="cursos">
              <p className="text-simois-orange font-semibold text-xs tracking-[0.15em] uppercase mb-3">
                Educación
              </p>
              <h2 className="font-bebas text-4xl lg:text-5xl text-simois-dark mb-5 leading-tight">
                Simois <span className="text-simois-orange">Academy</span>
              </h2>
              <p className="text-simois-dark/70 mb-8 leading-relaxed">
                Domina el arte de la barbería moderna. Desde cortes clásicos hasta las últimas tendencias en fade y estilismo. Nuestros cursos están diseñados para convertirte en un profesional de élite.
              </p>

              <div className="space-y-5">
                {cursos.map((curso) => (
                  <CursoCard key={curso.id} curso={curso} />
                ))}
              </div>

              <Button variant="dark" fullWidth className="mt-8" href={whatsappCursos}>
                Ver Programa Completo
              </Button>
            </div>

            {/* Franquicia */}
            <div id="franquicia">
              <p className="text-simois-orange font-semibold text-xs tracking-[0.15em] uppercase mb-3">
                Negocios
              </p>
              <h2 className="font-bebas text-4xl lg:text-5xl text-simois-dark mb-5 leading-tight">
                Modelo de <span className="text-simois-orange">Franquicia</span>
              </h2>
              <p className="text-simois-dark/70 mb-8 leading-relaxed">
                {franquicia.descripcion}
              </p>

              <div className="bg-simois-light rounded-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={franquicia.imagen || "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"}
                    alt="Franquicia Simois"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1.5 bg-simois-orange text-white text-xs font-semibold rounded-full shadow-sm">
                      Inversión
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-bebas text-xl text-simois-dark mb-5">
                    {franquicia.titulo}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {franquicia.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-simois-dark/70">
                        <CheckIcon className="w-4 h-4 text-simois-orange shrink-0 mt-0.5" />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" fullWidth href={whatsappFranquicia}>
                    Solicitar Información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Banner */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-br from-simois-bordo to-simois-dark rounded-2xl p-8 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-simois-orange rounded-full blur-3xl" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div>
                <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                  Productos <span className="text-simois-orange">Premium</span>
                </h2>
                <p className="text-white/60 max-w-md leading-relaxed">
                  Descubre nuestra línea exclusiva de ceras, sprays y cuidado capilar. Diseñados por barberos, para un acabado profesional en casa.
                </p>
              </div>
              <Button variant="primary" to="/productos" className="whitespace-nowrap">
                Ver Tienda Online →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
