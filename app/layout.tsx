import React from "react"
import "@/styles/tailwind.css"
import GoogleAnalyticsScript from "../components/tools/google-analytics"
import { TailwindIndicator } from "../components/tools/tailwind-indicator"
import { siteConfig } from '@/config/site';

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
    <html lang="en">
      <body>
        {children}
        <GoogleAnalyticsScript />
        <TailwindIndicator />
      </body>
    </html>
  )
}
