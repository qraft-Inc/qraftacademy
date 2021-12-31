import Link from 'next/link'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import {FaFax} from 'react-icons/fa'
import {RiPhoneFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'

export default function AddressSection() {
  return (
    <div className="bg-blue-900 max-h-min mb-10 text-white lg:w-1/2">
      <div className="mx-14 my-14">
          <h3 className="text-4xl font-bold mb-10 text-white">You Can Contact With Us</h3>
          <div className="w-11/12">
              <p className="mb-12">We are at your service; just one click away you get more information</p>
              <div className="mb-10">
                    <div className="border-t w-10/12 px-3 py-5 flex">
                        <a className="mr-4 text-lg flex justify-center items-center">
                            <FaFax></FaFax>
                        </a>
                        Address : Ntinda-Kampala
                    </div>
                    <div className="border-t w-10/12 px-3 py-5 flex">
                        <a className="mr-4 text-lg flex justify-center items-center">
                            <RiPhoneFill></RiPhoneFill>    
                        </a>
                        Phone : +256758709980
                    </div>
                    <div className="border-t w-10/12 px-3 py-5 flex">
                        <a className="mr-4 text-lg flex justify-center items-center">
                            <MdEmail></MdEmail>    
                        </a>
                        Web : qraftacademy@gmail.com
                    </div>
              </div>
          </div>
          <div>
              <h4 className="text-3xl font-bold text-white mb-5">Also Can Find Us</h4>
              <div className="flex justify-between w-60">
                <Link href="#">
                    <a className=" rounded-full p-2 text-xl border border-white">
                        <AiFillLinkedin></AiFillLinkedin>
                    </a>
                </Link>
                <Link href="#">
                    <a className=" rounded-full p-2 text-xl border border-white">
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                    </a>
                </Link>
                <Link href="#">
                    <a className=" rounded-full p-2 text-xl border border-white">
                    <AiFillFacebook></AiFillFacebook>
                    </a>
                </Link>
                <Link href="#">
                    <a className=" rounded-full p-2 text-xl border border-white">
                    <AiFillInstagram></AiFillInstagram>
                    </a>
                </Link>
              </div>
          </div>
      </div>
    </div>
  )
}
