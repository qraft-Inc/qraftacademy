import Courses from "@/components/sections/courses"
import Hero from "@/components/sections/hero"
import Testimonials from "@/components/sections/testimonials"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <main>
      <Hero />
      <Courses />
      <section className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 md:grid-rows-1 gap-1">
        <div className="border border-white" >
          <div className="pr-2 bg-white w-full">
            <h2 className="text-primary-400 ">Upcoming Programs / Fellowships</h2>
          </div>
          <div className="flex flex-col pr-2 items-start justify-center space-y-4">
            <div className="">
              <h4 className="border-b border-primary-200 border-1 p-2">Digital Entrepreneurs Fellowship.</h4>
              <p className="font-light">Join the Qraft academy digital entrepreneurs fellowship and get access to long term mentorship and weekly business services. </p>
            </div>
            <div className="">
              <h4 className="border-b border-primary-200 border-1 p-2">Simulated Work Environment Apprenticeship.</h4>
              <p className="font-light">Level Up Your Career in A Simulated Work Environment  To Join Or Lead Tech Teams.  This  simulator program is designed to prepare tech talent  (enthusiasts and innovators included) through. </p>
            </div>
          </div>
        </div>
        <figure className="relative  overflow-hidden mt-4 mb-6 border-white border-2">
          <Image src="/images/rect3.png" alt="ladies discusing qraft" className="object-cover" height={500} width={500} loading="lazy" />
        </figure>
      </section>
      <Testimonials />
      <figure className="relative h-[60vh] overflow-hidden mt-4 mb-6">
        <Image src="/images/rect.png" alt="ladies discusing qraft" className="object-cover" height={1000} width={1000} loading="lazy" />
      </figure>
    </main>
  )
}
