"use client"

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/images/hero.png"
        alt="Qraft Academy Hero"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Qraft Academy</h1>
        <p className="text-xl text-white">Learn. Work. Achieve.</p>
      </div>
    </section>
  )
}
