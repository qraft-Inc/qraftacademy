import { Link } from 'react-scroll'
import Image from 'next/image'

export default function Hero({image, title1, title2, subTitle, btnText, btnLink }) {

  return (
    <>
      <header className="h-screen mb-8">
        <div className=" h-full absolute inset-0 top-14">
          <Image
            alt="Background Image"
            src={image}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="px-4 py-44 text-left text-white md:max-w-none md:text-center z-10 relative">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline-block md:block">{title1}</span>{" "}
            <span className="mt-2 sm:inline-block"> {title2}</span>
          </h1>

          <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg mb-12">
            {subTitle}
          </div>

          <span className="w-full md:w-auto">
            <Link
              activeClass="active"
              to={btnLink}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a className="cursor-pointer inline-flex items-center justify-center w-full px-8 md:px-12 py-4 text-base md:text-lg font-bold leading-6  md:w-auto bg-[#06283D]  transition duration-300">
                {btnText}
              </a></Link>
          </span>
        </div>

      </header>
    </>
  )
}
