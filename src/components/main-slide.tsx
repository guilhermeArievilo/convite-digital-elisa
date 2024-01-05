"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const toArrayIndex = (limit: number): string[] => {
  const arr = []
  for (let i=1; i<=limit; i++) {
    arr.push(i.toString().padStart(2, '0'))
  }
  return arr
}

export default function MainSlide () {
  const album = toArrayIndex(11)
  return (
    <Swiper
      className='w-full h-full'
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      allowTouchMove={false}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
    {
      album?.map((item, index) => {
        return (
          <SwiperSlide key={`album-swiper-${index}`}>
            <div className='h-full w-full'>
              <Image src={`/elisa-album/${item}.jpg`} alt={`Foto do álbum do circo ${item}`} width={1024} height={682} className='w-full h-full object-cover' />
            </div>
          </SwiperSlide>
        )
      })
    }
    </Swiper>
  )
}