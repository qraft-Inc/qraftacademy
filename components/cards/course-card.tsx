import React from 'react'
import cn from "classnames";
import Image from "next/image"


const CourseCard = ({ className, name, desc, image }: { className?: string, name: string, desc: string, image: string }) => {
    return (
        <div className="flex w-full mb-8 md:w-1/2  lg:w-1/4 lg:mb-0 mb-8">
            <figure className="flex flex-col w-full md:w-auto">
                <Image src={image} height={500} width={500} loading="lazy" alt={name} className="object-cover  border-2 object-center w-full h-48 dark:bg-gray-500"></Image>
                <div className="flex flex-col justify-between p-1 space-y-8  border-2">
                    <div className="space-y-2">
                        <h2 className=" font-semibold tracking-wide">{name}</h2>
                        <p className="text-primary-100 text-sm font-light ">{desc}</p>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default CourseCard

