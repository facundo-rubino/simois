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
      <section className="py-16 md:py-24 bg-gradient-to-br from-simois-light to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-simois-dark leading-none mb-2">
                Tu Estilo
              </h1>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-simois-orange leading-none mb-6">
                Tus Reglas
              </h1>
              <p className="text-simois-dark/70 mb-8 max-w-md">
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
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                  alt="Barbería Simois"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <p className="font-bebas text-lg text-simois-dark">Barbería Simois</p>
                  <p className="text-simois-orange text-sm">Excelencia desde el primer corte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling banner */}
      <section className="py-4 bg-simois-orange overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {['Cera Mate', 'Spray de Sal', 'Polvo Texturizante', 'Shaving Gel', 'After Shave', 'Cera Mate', 'Spray de Sal', 'Polvo Texturizante'].map((item, i) => (
            <span key={i} className="font-bebas text-xl text-white flex items-center gap-8">
              {item} <span className="text-white/50">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Two columns section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Academy */}
            <div id="cursos">
              <p className="text-simois-orange font-medium text-sm tracking-widest uppercase mb-2">
                Educación
              </p>
              <h2 className="font-bebas text-4xl text-simois-dark mb-4">
                Simois <span className="text-simois-orange">Academy</span>
              </h2>
              <p className="text-simois-dark/70 mb-8">
                Domina el arte de la barbería moderna. Desde cortes clásicos hasta las últimas tendencias en fade y estilismo. Nuestros cursos están diseñados para convertirte en un profesional de élite.
              </p>

              <div className="space-y-4">
                {cursos.map((curso) => (
                  <CursoCard key={curso.id} curso={curso} />
                ))}
              </div>

              <Button variant="dark" fullWidth className="mt-6" href={whatsappCursos}>
                Ver Programa Completo
              </Button>
            </div>

            {/* Franquicia */}
            <div id="franquicia">
              <p className="text-simois-orange font-medium text-sm tracking-widest uppercase mb-2">
                Negocios
              </p>
              <h2 className="font-bebas text-4xl text-simois-dark mb-4">
                Modelo de <span className="text-simois-orange">Franquicia</span>
              </h2>
              <p className="text-simois-dark/70 mb-8">
                {franquicia.descripcion}
              </p>

              <div className="bg-simois-light rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={franquicia.imagen || "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"}
                    alt="Franquicia Simois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-simois-orange text-white text-xs font-medium rounded-full">
                      Inversión
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bebas text-xl text-simois-dark mb-4">
                    {franquicia.titulo}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {franquicia.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-simois-dark/70">
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
      <section className="py-12 md:py-16 bg-gradient-to-r from-simois-bordo to-simois-dark rounded-xl mx-4 mb-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-bebas text-3xl md:text-4xl text-white mb-2">
                Productos <span className="text-simois-orange">Premium</span>
              </h2>
              <p className="text-white/70 max-w-md">
                Descubre nuestra línea exclusiva de ceras, sprays y cuidado capilar. Diseñados por barberos, para un acabado profesional en casa.
              </p>
            </div>
            <Button variant="primary" to="/productos" className="whitespace-nowrap">
              Ver Tienda Online →
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
