import React from 'react'
import cn from "classnames";
import Image from "next/image"


const CourseCard = ({ className }: { className?: string }) => {
    return (
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <Image src="/images/gradient.jpeg" height={500} width={500} loading="lazy" alt="ladies discusing qraft" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"></Image>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Product Design Apprenticeship</h2>
                        <p className="dark:text-gray-800">01 Sept 2023 - 01 Oct 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard

