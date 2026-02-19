import { PageTransition } from '../components/layout'
import {
  HeroSection,
  LocalSelector,
  AboutSection,
  ProductsPreview,
  CTASection,
} from '../components/home'

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <LocalSelector />
      <AboutSection />
      <ProductsPreview />
      <CTASection />
    </PageTransition>
  )
}
