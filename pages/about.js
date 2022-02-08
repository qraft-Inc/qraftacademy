import Head from "next/head";
import Link from "next/link"
import Image from "next/image"
import AboutUs from "../components/AboutUs";
import VisionMission from "../components/VisionMission";
import OurTeam from "../components/OurTeam";
import FunFactor from "../components/FunFactor";
import { MdNavigateNext } from "react-icons/md"

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
           
           {/* start hero section */}
           <header className="h-screen">

               <div className="absolute inset-0 overflow-hidden top-12">
                   <Image 
                    alt="Background Image"
                    src="https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/hero-bg_ytthxj.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                   />
               </div>

                <div className="px-4  py-36  text-white md:max-w-none text-center z-10 relative">
                    <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-center sm:leading-none md:text-6xl lg:text-7xl">
                        <span>About Us</span>
                    </h1>

                    <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg">
                        <span className="inline-flex w-full md:w-auto mt:12">
                            <Link href="/">
                                <a className="inline-flex items-center justify-center w-full px-2 py-20 text-2xl font-light leading-6 md:w-auto">Home</a>
                            </Link>
                            <span className="inline-flex  items-center justify-center px-px py-20 text-2xl font-medium leading-6 md:w-auto">
                                <MdNavigateNext></MdNavigateNext>
                            </span>
                            <span className="inline-flex items-center flex-nowrap justify-center w-full px-2 py-20 text-2xl font-light leading-6 md:w-auto">
                                About Us
                            </span>
                        </span>
                    </div>
                </div>
           </header>
            {/* end hero section */}

            <div className="space-y-4 py-20 px-10 ">

                <AboutUs />

                <VisionMission />

                {/* <FunFactor /> */}

                <OurTeam />
            </div>
        </>
    );
}


