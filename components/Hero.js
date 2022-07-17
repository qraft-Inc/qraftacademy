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

        <div className="px-4 py-44 text-left text-white md:max-w-none md:text-left z-10 relative">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-left sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline-block md:block">Cultivating </span>
            <span className="mt-2 sm:inline-block"> Digital Talent</span>
          </h1>

          <div className=" mt-5 md:mt-12 md:max-w-xl md:text-left lg:text-lg mb-12">
            Modern Work Marketplace For Digital Talent
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
                Advance Your Career
              </a></Link> 
              
              <Link
              activeClass="active"
              to="workList"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a className=" md:px-12 py-4  text-base md:text-lg font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                Find Work
              </a></Link> 

              <Link
              activeClass="active"
              to="talentList"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a className="cursor-pointer inline-flex items-center justify-center w-full px-8 md:px-12 py-4 text-base md:text-lg font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                Hire Digital Talent
              </a></Link>
          </span>
        </div>

      </header>
    </>
  )
}
