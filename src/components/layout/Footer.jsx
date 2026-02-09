import { Link } from 'react-router-dom'
import { InstagramIcon, FacebookIcon, TikTokIcon, MapPinIcon, PhoneIcon } from '../common'
import { SOCIAL_LINKS } from '../../utils/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const exploreLinks = [
    { label: 'Servicios', path: '/servicios' },
    { label: 'Barberos', path: '/barberos' },
    { label: 'Academy', path: '/academy' },
    { label: 'Productos', path: '/productos' },
  ]

  const localesLinks = [
    { label: 'Punta Carretas 1', path: '/locales#punta-carretas-1' },
    { label: 'Punta Carretas 2', path: '/locales#punta-carretas-2' },
    { label: 'Pocitos', path: '/locales#pocitos' },
    { label: 'La Tahona', path: '/locales#la-tahona' },
    { label: 'Car One', path: '/locales#car-one' },
  ]

  return (
    <footer className="bg-simois-dark text-white pb-24 lg:pb-0" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5" aria-label="Simois - Ir al inicio">
              <img
                src="/images/logo.svg"
                alt="Simois Barbería"
                className="h-9 w-auto"
                width="120"
                height="36"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Barbería premium en Montevideo. Estilo, tradición y vanguardia en cada corte.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-simois-orange transition-all"
                aria-label="Seguinos en Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-simois-orange transition-all"
                aria-label="Seguinos en TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/simoisbarberia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-simois-orange transition-all"
                aria-label="Seguinos en Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider mb-5 text-white/90">Explorar</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-simois-orange transition-colors text-sm inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-simois-orange transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nuestros Locales */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider mb-5 text-white/90">Nuestros Locales</h4>
            <ul className="space-y-3">
              {localesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-simois-orange transition-colors text-sm flex items-center gap-2"
                  >
                    <MapPinIcon className="w-4 h-4 text-simois-orange" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider mb-5 text-white/90">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPinIcon className="w-4 h-4 text-simois-orange mt-0.5 shrink-0" />
                <span>Montevideo, Uruguay</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <PhoneIcon className="w-4 h-4 text-simois-orange shrink-0" />
                <a href="tel:+59899123456" className="hover:text-simois-orange transition-colors">
                  +598 99 123 456
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Horarios</p>
              <p className="text-sm text-gray-400">Lun - Sáb: 10:00 - 20:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Barbería Simois. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/privacidad" className="hover:text-simois-orange transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-simois-orange transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
