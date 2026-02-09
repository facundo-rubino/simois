import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link for keyboard/screen reader users (a11y) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-simois-orange focus:text-white focus:rounded-md focus:font-medium focus:text-sm"
      >
        Ir al contenido principal
      </a>
      <Header />
      <main id="main-content" className="flex-1" role="main">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  )
}
