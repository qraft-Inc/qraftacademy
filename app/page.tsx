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
      <section className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 md:grid-rows-1 gap-1 container px-4 mx-auto py-20">
        <div className="border border-white" >
          <div className=" bg-white w-full py-5 px-2">
            <h2 className="text-primary-400 font-bold text-xl ">Upcoming Programs / Fellowships</h2>
          </div>
          <div className="flex flex-col pl-4 items-start justify-center space-y-5  h-3/4">
            <div className="max-w-sm space-y-2">
              <h4 className="border-b border-primary-200 border-1 font-bold p-2">Digital Entrepreneurs Fellowship.</h4>
              <p className="font-light text-sm">Join the Qraft academy digital entrepreneurs fellowship and get access to long term mentorship and weekly business services. </p>
            </div>
            <div className="max-w-sm space-y-2">
              <h4 className="border-b border-primary-200 border-1 font-bold p-2">Simulated Work Environment Apprenticeship.</h4>
              <p className="font-light text-sm">Level Up Your Career in A Simulated Work Environment  To Join Or Lead Tech Teams.  This  simulator program is designed to prepare tech talent  (enthusiasts and innovators included) through. </p>
            </div>
          </div>
        </div>
        <figure className="relative  overflow-hidden border-white border-2 ">
          <Image src="/images/rect3.png" alt="ladies discusing qraft" className="object-cover w-full " height={500} width={500} loading="lazy" />
        </figure>
      </section>
      <Testimonials />
      <figure className="relative h-[80vh] w-full overflow-hidden my-20 ">
        <Image src="/images/rect.png" alt="ladies discusing qraft" className="object-cover h-full w-full" height={1000} width={1000} loading="lazy" />
      </figure>
    </main>
  )
}
