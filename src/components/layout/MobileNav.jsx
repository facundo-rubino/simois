import { Link, useLocation } from 'react-router-dom'
import { mobileNavItems } from '../../data/navigation'
import { Icon } from '../common'
import { useBookingRedirect } from '../../hooks/useBookingRedirect'
import { useTheme } from '../../context/ThemeContext'

export function MobileNav() {
  const location = useLocation()
  const { redirectToBooking } = useBookingRedirect()
  const { isDark } = useTheme()

  const isActive = (path) => location.pathname === path

  const handleNavClick = (item, e) => {
    if (item.isBooking) {
      e.preventDefault()
      redirectToBooking({})
    }
  }

  const navBg = isDark ? 'bg-[#1a1a1a] border-[#333]' : 'bg-white border-gray-200'
  const inactiveColor = isDark ? 'text-gray-400' : 'text-simois-dark/60'

  return (
    <nav className={`fixed bottom-0 left-0 right-0 ${navBg} border-t z-40 lg:hidden safe-area-bottom`}>
      <div className="flex items-center justify-around h-16">
        {mobileNavItems.map((item) => {
          const active = !item.isBooking && isActive(item.path)

          if (item.isBooking) {
            return (
              <button
                key={item.path}
                onClick={(e) => handleNavClick(item, e)}
                className="flex flex-col items-center justify-center flex-1 h-full gap-1"
              >
                <div className="w-12 h-12 -mt-6 bg-simois-orange rounded-full flex items-center justify-center shadow-lg">
                  <Icon name={item.icon} className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium text-simois-orange">
                  {item.label}
                </span>
              </button>
            )
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                active ? 'text-simois-orange' : inactiveColor
              }`}
            >
              <Icon name={item.icon} className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
