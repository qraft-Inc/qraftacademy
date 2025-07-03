import React from 'react'
import Image from 'next/image'
import { DevelopmentTracks } from '@/components/sections/development-tracks'
import Programs from '@/components/sections/programs'
import SuccessStories from '@/components/sections/success-stories'
import GetInvolved from '@/components/sections/get-involved'

export default function Home() {
  return (
    <React.Fragment>
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[80vh]">
            <div className="absolute inset-0">
              <Image
                src="/images/hero.png"
                alt="Qraft Academy Hero"
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-white mb-4">Qraft Academy</h1>
              <p className="text-xl text-white">Empowering the next generation of tech leaders</p>
            </div>
          </div>




        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Programs />
          </div>
        </section>

        {/* Development Tracks Section */}
        <DevelopmentTracks />

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SuccessStories />
          </div>
        </section>
        {/* End Success Stories Section */}

        {/* Get Involved Section */}
        <GetInvolved />

        {/* Centered Image with Text */}
        <div className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/image.webp"
                alt="Future of Education"
                width={1200}
                height={600}
                className="object-cover w-full h-full"
                quality={100}
                priority
              />
            </div>
            <div className="text-center max-w-3xl">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">
                Join the Future of Work & EdTech
              </h3>
              <p className="text-xl text-gray-600">
                Liberate your potential through innovative learning experiences
              </p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
