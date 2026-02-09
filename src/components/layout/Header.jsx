import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems } from '../../data/navigation'
import { Button, MenuIcon, CloseIcon, MoonIcon } from '../common'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useTheme } from '../../context/ThemeContext'

// Sun icon for light mode
function SunIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isMobile = useIsMobile()
  const { isDark, toggleTheme } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isActive = (path) => location.pathname === path

  // Dynamic classes based on theme
  const headerBg = isDark
    ? isScrolled || isMenuOpen
      ? 'bg-[#1a1a1a] shadow-md'
      : 'bg-[#1a1a1a]/95 backdrop-blur-sm'
    : isScrolled || isMenuOpen
      ? 'bg-white shadow-md'
      : 'bg-white/95 backdrop-blur-sm'

  const textColor = isDark ? 'text-white' : 'text-simois-dark'
  const textColorHover = isDark ? 'hover:text-simois-orange' : 'hover:text-simois-orange'
  const menuBg = isDark ? 'bg-[#242424]' : 'bg-white'
  const menuItemHover = isDark ? 'hover:bg-[#333]' : 'hover:bg-simois-light'
  const borderColor = isDark ? 'border-[#333]' : 'border-gray-100'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Simois - Ir al inicio">
              <img
                src="/images/logo.svg"
                alt="Simois Barbería"
                className="h-8 md:h-10 w-auto"
                width="120"
                height="40"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium text-sm uppercase tracking-wide transition-colors px-3 py-2 rounded-md ${
                    isActive(item.path)
                      ? 'text-simois-orange bg-simois-orange/8'
                      : `${textColor} ${textColorHover} hover:bg-simois-orange/5`
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full ${textColor} hover:text-simois-orange hover:bg-simois-orange/10 transition-colors`}
                aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
                title={isDark ? 'Modo claro' : 'Modo oscuro'}
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              <Button variant="primary" bookingOptions={{}}>
                Reservar Turno
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full ${textColor} hover:text-simois-orange hover:bg-simois-orange/10 transition-colors`}
                aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-full ${textColor} hover:bg-simois-orange/10 transition-colors`}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.nav
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-16 right-0 bottom-0 w-80 max-w-[calc(100vw-2rem)] ${menuBg} z-50 lg:hidden shadow-xl`}
            aria-label="Menú de navegación"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto py-6">
                <div className="px-5 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-xl font-medium transition-all ${
                        isActive(item.path)
                          ? 'bg-simois-orange/10 text-simois-orange'
                          : `${textColor} ${menuItemHover}`
                      }`}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className={`p-5 border-t ${borderColor}`}>
                <Button
                  variant="primary"
                  bookingOptions={{}}
                  fullWidth
                  size="lg"
                >
                  Reservar Turno
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  )
}
