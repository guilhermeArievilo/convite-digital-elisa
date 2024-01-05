import Album from '@/components/album'
import MainSlide from '@/components/main-slide'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="w-screen overflow-x-clip">
        <div className="relative w-full h-96">
          <MainSlide />
          <div className="absolute bottom-0 left-0 w-full h-1/4 from-white bg-gradient-to-t"/>
        </div>
        <div className="relative w-full flex items-center justify-center pb-9 z-10">
          <Image src={'/elementos-circo-aquarela-35.png'} alt='Elemento Baloes' width={458} height={256} className='absolute top-1/2 -left-56 -translate-y-1/2'/>
          <Image src={'/elementos-circo-aquarela-35.png'} alt='Elemento Baloes' width={458} height={256} className='absolute top-1/2 -right-56 -translate-y-1/2'/>
          <div className="uppercase flex flex-col items-center gap-1 relative py-3 w-full">
            <Image src={'/elementos-circo-aquarela-52.png'} alt='Elemento 01' width={458} height={256} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pb-3'/>
            <h2 className='text-base z-20'>O Circo Mágico da</h2>
            <h1 className='text-7xl z-20'>Elisa</h1>
            <h3 className='text-sm z-20'>1 Aninho</h3>
          </div>
        </div>
      </main>

      <section id="album" className='py-8 overflow-x-clip'>
        <Album />
        <div className="flex flex-col items-center justify-center h-80 relative">
          <Image src={'/elementos-circo-aquarela-50.png'} alt='Elemento Tenda' width={335} height={347} className='absolute -top-32 w-full pb-3 z-30'/>
          <Image src={'/elementos-circo-aquarela-12.png'} alt='Elemento Criança 01' width={166} height={205} className='absolute -bottom-4 -left-10 w-25 pb-3 z-30'/>
          <Image src={'/elementos-circo-aquarela-16.png'} alt='Elemento Elefante' width={166} height={205} className='absolute bottom-5 -right-10 w-25 pb-3 z-30'/>
        </div>
      </section>

      <section id="informacoes" className='py-8'>
        <Image src={'/bandeirolas.png'} alt='Elemento Tenda' width={335} height={347} className='w-full pb-3 z-30'/>
        <div className="container grid grid-cols-4 gap-4 items-center">
          <div className="col-span-2">
            <Image src={'/elementos-circo-aquarela-18.png'} alt='Elemento Tenda' width={335} height={347} className='w-full pb-3 z-30'/>
          </div>
          <div className="col-span-2">
            <span className='uppercase text-3xl'>Sábado, dia 20 de Janeiro, ás 18h</span>
          </div>
        </div>
        <div className="container grid grid-cols-4 gap-4 items-center">
          <div className="col-span-2 flex flex-col gap-1">
            <span className='uppercase text-xl'>Salão de Festas do Green Park</span>
            <span className='uppercase text-base'>Irecê-BA</span>
          </div>
          <div className="col-span-2">
            <Image src={'/elementos-circo-aquarela-41.png'} alt='Elemento Tenda' width={335} height={347} className='w-full pb-3 z-30'/>
          </div>
        </div>
        <div className="container">
          <a href={`https://api.whatsapp.com/send?phone=557499612233&text=Confirmado`} target="_blank" className="flex justify-center text-white text-xs uppercase bg-secondary py-4 px-3 rounded-full shrink-0">Confirmar Presença</a>
        </div>
      </section>
    </>
  )
}
