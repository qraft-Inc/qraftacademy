import React, { HTMLAttributes } from 'react'
import cn from "classnames"
import Link from "next/link"

const Navigation = () => {
  const linkStyle: HTMLAttributes<HTMLDivElement>["className"] = "font-heading uppercase font-bold hover:scale-9"
  const boxStyle: HTMLAttributes<HTMLDivElement>["className"] = "bg-white text-primary-400  h-[6.2vh]  flex items-center justify-center border-primary-400 border  md:border-3 cursor-pointer transition-all ease-in-out duration-30"
  return (
    <nav className={cn("grid grid-cols-3 md:grid-cols-7 grid-rows-2 md:grid-rows-1 ", "border-primary-400/40   border-[0.5px] md:border-1")}>
      <div className={cn("md:col-span-2", boxStyle, "justify-start font-extrabold")}>QRAFT</div>
      <Link href="https://labs.qraftacademy.com/" className={cn("md:col-start-3", boxStyle, linkStyle)}>research</Link>
      <div className={cn("md:col-start-4", boxStyle, linkStyle)}>programs</div>
      <Link href="https://classroom.qraftacademy.com/"  className={cn("md:col-start-5", boxStyle, linkStyle)}>courses</Link>
      <div className={cn("md:col-start-6", boxStyle, linkStyle)}>about</div>
      <div className={cn("md:col-start-7", boxStyle, linkStyle, "bg-primary-200  text-white")}>login</div>
    </nav>
  )
}

export default Navigation


