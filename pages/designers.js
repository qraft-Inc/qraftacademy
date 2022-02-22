import Link from "next/link"
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';
import { FaAward } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiSpeaker } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactPlayer from 'react-player/lazy';


export default function Designers() {

    //get loggedIn user
    const { user } = useUser();

    return (
        <>
            <Head>
                <title>UI/UX Designers</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            {/* hero section */}
            <div className="pt-24 flex flex-col items-center">
                <h1 className="inline-block px-6 py-2 border-2 border-[#4092CF] text-[#4092CF] font-medium font-bold text-center text-sm leading-tight uppercase rounded-full">PRODUCT DESIGN COURSE</h1>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-400 w-4/6 text-center">Launch your Product Design career in just <br />12 weeks
                </h2>
            </div>

            <header className="h-64 md:h-auto bg-black relative brightness-100 w-full">
                <div className="z-0 overflow-hidden absolute insert-0 h-full w-full">

                    <ReactPlayer
                        controls
                        light="https://res.cloudinary.com/filipe256/image/upload/v1644672440/videos/thumbnail2_llzns4.gif"
                        playing
                        url="https://res.cloudinary.com/filipe256/video/upload/v1644908419/videos/product_design_vc5jny.mp4"

                        playIcon={<AiFillPlayCircle size={80} />}
                        width='100%'
                        height='100%' />
                </div>

                <div className="flex flex-col space-y-8 ">
                    <div className="flex justify-evenly mt-4 w-96 bg-black text-white container mx-auto text-xs z-10 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <AiOutlineClockCircle size={20} />
                            <span className="font-bold">12 weeks</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <GiSpeaker size={20} />
                            <span className="font-bold">English</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiOutlineSafetyCertificate size={20} />
                            <span className="font-bold">Certified Course</span>
                        </div>
                    </div>

                    <div className="pointer-events-auto w-[300px] mt-10 ml-auto mr-12 p-[5px] bg-gradient-to-r from-blue-500 to-red-400 rounded-[15px] z-10 hidden lg:block">
                        <div className="flex flex-col p-8 space-y-4 bg-white w-72 rounded-[15px]">
                            <h1 className="text-center font-semibold">The next course starts 18.April.2022</h1>
                            <span className="text-center font-semibold">for 12 weeks</span>
                            <ul className="bg-white rounded-lg  text-gray-900">
                                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Course Overview</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Curriculum Overview</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Course Goals</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Hands on Projects</li>
                                <li className="px-6 py-2 w-full rounded-b-lg">FAQ</li>
                            </ul>
                            {!user &&
                                <span className="mx-auto">
                                    <Link href="designers/register">
                                        <a className="flex self-center justify-center rounded-lg w-36 text-center text-white font-bold text-base p-2 px-2 bg-light-blue hover:bg-blue-400 transition duration-300">Sign in to apply</a>
                                    </Link>
                                </span>
                            }
                            {user &&
                                <span className="mx-auto">
                                    <Link href="designers/register">
                                        <a className="flex self-center justify-center rounded-lg w-36 text-center text-white font-bold text-base p-2 px-4 bg-light-blue hover:bg-blue-400 transition duration-300">apply now</a>
                                    </Link>
                                </span>
                            }
                        </div>
                    </div>

                    <div className="opacity-82 bg-black flex justify-evenly w-full container mx-auto text-white pb-10 z-10 invisible md:visible">
                        <div className="w-64 text-center">
                            <AiOutlineCalendar size={20} className="mx-auto mt-2" />
                            <h1 className="font-bold mb-4">Flexible learning</h1>
                            <p>No need to quit your job with our mix of video & live learning</p>
                        </div>
                        <div className="w-64 text-center">
                            <FaAward size={20} className="mx-auto mt-2" />
                            <h1 className="font-bold mb-4">Mentorship</h1>
                            <p>Weekly live & interactive sessions with your design mentor</p>
                        </div>
                        <div className="w-64 text-center">
                            <FaRegHandshake size={20} className="mx-auto mt-2" />
                            <h1 className="font-bold mb-4">Hiring Company Network</h1>
                            <p>Get your portfolio in front of our vast network of top employers</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* left side section */}
            <div className="flex justify-around space-y-2">
                <div className="mt-8 w-[300px] h-[27.5rem] p-[5px] bg-gradient-to-r from-blue-500 to-red-400 rounded-[15px] z-10 hidden lg:block sticky sticky top-28">
                    <div className="flex flex-col p-8 space-y-4 bg-white w-72 rounded-[15px]">
                        <h1 className="text-center font-semibold">The next course starts 18.April.2022</h1>
                        <span className="text-center font-semibold">for 12 weeks</span>
                        <ul className="bg-white rounded-lg  text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Course Overview</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Curriculum Overview</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Course Goals</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Hands on Projects</li>
                            <li className="px-6 py-2 w-full rounded-b-lg">FAQ</li>
                        </ul>
                        {!user &&
                            <span className="mx-auto">
                                <Link href="designers/register">
                                    <a className="flex self-center justify-center rounded-lg w-36 text-center text-white font-bold text-base p-2 px-2 bg-light-blue hover:bg-blue-400 transition duration-300">Sign in to apply</a>
                                </Link>
                            </span>
                        }
                        {user &&
                            <span className="mx-auto">
                                <Link href="designers/register">
                                    <a className="flex self-center justify-center rounded-lg w-36 text-center text-white font-bold text-base p-2 px-4 bg-light-blue hover:bg-blue-400 transition duration-300">apply now</a>
                                </Link>
                            </span>
                        }
                    </div>
                </div>
                {/* right side section */}
                <div className=" md:w-7/12 p-4 space-y-4 pt-8">
                    <div className="">
                        <h1 className="text-gray-400 text-xl md:text-3xl font-black">Course Overview</h1>
                        <p>Our curriculum includes a career development to help you put to use the skills leant, a video and audio lectures, assignments, and live sessions, hands on projects and mentors to help you grow</p>
                    </div>

                    <div>
                        <h1 className="text-gray-400 text-xl md:text-3xl font-black">Goal</h1>
                        <ul className="space-y-2">
                            <li className="flex items-center p-4 border-b "><AiOutlineArrowRight className="text-blue-500 mr-2" /><p>Become an entry-level product designer</p></li>
                            <li className="flex items-center p-4 border-b"><AiOutlineArrowRight className="text-blue-500 mr-2" /><p>Become job ready</p></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-gray-400 text-xl md:text-3xl font-black">What you’ll learn</h1>
                        <ol className="border-l-2 border-blue-600 mt-4">
                            <li>
                                <div className="flex flex-start items-center">
                                    <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                                    <h4 className="text-gray-800 font-semibold md:text-lg -mt-2">Fundamentals of Product Design:</h4>
                                </div>
                                <div className="ml-6 mb-2 pb-2">
                                    <p className="text-gray-700 mt-2 mb-4">Explore Tools, and frameworks, principle in UX design and identify alternatives roles of designers.</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-start items-center">
                                    <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                                    <h4 className="text-gray-800 font-semibold md:text-lg -mt-2">Low-Fidelity Design</h4>
                                </div>
                                <div className="ml-6 mb-2 pb-2">
                                    <p className="text-gray-700 mt-2 mb-4">To create simple and low-tech concepts, all you need to get started is a pen and paper. The goal is to turn your ideas into testable artifacts that you can then use to collect and analyze feedback in the early stages.</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-start items-center">
                                    <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                                    <h4 className="text-gray-800 font-semibold md:text-lg -mt-2">High-Fidelity Design</h4>
                                </div>
                                <div className="ml-6 mb-2 pb-2">
                                    <p className="text-gray-700 mt-2 mb-4">Create computer-based, and allow realistic (mouse-keyboard) user interactions. High-fidelity prototypes take you as close as possible to a true representation of the user interface.</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-start items-center">
                                    <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                                    <h4 className="text-gray-800 font-semibold md:text-lg -mt-2">Personal Branding</h4>
                                </div>
                                <div className="ml-6 mb-2 pb-2">
                                    <p className="text-gray-700 mt-2 mb-4">Create an online portfolio to showcase UX design work and also learn best practices for building a professional network.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="">
                        <h1 className="text-gray-400 text-xl md:text-3xl font-black">Projects</h1>
                        <p>Each Participant will select the Project to work on throughout the course</p>
                        <ul className="list-disc space-y-1 ml-8">
                            <li>commerce mobile App for an art Gallery</li>
                            <li>MOOCS Learning app for creative careers. </li>
                            <li>Other suggested projects </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:flex-row space-y-2 sm:space-x-8 pb-8">
                        <div>
                            <h1 className="text-blue-900 font-bold text-center mb-2">Benefits</h1>
                            <div className="block p-6 rounded-2xl shadow-lg bg-white w-48 bg-gray-300">
                                <ul className="space-y-8 text-baset text-center font-medium">
                                    <li>One on career mentorship</li>
                                    <li>Free Apprenticeship</li>
                                    <li>Community of Designers</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-blue-900 font-bold text-center mb-2">Pricing</h1>
                            <div className="block p-6 rounded-2xl shadow-lg bg-white w-48 bg-gray-300">
                                <ul className="space-y-8 text-baset text-center font-medium">
                                    <li className="font-bold">Beginner Level</li>
                                    <li className="font-bold">$200</li>
                                    <li>Best Value for entry</li>
                                    <li>
                                        {!user &&
                                            <span className="">
                                                <Link href="designers/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Sign in to apply</a></Link>
                                            </span>
                                        }
                                        {user &&
                                            <span className="">
                                                <Link href="designers/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Apply Now</a></Link>
                                            </span>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-blue-900 font-bold text-center mb-2">Pricing</h1>
                            <div className="block p-6 rounded-2xl shadow-lg bg-white w-48 bg-gray-300">
                                <ul className="space-y-8 text-baset text-center font-medium">
                                    <li className="font-bold">Advanced Level</li>
                                    <li className="font-bold">$250</li>
                                    <li>Advance your career</li>
                                    <li>
                                        {!user &&
                                            <span className="">
                                                <Link href="designers/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Sign in to apply</a></Link>
                                            </span>
                                        }
                                        {user &&
                                            <span className="">
                                                <Link href="designers/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Apply Now</a></Link>
                                            </span>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

