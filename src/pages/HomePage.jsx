import { PageTransition } from '../components/layout'
import {
  HeroSection,
  LocalSelector,
  AboutSection,
  ServicesPreview,
  ProductsPreview,
  CTASection,
} from '../components/home'

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <LocalSelector />
      <AboutSection />
      <ServicesPreview />
      <ProductsPreview />
      <CTASection />
    </PageTransition>
  )
}
