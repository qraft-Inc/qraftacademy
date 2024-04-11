import React from 'react';
import cn from "classnames";
import Image from 'next/image';
import Balancer from 'react-wrap-balancer'


const Hero = () => {
  return (
    <section className='debug h-screen relative overflow-hidden'>
      <GridLines />
      <Image src="-z-10 object-cover" alt="" height={1000} width={100} />
    </section>
  )
}

export default Hero


const GridLines = () => (<div className={cn("grid grid-cols-5 grid-rows-5 gap-4 ", "h-screen")}>
  <div className="col-span-3 row-span-3"><HeroContent /></div>
  <div className="col-span-2 row-span-3 col-start-4">2</div>
  <div className="col-span-3 row-span-2 row-start-4">3</div>
  <div className="col-span-2 row-span-2 col-start-4 row-start-4">4</div>
</div>)


const HeroContent = () => (
  <section className="max-w-sm space-x-1">
    <Balancer as="h1" className='font-bold uppercase '>Ignite Your Tech Career with Qraft Academy</Balancer>
    <p className="font-light ">Join a Community of Tech Innovators, Gain Expert Training, and Create Your Future</p>
    <div className="bg-white p-1 flex item-center justify-center">
      <button className="text-xs px-3 px-2 bg-primary-100">JOIN APPRENTISHIP</button>
      <button className="text-xs  px-3 px-2 bg-white text-white">DISCOVER TALENT</button>
    </div>
  </section>
)