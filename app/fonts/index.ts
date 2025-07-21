import { Lato, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const baronNeue = localFont({
  variable: '--font-baron-neue',
  src: [{
    path: "../../public/fonts/baron-neue.otf"
  }]
});

export const lato = Lato({
  variable: '--font-lato', weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
