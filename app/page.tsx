import Image from 'next/image'
import React from 'react'
import { DevelopmentTracks } from '@/components/sections/development-tracks'
import GetInvolved from '@/components/sections/get-involved'
import Programs from '@/components/sections/programs'
import SuccessStories from '@/components/sections/success-stories'

export default function Home() {
  return (
    <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[80vh]">
          <div className="absolute inset-0">
            <Image
              alt="Qraft Academy Hero"
              className="object-cover size-full"
              height={1080}
              priority
              src="/images/hero.png"
              width={1920}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">Qraft Academy</h1>
            <p className="text-xl text-white">Learn. Work. Achieve.</p>
          </div>
        </div>

        {/* Thematic Areas Section */}
        <DevelopmentTracks />

        {/* Apprenticeship Split Screen */}
        <div className="w-full flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-1/2 h-96 relative">
            <Image
              alt="Digital entrepreneurs learning"
              className="object-cover size-full"
              height={600}
              priority
              src="/images/rect3.png"
              width={800}
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-4">
                Master Your Craft
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Your Skill Is Your Career.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join Qraft Academy
              </button>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Programs />
          </div>
        </section>

<SuccessStories />
      
        {/* Testimonials Section
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">          
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Testimonials</span>
            </h2>
            <Testimonials />
          </div>
        </section> */}
        {/* Upcoming Programs Section   
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Upcoming Programs</span>
            </h2>
            <UpcomingPrograms />
          </div>
        </section> */}
        {/* Get Involved Section */}
        <GetInvolved />

        {/* Centered Image with Text */}
        <div className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                alt="Future of Education"
                className="object-cover size-full"
                height={600}
                priority
                quality={100}
                src="/images/image.webp"
                width={1200}
              />
            </div>
            <div className="text-center max-w-3xl">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">
                Join the Future of Work
              </h3>
              <p className="text-xl text-gray-600">
                Liberate your potential through innovative learning experiences
              </p>
            </div>
          </div>
        </div>
      </main>
  )
}
