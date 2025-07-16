import cn from "classnames";
import type { Metadata } from "next";
import Image from 'next/image';
import React from "react";

import "@/styles/tailwind.css";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import { siteConfig } from '@/config/site';

import { baronNeue, lato } from "./fonts";
import Providers from "./providers";
import GoogleAnalyticsScript from "../components/tools/google-analytics";
import { TailwindIndicator } from "../components/tools/tailwind-indicator";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.description}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      url: '/favicon/safari-pinned-tab.svg',
    },
    {
      rel: 'icon',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      url: '/favicon/favicon-16x16.png',
    },
  ],
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(baronNeue.variable, lato.variable, "font-default bg-white text-gray-900")}
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gray-100">
        <Providers>
          {/* Header Bar */}
          <div className="bg-blue-800 text-white py-3 px-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-black rounded-full">
                  <Image
                    src="https://res.cloudinary.com/dwa3soopc/image/upload/v1741593598/WhatsApp_Image_2025-02-23_at_00.01.59-removebg-preview_d20kvk.png"
                    alt="Qraft Logo"
                    height={64}
                    width={48}
                    priority
                  />
                </div>
                <span className="text-xl font-bold ">Qraft Academy</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold">Future of Work & EdTech</span>
                <span className="text-sm italic">Modern Work Development</span>
              </div>
            </div>
          </div>
          <Navigation />
          {children}
          <Footer />
          <GoogleAnalyticsScript />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}