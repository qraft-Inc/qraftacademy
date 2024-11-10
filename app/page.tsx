import Courses from "@/components/sections/courses"
import Testimonials from "@/components/sections/testimonials"
import Hero from "@/components/sections/hero"
import { Metadata } from "next"
import Image from "next/image"
import { seoKeywords, siteConfig } from "@/config/site"
import { Card } from '@/components/ui/card';
import { DevelopmentTracks } from "@/components/sections/development-tracks"
import { Programs } from "@/components/sections/programs"


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}opengraph-image`],
    creator: "@Kolynz_b",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}opengraph-image`,
      },
    ],
  },
  alternates: {
    types: {
      'application/rss+xml': `${siteConfig.url}rss.xml`,
    },
  },
  creator: "Atuhaire Collins Benda",
  publisher: "Atuhaire Collins Benda",
  metadataBase: new URL(siteConfig.url),
  authors: [
    { name: "Atuhaire Collins Benda", url: "https://collinsbenda.com" },
    { name: "Andrew Tugume" },
  ],
  applicationName: siteConfig.name,
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};

const opportunities = [
  {
    title: 'Work With Us',
    description: 'Join our team and make a difference.',
    href: '/work-with-us',
  },
  {
    title: 'Partner With Us',
    description: 'Collaborate with us for mutual growth.',
    href: '/partner-with-us',
  },
  {
    title: 'Donate',
    description: 'Support our mission and help us grow.',
    href: '/donate',
  },
];


export default function Web() {
  return (
    <div className="min-h-screen">
    {/* <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-[#1a2942]"> */}
      <Hero />
      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

          <DevelopmentTracks />

          {/* <Courses /> */}
          <section className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 md:grid-rows-1 gap-1 container px-4 mx-auto py-20">
            <div className="border border-white" >
              <div className=" bg-white w-full py-5 px-2">
                <h2 className="text-primary-400 font-bold text-xl ">Upcoming Programs / Fellowships</h2>
              </div>
              <div className="flex flex-col pl-4 items-start justify-center space-y-5  h-3/4">
                <div className="max-w-sm space-y-2">
                  <h4 className="border-b border-primary-200 border-1 font-bold p-2">Digital Entrepreneurs Fellowship.</h4>
                  <p className="font-light text-sm">Join the Qraft academy digital entrepreneurs fellowship and get access to long term mentorship and weekly business services.</p>
                </div>
                <div className="max-w-sm space-y-2">
                  <h4 className="border-b border-primary-200 border-1 font-bold p-2">Simulated Work Environment Apprenticeship.</h4>
                  <p className="font-light text-sm">Level Up Your Career in A Simulated Work Environment To Join Or Lead Tech Teams. This simulator program is designed to prepare tech talent (enthusiasts and innovators included) through.</p>
                </div>
              </div>
            </div>
            <figure className="relative  overflow-hidden border-white border-2 ">
              <Image src="/images/rect3.png" alt="ladies discusing qraft" className="object-cover w-full " height={500} width={500} loading="lazy" />
            </figure>
          </section>
          <Programs />

          <Testimonials />

          <section>
            <h2 className="text-2xl font-semibold text-white mb-8">Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {opportunities.map((opportunity) => (
                <Card
                  key={opportunity.title}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-0 p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{opportunity.title}</h3>
                  <p className="text-blue-200">{opportunity.description}</p>
                </Card>
              ))}
            </div>
          </section>


        </div>
      </main>

      <figure className="relative h-[80vh] w-full overflow-hidden my-20 ">
        <Image src="/images/rect.png" alt="ladies discusing qraft" className="object-cover h-full w-full" height={1000} width={1000} loading="lazy" />
      </figure>

    </div>
  )
}
