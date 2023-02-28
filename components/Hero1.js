import { Link } from "react-scroll";
import Image from "next/image";

export default function Hero1() {
  return (
    <>
      <header className="h-screen">
        <div className=" h-full absolute inset-0 " style={{ top: "110vh" }}>
          <Image
            alt="Background Image"
            src="https://res.cloudinary.com/dwa3soopc/image/upload/v1677600066/qraft%20/mikelya-fournier-4iG91rr92Ks-unsplash_lwamc8.jpg "
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="px-4 py-44 text-left text-white md:max-w-none md:text-center z-10 relative">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline-block md:block">
              Fellowship And Access To Resources For Digital Entrepreneurs
            </span>
          </h1>

          <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg mb-12">
            Rely On Qraft Academy. The marketplace for tech talent.
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="w-full md:w-auto">
                <Link
                  activeClass="active"
                  to="courseList"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <p className="cursor-pointer inline-flex items-center justify-center w-full px-8 md:px-12 py-4 text-base md:text-lg font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                    Join A Fellowship
                  </p>
                </Link>
              </span>
            </div>

            <div>
              <span className="w-full md:w-auto">
                <Link
                  activeClass="active"
                  to="courseList"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <p className="cursor-pointer inline-flex items-center justify-center w-full px-8 md:px-12 py-4 text-base md:text-lg font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                    Invest In A Business
                  </p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
