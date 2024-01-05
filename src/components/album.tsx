"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const toArrayIndex = (limit: number): string[] => {
  const arr = []
  for (let i=1; i<=limit; i++) {
    arr.push(i.toString().padStart(2, '0'))
  }
  return arr
}

export default function Album () {
  const album = toArrayIndex(11)
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1.1}
      centeredSlides
    >
    {
      album?.map((item, index) => {
        return (
          <SwiperSlide key={`album-swiper-${index}`}>
            <div className='h-96 rounded-3xl overflow-clip'>
              <Image src={`/elisa-album/${item}.jpg`} alt={`Foto do álbum do circo ${item}`} width={1024} height={682} className='w-full h-full object-cover' />
            </div>
          </SwiperSlide>
        )
      })
    }
    </Swiper>
  )
}