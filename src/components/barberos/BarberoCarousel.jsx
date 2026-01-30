import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { BarberoCard } from './BarberoCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export function BarberoCarousel({ barberos }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={16}
      slidesPerView={1.2}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      className="pb-12"
      breakpoints={{
        480: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2,
          centeredSlides: false,
        },
      }}
    >
      {barberos.map((barbero) => (
        <SwiperSlide key={barbero.id}>
          <BarberoCard barbero={barbero} compact />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
