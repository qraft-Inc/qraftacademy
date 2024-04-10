import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google';

export const spaceGrotesk = SpaceGrotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
});

export const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
