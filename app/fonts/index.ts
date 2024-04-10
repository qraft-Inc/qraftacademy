import localFont from 'next/font/local';
import { Lato } from 'next/font/google';

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
})