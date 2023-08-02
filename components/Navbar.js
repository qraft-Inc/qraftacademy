import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  // mobile view menu
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    //close mobile menu on click
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuVisibility(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav
      ref={menuRef}
      className="bg-black text-white fixed left-0 right-0 top-0 z-50 h-20"
    >
      <div className="px-8 mx-auto">
        <div className="flex justify-between">
          {/* logo */}
          <div className="flex items-center">
            <div>
              <Link href="/">

                <Image
                  src="https://res.cloudinary.com/dwa3soopc/image/upload/v1678291137/qraft%20/qraftacademy_udltnt.png"
                  alt="Qraft Academy"
                  layout="fixed"
                  width={95}
                  height={80}
                />

              </Link>
            </div>
          </div>
          {/* primary nav */}
          <div className="flex space-x-10 items-center">
            <div className="hidden lg:flex space-x-10">
              <Link href="/" className="hover:border-b-2 border-blue-400 py-1 ">
                Home
              </Link>
              <Link href="/technologists" className="hover:border-b-2 border-blue-400 py-1">
              Technologists
              </Link>
              <Link href="/entrepreneurs" className="hover:border-b-2 border-blue-400 py-1">
              Innovators
              </Link>

              <Link href="/careers" className="hover:border-b-2 border-blue-400 py-1">
                  Discover Talent
                 
              </Link>
              <Link href="/about" className="hover:border-b-2 border-blue-400 py-1">
                
                  About Us
                
              </Link>
              <Link href="/contact" className="hover:border-b-2 border-blue-400 py-1">
                
                  Contact Us
                
              </Link>
              <Link href="https://dashboard-qraftacademy.netlify.app/" legacyBehavior>
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 border-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </Link>
            </div>

            {/* toggle button */}
            <div className="lg:hidden flex items-center ">
              <button
                className="toggle-menu-btn"
                onClick={() => setMenuVisibility(!isMenuVisible)}
              >
                <HiOutlineMenuAlt2 size="2.5rem" className="hover:border" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuVisible && (
        <div
          className="lg:hidden flex flex-col px-4 space-y-6 pb-4 pt-4 bg-black"
          onClick={() => setMenuVisibility(!isMenuVisible)}
        >
          <Link href="/" className="border-b">
            Home
          </Link>
          <Link href="/about" className="border-b">
            About Us
          </Link>
          <Link href="/careers" className="border-b">
            Careers
          </Link>
          <Link href="/contact" className="border-b">
            Contact Us
          </Link>
          <Link href="https://dashboard-qraftacademy.netlify.app/" legacyBehavior>
            <button
              type="button"
              className="w-24 py-2 border-2 border-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
