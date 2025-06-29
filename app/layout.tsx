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
    <html className={cn(baronNeue.variable, lato.variable, "font-default bg-white text-gray-900")} lang="en">
      <Providers>
        <body>
          {/* Header Bar */}
          <div className="bg-blue-800 text-white py-3 px-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-12"> {/* Changed to size-12 */}
                  <Image 
                    alt="Qraft Logo" 
                    className="rounded-full"
                    height={48}
                    priority
                    src="/favicon.ico"
                    width={48}
                  />
                </div>
                <span className="text-xl font-bold">Qraft Academy</span>
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
        </body>
      </Providers>
    </html>
  );
}
