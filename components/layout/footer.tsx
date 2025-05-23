import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="size-12">
                <Image
                  alt="Qraft Logo"
                  className="rounded-full"
                  height={48}
                  priority
                  src="/favicon.ico"
                  width={48}
                />
              </div>
              <span className="text-xl font-bold text-white">Qraft Academy</span>
            </div>
            <p className="text-blue-100">
              Empowering the next generation of tech leaders.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link className="text-blue-100 hover:text-white transition-colors" href="/courses">Courses</Link></li>
              <li><Link className="text-blue-100 hover:text-white transition-colors" href="/programs">Programs</Link></li>
              <li><Link className="text-blue-100 hover:text-white transition-colors" href="/about">About Us</Link></li>
              <li><Link className="text-blue-100 hover:text-white transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex gap-4">
              <a className="text-white hover:text-blue-200 transition-colors" href="https://www.facebook.com/yourpage">
                <Facebook className="size-6" />
              </a>
              <a className="text-white hover:text-blue-200 transition-colors" href="https://twitter.com/yourhandle">
                <Twitter className="size-6" />
              </a>
              <a className="text-white hover:text-blue-200 transition-colors" href="https://www.instagram.com/yourhandle">
                <Instagram className="size-6" />
              </a>
              <a className="text-white hover:text-blue-200 transition-colors" href="https://www.linkedin.com/in/yourprofile">
                <Linkedin className="size-6" />
              </a>
              <a className="text-white hover:text-blue-200 transition-colors" href="https://www.youtube.com/yourchannel">
                <Youtube className="size-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <div className="flex">
              <input
                className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full"
                placeholder="Your email"
                type="email"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Qraft Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
