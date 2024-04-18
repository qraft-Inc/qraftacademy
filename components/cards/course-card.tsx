import React from 'react'
import cn from "classnames";
import Image from "next/image"


const CourseCard = ({ className }: { className?: string }) => {
    return (
        <div className="flex w-full mb-8 md:w-1/2  lg:w-1/4 lg:mb-0 mb-8">
            <figure className="flex flex-col w-full md:w-auto">
                <Image src="/images/gradient.jpeg" height={500} width={500} loading="lazy" alt="ladies discusing qraft" className="object-cover border border-2 object-center w-full h-48 dark:bg-gray-500"></Image>
                <div className="flex flex-col justify-between p-1 space-y-8  border border-2">
                    <div className="space-y-2">
                        <h2 className=" font-semibold tracking-wide">Product Design Apprenticeship</h2>
                        <p className="text-primary-100 text-sm font-light ">01 Sept 2023 - 01 Oct 2023</p>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default CourseCard

