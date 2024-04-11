import React from "react"
import "@/styles/tailwind.css"
import GoogleAnalyticsScript from "../components/tools/google-analytics"
import { TailwindIndicator } from "../components/tools/tailwind-indicator"
import { siteConfig } from '@/config/site';
import cn from "classnames";
import { baronNeue, lato } from "./fonts";
import { Metadata } from "next";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Providers from "./providers";

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
    <html lang="en" className={cn(baronNeue.variable, lato.variable, "font-default bg-primary-400 text-white")}>
      <Providers>

        <body>
          <Navigation />
          {children}
          <Footer />
          <GoogleAnalyticsScript />
          <TailwindIndicator />
        </body>
      </Providers>

    </html>
  )
}
