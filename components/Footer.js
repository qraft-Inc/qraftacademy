import Link from "next/link"
import Image from "next/image"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"


const Footer = () => {
  return (
    <footer className="bg-black bottom-0 left-0 right-0 text-xs">
      
        <ul className="grid grid-cols-3 p-8 md:grid-cols-6 gap-5 md:gap-0">
          <li className="flex items-center">
            <Link href="/"><a><Image src="https://res.cloudinary.com/filipe256/image/upload/v1642172208/qraftstore/logo_l3znkx.png" width={90} height={62} alt=""/></a></Link>
          </li>

          <li className="flex flex-col">
            <h2 className="text-blue-400 ">Learners</h2>
            <Link href="/trackdetails"><a className="text-white">Developers</a></Link>
            <Link href="/trackdetails"><a className="text-white">Visual Artists</a></Link>
            <Link href="/trackdetails"><a className="text-white">UI/UX Designers</a></Link>
          </li>

          <li className="flex flex-col">
            <h2 className="text-blue-400 ">Course Creators</h2>
            <Link href="/trackdetails"><a className="text-white">Developers</a></Link>
            <Link href="/trackdetails"><a className="text-white">Visual Artists</a></Link>
            <Link href="/trackdetails"><a className="text-white">UI/UX Designers</a></Link>
          </li>

          <li className="flex flex-col">
            <h2 className="text-blue-400">Small Print</h2>
            <Link href="/trackdetails"><a className="text-white">Developers</a></Link>
            <Link href="/trackdetails"><a className="text-white">Visual Artists</a></Link>
            <Link href="/trackdetails"><a className="text-white">UI/UX Designers</a></Link>
          </li>

          <li className="flex flex-col">
            <h2 className="text-blue-400 ">Account</h2>
            <Link href="/trackdetails"><a className="text-white">Developers</a></Link>
            <Link href="/trackdetails"><a className="text-white">Visual Artists</a></Link>
            <Link href="/trackdetails"><a className="text-white">UI/UX Designers</a></Link>
          </li>

          <li className="flex flex-col">
            <h2 className="text-blue-400 ">Lets Connect</h2>
            <Link href="/dashboard"><a className="text-white"><AiFillLinkedin className="inline mr-1"/>Linkedin</a></Link>
            <Link href="/dashboard"><a className="text-white"><AiFillTwitterSquare className="inline mr-1"/>Twitter</a></Link>
            <Link href="/dashboard"><a className="text-white"><AiFillFacebook className="inline mr-1"/>Facebook</a></Link>
            <Link href="/dashboard"><a className="text-white"><AiFillInstagram className="inline mr-1"/>Instagram</a></Link>
            <Link href="/dashboard"><a className="text-white"><AiFillYoutube className="inline mr-1"/>Youtube</a></Link>
          </li>

        </ul>
        <div className="text-center">
          <span className="block text-white">&copy; 2021 Qraftacademy. All Rights Reserved</span>
        </div>

    </footer>
  );
}

export default Footer;

