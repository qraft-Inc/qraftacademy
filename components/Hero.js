import { Link } from 'react-scroll'
import Image from 'next/image'

export default function Hero() {

  return (
    <>
      <header className="h-screen">
        <div className=" h-full absolute inset-0 top-14">
          <Image
            alt="Background Image"
            src="https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/hero-bg_ytthxj.png"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="px-4 py-44 text-left text-white md:max-w-none md:text-center z-10 relative">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline-block md:block">Night School </span>
            <span className="mt-2 sm:inline-block"> And Apprenticeships</span>
          </h1>

          <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg mb-12">
            Learn, Work And Grow Your Career With Industry Experts And Dynamic Teams!
          </div>

          <span className="w-full md:w-auto">
            <Link
              activeClass="active"
              to="courseList"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a className="cursor-pointer inline-flex items-center justify-center w-full px-8 md:px-12 py-4 text-base md:text-lg font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                Available Tracks
              </a></Link>
          </span>
        </div>

      </header>
    </>
  )
}
