import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/layout'

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const ServiciosPage = lazy(() => import('./pages/ServiciosPage'))
const BarberosPage = lazy(() => import('./pages/BarberosPage'))
const AcademyPage = lazy(() => import('./pages/AcademyPage'))
const LocalesPage = lazy(() => import('./pages/LocalesPage'))
const ProductosPage = lazy(() => import('./pages/ProductosPage'))

// Loading component
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-simois-orange border-t-transparent rounded-full animate-spin" />
        <p className="text-simois-dark/60 font-medium">Cargando...</p>
      </div>
    </div>
  )
}

// Animated routes wrapper
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/barberos" element={<BarberosPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/locales" element={<LocalesPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          {/* 404 fallback - redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
