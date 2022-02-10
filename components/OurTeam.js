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
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644434332/qraftstore/WhatsApp_Image_2022-02-09_at_10.14.23_PM_r5u2cq.jpg",
        name: "Susan Akantambira",
        role: "Finance",
        altText: "Susan - Finance"
    },
    {
        id: 4,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153416/qraftstore/Ronald_Bataringaya_bgwwj7.jpg",
        name: "Ronald Bataringaya ",
        role: "Management & Operations",
        altText: "Ronald - Management & Operations"
    },
    {
        id: 5,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153415/qraftstore/Arnold_Muwanguzi_mt2pti.jpg",
        name: "Arnold Muwanguzi",
        role: "Talent Developer - Visual Art",
        altText: "Arnold - Talent Developer "
    },
    {
        id: 6,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153413/qraftstore/Bill_Kabanga_wwvzpg.jpg",
        name: "Bill Kabanga",
        role: "Talent developer - Software Development",
        altText: "Bill - Talent developer"
    },
    {
        id: 7,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153413/qraftstore/mathew_murungi_p2kw7w.jpg",
        name: "Mathew Murungi ",
        role: "Talent developer - Product Design",
        altText: "Mathew - Product Design"
    },
    {
        id: 8,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644153782/qraftstore/TUCMNMYKD-UUSCBRVE2-dd26f37d103e-512_orbiv4.jpg",
        name: "Edina Nakanjako ",
        role: "Talent developer - Software Development",
        altText: "Edina - Talent developer"
    },
    {
        id: 9,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644157368/qraftstore/igxjeiazjt5oiv8ejwwn.png",
        name: "Joshua Makubuya ",
        role: "Graphics Designer",
        altText: "Joshua - Graphics Designer"
    },
    {
        id: 10,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/Juliyana_woldeab_pwoiyd.jpg",
        name: "Juliyana Woldeab",
        role: "Digital Marketer",
        altText: "Juliyana - Digital Marketing"
    },
    {
        id: 11,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Samuel_Mabonga_UX-UI_Designer_uiwc2q.jpg",
        name: "Samuel Mabonga",
        role: "UX/UI Designer",
        altText: "Samuel - UX/UI"
    },
    {
        id: 12,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/Precious_Kasasira_Developer_mqxjdy.jpg",
        name: "Precious Kasasira",
        role: "Software Developer",
        altText: "Precious - Developer"
    },
    {
        id: 13,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172208/qraftstore/phillip_Mambo_Developer_wpw8ez.jpg",
        name: "Phillip Mambo",
        role: "Software Developer",
        altText: "Phillip - Developer"
    },
    {
        id: 14,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172204/qraftstore/Anold_Kalema_Developer_bwknkb.jpg",
        name: "Anold Kalema",
        role: "Software Developer",
        altText: "Anold - Developer"
    },
    {
        id: 15,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172206/qraftstore/Joshua_Kasasira_Developer_ehgije.jpg",
        name: "Joshua Kasasira",
        role: "Software Developer",
        altText: "Joshua Kasasira - Developer"
    },
    {
        id: 16,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Shakira_Ndagire_Developer_pmgrge.jpg",
        name: "Mwaka Ceaser.",
        role: "Software Developer",
        altText: "Shakira Ndagire - Developer"
    },
    {
        id: 17,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1642172211/qraftstore/Stuart_Stuart_Developer_vmciej.jpg",
        name: "Stuart Kalema",
        role: "Software Developer",
        altText: "Stuart - Developer"
    },
    {
        id: 18,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644157368/qraftstore/igxjeiazjt5oiv8ejwwn.png",
        name: "Ceaser Mwaka",
        role: "Talent Developer - Visual Art",
        altText: "Ceaser - Visual Art"
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
                                        <li className="text-blue-600 "> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillLinkedin className="mr-1" />
                                                </a>
                                            </Link> 
                                        </li>
                                        <li className="text-light-blue"> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillTwitterSquare className="mr-1" />
                                                </a>
                                            </Link> 
                                        </li>
                                        <li className="text-blue-900 "> 
                                            <Link href="#"> 
                                                <a className="text-2xl">
                                                    <AiFillFacebook className="mr-1"/>
                                                </a>
                                            </Link> 
                                        </li>
                                        <li className="text-red-400 "> 
                                            <Link href="#">
                                            <a className="text-2xl">
                                                <AiFillInstagram className="mr-1"/>
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