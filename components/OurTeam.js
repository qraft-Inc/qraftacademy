import Image from "next/image";
import Link from "next/link";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

// data to be displayed on each mentor card
const data = [
    {
        id: 1,
        courseImg: "/img/Ainembabazi Recheal.jpg",
        name: "Recheal Ainembabazi",
        role: "FOUNDER",
        altText: "Recheal Ainembabazi - Founder"
    },
    {
        id: 2,
        courseImg: "/img/Natukunda Marcella.jpg",
        name: "Natukunda Marcella",
        role: "CO-FOUNDER",
        altText: "Natukunda Marcella - Co-founder"
    },
    {
        id: 3,
        courseImg: "/img/Denny Wong.png",
        name: "Denny Wong",
        role: "Partner",
        altText: "Denny Wong - Partner"
    },
    {
        id: 4,
        courseImg: "/img/AndrewTugume2.jpg",
        name: "Andrew Tugume",
        role: "Software Engineer",
        altText: "Andrew Tugume - Software Engineer"
    },
    {
        id: 5,
        courseImg: "/img/Kyasiimire Caroline.jpg",
        name: "Kyasiimire Caroline",
        role: "Social Worker",
        altText: "Kyasiimire Caroline - Social Worker"
    },
    {
        id: 6,
        courseImg: "/img/Precious Kasasira (Developer).jpg",
        name: "Precious Kasasira",
        role: "Software Developer",
        altText: "Precious Kasasira - Developer"
    },
    {
        id: 7,
        courseImg: "/img/Juliyana woldeab.jpg",
        name: "Juliyana Woldeab",
        role: "Head Digital Marketing",
        altText: "Juliyana Woldeab - Head Digital Marketing"
    },
    {
        id: 8,
        courseImg: "/img/phillip Mambo(Developer).png",
        name: "Phillip Mambo",
        role: "Software Developer",
        altText: "Phillip Mambo - Developer"
    },
    {
        id: 9,
        courseImg: "/img/Anold Kalema(Developer).jpg",
        name: "Anold Kalema",
        role: "Software Developer",
        altText: "Anold Kalema - Developer"
    },
    {
        id: 10,
        courseImg: "/img/Joshua Kasasira(Developer).jpg",
        name: "Joshua Kasasira",
        role: "Software Developer",
        altText: "Joshua Kasasira - Developer"
    },
    {
        id: 11,
        courseImg: "/img/Shakira Ndagire(Developer).jpg",
        name: "Shakira Ndagire",
        role: "Software Developer",
        altText: "Shakira Ndagire - Developer"
    },
    {
        id: 12,
        courseImg: "/img/Stuart Stuart(Developer).jpg",
        name: "Stuart",
        role: "Software Developer",
        altText: "Stuart - Developer"
    }
]

export default function OurTeam() {
    return (
        // start of team area
        <div className="mb-6 pb-4 px-6 sm:px-9">
                <h2 className="font-bold text-blue-900  text-4xl mb-4 mt-20">Our Team</h2>
                <p className="font-normal text-gray-700 text-xl mb-14">Having more experienced members and mentors that have devoted to the Vision</p>
                <div className=" mt-6 grid gap-y-6 md:grid-cols-4 md:gap-x-10  sm:grid-cols-2 sm:gap-10 ">
                {
                    data.map(mentor => (
                        <div key={mentor.id} className="flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <Image 
                                            src={mentor.courseImg} alt={mentor.altText} 
                                            width={250}
                                            height={250}
                                            quality={100}
                                            className="flex justify-center"
                                        />
                                </div>
                                <div className="flex flex-col justify-center p-2">
                                    <h3 className="text-xl text-gray-700 font-medium flex justify-center mb-0">{mentor.name}</h3>
                                    <h3 className="text-medium font-semibold flex text-blue-900 justify-center mt-2">{mentor.role}</h3>
                                    <ul className=" flex justify-center w-full mt-2">
                                        <li className="text-blue-600"> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillLinkedin className="mr-1" ></AiFillLinkedin>
                                                </a>
                                            </Link> 
                                        </li>
                                        <li className="text-light-blue"> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillTwitterSquare className="mr-1" ></AiFillTwitterSquare>
                                                </a>
                                            </Link> 
                                        </li>
                                        <li className="text-blue-900 "> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillFacebook className="mr-1"></AiFillFacebook>
                                                </a>
                                            </Link> 
                                        </li>
                                        <li className="text-red-400 "> 
                                            <Link href="#">
                                            <a className="text-2xl">
                                                <AiFillInstagram className="mr-1"></AiFillInstagram>
                                            </a>    
                                            </Link> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    ))
                }
            </div>
        </div>
        // end of team area
    )
}