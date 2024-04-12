import React from 'react'
import cn from "classnames";
import Image from "next/image"


const CourseCard = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex flex-col items-center justify-center border-white border", className)}>
            <figure className="relative  overflow-hidden border-white border-2 h-20">
                <Image src="/images/gradient.jpeg" alt="ladies discusing qraft" className="object-cover" height={500} width={500} loading="lazy" />
            </figure>
            <div className="border-t border-white pl-3 flex items-start flex-col justify-between">
                <p className='text-xs'>Product Design Apprenticeship</p>
                <p className='text-xs text-primary-100'>01 Sept 2023 - 01 Oct 2023</p>
            </div>
        </div>
    )
}

export default CourseCard