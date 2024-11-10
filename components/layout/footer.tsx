import Image from 'next/image'
import React from 'react'

const socialLinks = [
    { name: '— LinkedIn', href: '#' },
    { name: '— Twitter', href: '#' },
    { name: '— Facebook', href: '#' },
    { name: '— Instagram', href: '#' },
    { name: '— YouTube', href: '#' },
];

const Footer = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-5 md:grid-rows-5  md:gap-1 h-[80vh] sm:h-[40vh]">
            <div className="row-span-2 md:col-span-2 md:row-span-5 bg-primary-300 flex items-center ">
                <ul className=' ml-10'>
                    {socialLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.name}
                            rel="noopener" target='_blank'>
                            <li className="hover:translate-x-2 transition-all ease-in-out duration-30 cursor-pointer hover:text-primary-100">{link.name}</li>
                        </a>))}
                </ul>
            </div>
            <figure className="row-start-3 md:col-span-3 md:row-span-2 md:col-start-3 overflow-hidden"><Image alt="gradient" className='object-cover object-bottom w-full' height={1000} src="/images/gradient.jpeg" width={1000} /></figure>
            <div className="row-start-4 md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-3 pl-4">
                <h1 className='font-heading font-bold  text-2xl'><span className='mr-2'>{new Date().getFullYear()}</span>QRAFT</h1>
                <p className="text-xs font-light">&copy; All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
