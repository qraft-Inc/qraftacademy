import Image from "next/image";
import Link from "next/link";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";

// data to be displayed on each mentor card
const data = [
    {
        id: 1,
        courseImg: "/img/Andrew Tugume.jpeg",
        name: "Andrew Tugume",
        role: "Software Developer",
        altText: "Andrew Tugume - Software Developer"
    },
    {
        id: 2,
        courseImg: "/img/Rachel.jpeg",
        name: "Recheal Ainembabazi",
        role: "Digital Marketer",
        altText: "Recheal Ainembabazi - Digital Marketer"
    },
    {
        id: 3,
        courseImg: "/img/pic.png",
        name: "Samuel Mabonga",
        role: "UI/UX Designer",
        altText: "Samuel Mabonga - UI/UX Designer"
    }
]

export default function CourseList() {
    return (
        <div className="mb-6 pb-8 px-0 pt-0">
                <h2 className="font-medium text-blue-900 text-xl">Mentors</h2>
                <div className=" mt-6 grid gap-y-6 md:grid-cols-3 md:gap-x-10  sm:grid-cols-2 sm:gap-10 ">
                {
                    data.map(mentor => (
                        <div key={mentor.id} className="flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <Image 
                                            src={mentor.courseImg} alt={mentor.altText} 
                                            width={90}
                                            height={90}
                                            quality={100}
                                            className="flex justify-center"
                                        />
                                </div>
                                <div className="flex flex-col justify-center p-2">
                                    <h3 className="text-md font-medium flex justify-center mb-0">{mentor.name}</h3>
                                    <h3 className="text-sm uppercase flex justify-center">{mentor.role}</h3>
                                    <ul className="text-light-blue flex justify-center w-full">
                                        <li className=""> 
                                            <Link href="#"> 
                                                <a>
                                                    <AiFillTwitterSquare className="mr-1" ></AiFillTwitterSquare>
                                                </a>
                                            </Link> 
                                        </li>
                                        <li> 
                                            <Link href="#"> 
                                                <a>
                                                    <AiFillFacebook className="mr-1"></AiFillFacebook>
                                                </a>
                                            </Link> 
                                        </li>
                                        <li> 
                                            <Link href="#">
                                            <a>
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
    )
}