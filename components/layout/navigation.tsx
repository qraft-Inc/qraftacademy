import React, { HTMLAttributes } from 'react'
import cn from "classnames"
import Link from "next/link"

const Navigation = () => {
  const linkStyle: HTMLAttributes<HTMLDivElement>["className"] = "font-heading uppercase font-bold hover:scale-9  transition-colors  relative group"
  const boxStyle: HTMLAttributes<HTMLDivElement>["className"] = "bg-white text-primary-400  h-[6.2vh]  flex items-center justify-center border-primary-400 border  md:border-3 cursor-pointer transition-all ease-in-out duration-30"
  return (
    <nav className={cn("grid grid-cols-3 md:grid-cols-7 grid-rows-2 md:grid-rows-1 ", "border-primary-400/40   border-[0.5px] md:border-1")}>
      <div className={cn("md:col-span-2", boxStyle, "justify-start font-extrabold")}>QRAFT</div>
      <Link className={cn("md:col-start-3", boxStyle, linkStyle)} href="https://labs.qraftacademy.com/">r&d

        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
      </Link>
      <div className={cn("md:col-start-4", boxStyle, linkStyle)}>programs
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />

      </div>
      <Link className={cn("md:col-start-5", boxStyle, linkStyle)} href="https://classroom.qraftacademy.com/">courses
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />

      </Link>
      <div className={cn("md:col-start-6", boxStyle, linkStyle)}>about
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />

      </div>
      <div className={cn("md:col-start-7 bg-primary-200 ", boxStyle, linkStyle, " text-white")}>login</div>
    </nav>
  )
}

export default Navigation


