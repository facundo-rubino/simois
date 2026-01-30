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
    <footer className="bg-simois-dark text-white pb-20 lg:pb-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-simois-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bebas text-xl">S</span>
              </div>
              <span className="font-bebas text-2xl">SIMOIS</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Barbería premium en Montevideo. Estilo, tradición y vanguardia en cada corte.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-simois-orange transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-simois-orange transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/simoisbarberia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-simois-orange transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="font-bebas text-lg mb-4">Explorar</h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-simois-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nuestros Locales */}
          <div>
            <h4 className="font-bebas text-lg mb-4">Nuestros Locales</h4>
            <ul className="space-y-2">
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
            <h4 className="font-bebas text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPinIcon className="w-4 h-4 text-simois-orange mt-0.5 shrink-0" />
                <span>Montevideo, Uruguay</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <PhoneIcon className="w-4 h-4 text-simois-orange shrink-0" />
                <a href="tel:+59899123456" className="hover:text-simois-orange transition-colors">
                  +598 99 123 456
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-1">Horarios:</p>
              <p className="text-sm text-gray-400">Lun - Sáb: 10:00 - 20:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
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
