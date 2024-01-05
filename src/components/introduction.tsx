"use client"
import Image from "next/image";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin)
import { useLayoutEffect, useRef } from "react";

export default function IntroductionAnimation () {
  const introductionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self: gsap.Context) => {
      if (!self.selector) return

      const title = self.selector('.title')
      
      gsap.to(title, {
        duration: 1,
        text: "Orgulhosamente apresentamos:",
        ease: "power3.easeOut",
      })
    }, introductionRef)

    const bodyTl = gsap.timeline({
      delay: 3
    }) 
    
    bodyTl
      .to('.introduction-body', {
        ease: "power3.easeInOut",
        top: -1000,
        duration: 1,
        opacity: 0
      })
      .to('.introduction-body', {
        display: "none"
      })

    return () => ctx.revert()
  }, [])
  return (
    <div ref={introductionRef} className="fixed top-0 left-0 w-screen h-screen bg-background z-50 flex flex-col items-center justify-end gap-4 introduction-body">
      <Image src={'/papel-digital-circo-aquarela-3-scaled.jpg'} alt='Elemento Tenda' width={430} height={932} className='absolute top-0 left-0 w-full h-full object-cover background'/>
      <div className="container py-16 shrink-0">
        <div className="uppercase flex flex-col items-center gap-1 relative py-3 w-full brasao">
          <Image src={'/elementos-circo-aquarela-35.png'} alt='Baloes' width={458} height={256} className='absolute -top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pb-3'/>
          <Image src={'/elementos-circo-aquarela-52.png'} alt='Elemento 01' width={458} height={256} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pb-3'/>
          <h1 className='text-xl z-20 title text-center w-4/5'>Respeitável público</h1>
        </div>
      </div>
      <Image src={'/elementos-circo-aquarela-7.png'} alt='Baloes' width={458} height={256} className='w-full pb-3 z-30 shrink girl'/>
    </div>
  )
}