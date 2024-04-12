import React from 'react';
import cn from "classnames";
import Image from 'next/image';
import Balancer from 'react-wrap-balancer'


const Hero = () => {
  return (
    <section className='debug h-screen relative overflow-hidden'>
      <Image src="/images/hero.png" className="-z-10 object-contain grayscale-[55%] absolute  w-full" alt="" height={1000} width={1000} />
      <GridLines />
    </section>
  )
}

export default Hero


const GridLines = () => (<div className={cn("grid grid-cols-5 grid-rows-5", "h-screen")}>
  <div className="col-span-3 row-span-3 border-r-4 border-b-4 border-primary-400 flex items-end "><HeroContent /></div>
  <div className="col-span-2 row-span-3 col-start-4" />
  <div className="col-span-3 row-span-2 row-start-4" />
  <div className="col-span-2 row-span-2 col-start-4 row-start-4 border-l-4 border-t-4 border-primary-400" />
</div>)


const HeroContent = () => (
  <section className="max-w-lg pl-5 space-x-1 flex flex-col items-start justify-between  space-y-5 pb-6">
    <Balancer as="h1" className='font-bold uppercase text-4xl'>Ignite Your Tech Career with Qraft Academy</Balancer>
    <p className="font-light ">Join a Community of Tech Innovators, Gain Expert Training, and Create Your Future</p>
    <div className="bg-white border-4 border-white   ">
      <button className="text-xs px-6 py-4 bg-primary-200 font-extrabold  ">JOIN APPRENTISHIP</button>
      <button className="text-xs px-6 py-4 bg-white text-primary-400 font-extrabold ">DISCOVER TALENT</button>
    </div>
  </section>
)