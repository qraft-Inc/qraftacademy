import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

// data to be displayed on each mentor card
const data = [
    {
        id: 1,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172203/qraftstore/Andrew_Tugume_nq4evy.jpg",
        name: "Andrew Tugume",
        role: "Product Manager - Team Lead",
        altText: "Andrew - Team Lead"
    },
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172208/qraftstore/Ainembabazi_Recheal_ra1tj4.jpg",
        name: "Recheal Ainembabazi",
        role: "Personal & Professional Development",
        altText: "Recheal - Personal & Professional Development"
    },
    {
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172204/qraftstore/Denny_Wong_cpczks.png",
        name: "Denny Wong",
        role: "Global Partner & Advisor",
        altText: "Denny - Global Partner & Advisor"
    },
    {
        id: 4,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153415/qraftstore/Arnold_Muwanguzi_mt2pti.jpg",
        name: "Arnold Muwanguzi",
        role: "Talent Developer - Visual Art",
        altText: "Arnold - Talent Developer "
    },
    {
        id: 5,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153413/qraftstore/Bill_Kabanga_wwvzpg.jpg",
        name: "Bill Kabanga",
        role: "Talent developer - Software Development",
        altText: "Bill - Talent developer"
    },
    {
        id: 6,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153413/qraftstore/mathew_murungi_p2kw7w.jpg",
        name: "Mathew Murungi ",
        role: "Talent developer - Product Design",
        altText: "Mathew - Product Design"
    },
    {
        id: 7,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153782/qraftstore/TUCMNMYKD-UUSCBRVE2-dd26f37d103e-512_orbiv4.jpg",
        name: "Edina Nakanjako ",
        role: "Talent developer - Software Development",
        altText: "Edina - Talent developer"
    },
    {
        id: 8,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644427177/qraftstore/peter_dz3vro.jpg",
        name: "Peter Ojwang",
        role: "Mentor & Trainer - Digital Marketing",
        altText: "Peter - Mentor & Trainer"
    },
    {
        id: 9,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Samuel_Mabonga_UX-UI_Designer_uiwc2q.jpg",
        name: "Samuel Mabonga",
        role: "Mentor & Trainer - UI/UX Design",
        altText: "Samuel - Mentor & Trainer"
    },
    {
        id: 10,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172208/qraftstore/phillip_Mambo_Developer_wpw8ez.jpg",
        name: "Phillip Mambo",
        role: "Mentor & Trainer - Software Development",
        altText: "Phillip - Mentor & Trainer"
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
                                    <h3 className="text-sm flex justify-center">{mentor.role}</h3>
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