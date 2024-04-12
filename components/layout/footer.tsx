import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-3 gap-1 h-[50vh] sm:h-[40vh] gap-1">
            <div className="col-span-5 sm:col-span-2 sm:row-span-3 bg-primary-300 flex items-center ">
                <ul className=' ml-10'>
                    <li className="hover:translate-x-2 transition-all ease-in-out duration-30 cursor-pointer hover:text-primary-100">— Linkedin</li>
                    <li className="hover:translate-x-2 transition-all ease-in-out duration-30 cursor-pointer hover:text-primary-100">— Twitter</li>
                    <li className="hover:translate-x-2 transition-all ease-in-out duration-30 cursor-pointer hover:text-primary-100">— Facebook</li>
                    <li className="hover:translate-x-2 transition-all ease-in-out duration-30 cursor-pointer hover:text-primary-100">— Instagram</li>
                    <li className="hover:translate-x-2 transition-all ease-in-out duration-30 cursor-pointer hover:text-primary-100">— Youtube</li>
                </ul>
            </div>
            <figure className="col-span-5 sm:col-span-3 row-span-2 sm:col-start-3 overflow-hidden"><Image className='object-cover object-bottom' height={1000} width={1000} src="/images/gradient.jpeg" alt="gradient" /></figure>
            <div className="col-span-5 sm:col-span-3 sm:col-start-3 row-start-3 pl-4">
                <h1 className='font-heading font-bold  text-2xl'><span className='mr-2'>{new Date().getFullYear()}</span>QRAFT</h1>
                <p className="text-xs font-light">&copy; All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
