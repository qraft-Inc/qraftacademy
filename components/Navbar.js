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
              <Link href="https://www.qraftacademy.com">
                <a>
                  <Image
                    src="https://res.cloudinary.com/filipe256/image/upload/v1641806795/qraftstore/Artboard_4_mpr4mh_yrk1sm.png"
                    alt="Qraft Academy"
                    layout="fixed"
                    width={95}
                    height={80}
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* primary nav */}
          <div className="flex space-x-10 items-center">
            <div className="hidden lg:flex space-x-10">
              <Link href="https://www.qraftacademy.com">
                <a className="hover:border-b-2 border-blue-400 py-1 ">Home</a>
              </Link>
              <Link href="https://www.qraftacademy.com/careers">
                <a className="hover:border-b-2 border-blue-400 py-1">Discover Talent</a>
              </Link>
              <Link href="https://www.qraftacademy.com/about">
                <a className="hover:border-b-2 border-blue-400 py-1">
                  About Us
                </a>
              </Link>
              <Link href="https://www.qraftacademy.com/contact">
                <a className="hover:border-b-2 border-blue-400 py-1">
                  Contact Us
                </a>
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
          {/* <div className="flex justify-around">
                                <Link href="https://www.dashboard.qraftacademy.com/dashboard"><a><AiFillDashboard size="1.5rem" /></a></Link>
                                <Link href="https://www.dashboard.qraftacademy.com/dashboard"><a><IoIosChatbubbles size="1.5rem" /></a></Link>
                                <Link href="https://www.dashboard.qraftacademy.com/dashboard"><a><MdNotifications size="1.5rem" /></a></Link>
                            </div> */}

          <Link href="https://www.qraftacademy.com">
            <a className="border-b">Home</a>
          </Link>
          <Link href="https://www.qraftacademy.com/about">
            <a className="border-b">About Us</a>
          </Link>
          {/* <Link href="https://www.qraftacademy.com/tracks"><a className="border-b">Tracks</a></Link> */}
          <Link href="https://www.qraftacademy.com/careers">
            <a className="border-b">Careers</a>
          </Link>
          <Link href="https://www.qraftacademy.com/contact">
            <a className="border-b">Contact Us</a>
          </Link>
        </div>
      )}
    </nav>
  );
}
