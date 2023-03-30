import Link from "next/link";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black bottom-0 left-0 right-0 text-xs">
      <ul className="grid grid-cols-3 p-8 md:grid-cols-6 gap-5 md:gap-0">
        <li className="flex items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/filipe256/image/upload/v1642172208/qraftstore/logo_l3znkx.png"
              width={90}
              height={62}
              alt=""
            />
          </Link>
        </li>

        <li className="flex flex-col">
          <h2 className="text-blue-400 ">Apprenticeships</h2>
          <Link href="/trackdetails" className="text-white">
            Software Developers
          </Link>
          <Link href="/trackdetails" className="text-white">
            Digital Marketers
          </Link>
          <Link href="/trackdetails" className="text-white">
            UI/UX Designers
          </Link>
        </li>

        <li className="flex flex-col">
          <h2 className="text-blue-400 ">Night School</h2>
          <Link href="/trackdetails" className="text-white">
            Software Engineering
          </Link>
          <Link href="/trackdetails" className="text-white">
            Product Design
          </Link>
          <Link href="/trackdetails" className="text-white">
            Digital Marketing
          </Link>
        </li>

        <li className="flex flex-col">
          <h2 className="text-blue-400">Art And Design</h2>
          <Link href="/trackdetails" className="text-white">
            Visual Art
          </Link>
          <Link href="/trackdetails" className="text-white">
            UI Designs
          </Link>
          <Link href="/trackdetails" className="text-white">
            Photography
          </Link>
        </li>

        <li className="flex flex-col">
          <h2 className="text-blue-400 ">Qraft,Inc.</h2>
          <Link href="/trackdetails" className="text-white">
            Academy
          </Link>
          <Link href="/trackdetails" className="text-white">
            Design
          </Link>
          <Link href="/trackdetails" className="text-white">
            Store
          </Link>
        </li>

        <li className="flex flex-col">
          <h2 className="text-blue-400 ">Lets Connect</h2>
          <Link href="/dashboard" className="text-white">
            <AiFillLinkedin className="inline mr-1" />
            Linkedin
          </Link>
          <Link href="/dashboard" className="text-white">
            <AiFillTwitterSquare className="inline mr-1" />
            Twitter
          </Link>
          <Link href="/dashboard" className="text-white">
            <AiFillFacebook className="inline mr-1" />
            Facebook
          </Link>
          <Link href="/dashboard" className="text-white">
            <AiFillInstagram className="inline mr-1" />
            Instagram
          </Link>
          <Link href="/dashboard" className="text-white">
            <AiFillYoutube className="inline mr-1" />
            Youtube
          </Link>
        </li>
      </ul>
      <div className="text-center py-8">
        <span className="block text-white">
          &copy; {new Date().getFullYear()} Qraftacademy. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
