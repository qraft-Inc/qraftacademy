import React from 'react';
import cn from "classnames";
import Image from 'next/image';
import Balancer from 'react-wrap-balancer'
import Link from 'next/link';


const Hero = () => {
  return (
    <section className='h-screen relative overflow-hidden'>
      <div className="h-screen w-full absolute -z-[50] opacity-30 bg-primary-200"></div>
      <Image src="/images/hero.png" className="-z-[100] object-cover h-screen  absolute  w-full" alt="" height={1000} width={1000} />
      <GridLines />
      <HeroContent />
    </section>
  )
}

export default Hero


const GridLines = () => (<div className={cn("grid grid-cols-5 grid-rows-5 gap-0", "h-screen w-full absolute -z-[50] opacity-80")}>
  <div className="col-span-3 row-span-3 border-r-2 border-b-2 border-primary-400" />
  <div className="col-span-2 row-span-3 col-start-4" />
  <div className="col-span-3 row-span-2 row-start-4" />
  <div className="col-span-2 row-span-2 col-start-4 row-start-4 border-l-2 border-t-2 border-primary-400" />
</div>)


const HeroContent = () => (
  <section className="max-w-lg pl-5 pt-24 z-10 space-x-1 flex flex-col items-start justify-between  space-y-5 pb-6">
    <Balancer as="h1" className='font-bold uppercase text-4xl'>Future Of Work And Ed-Tech</Balancer>
    <p className="font-light ">Learn. Work. Acheive</p>
    <div className="bg-white border-4 border-white">
      <Link href="https://classroom.qraftacademy.com/" >
        <button className="text-xs px-6 py-4 bg-primary-200 font-extrabold  uppercase">Learn</button>
      </Link>
      <Link href="/programs"> <button className="text-xs px-6 py-4 bg-white text-primary-400 font-extrabold uppercase">Participate</button>
      </Link>  </div>
  </section>
)