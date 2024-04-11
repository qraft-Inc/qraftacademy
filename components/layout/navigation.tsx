import React, { HTMLAttributes } from 'react'
import cn from "classnames"

const Navigation = () => {
  const linkStyle: HTMLAttributes<HTMLDivElement>["className"] = "font-heading uppercase font-bold hover:scale-9"
  const boxStyle: HTMLAttributes<HTMLDivElement>["className"] = "bg-white text-primary-400  h-[6.2vh]  flex items-center justify-center border-primary-400 border border-3 cursor-pointer transition-all ease-in-out duration-30"
  return (
    <nav className={cn("grid grid-cols-3 md:grid-cols-7 grid-rows-5 ", "border-primary-400")}>
      <div className={cn("md:col-span-2", boxStyle, "justify-start")}>1</div>
      <div className={cn("md:col-start-3", boxStyle, linkStyle)}>research</div>
      <div className={cn("md:col-start-4", boxStyle, linkStyle)}>technologists</div>
      <div className={cn("md:col-start-5", boxStyle, linkStyle)}>entreprenuers</div>
      <div className={cn("md:col-start-6", boxStyle, linkStyle)}>about</div>
      <div className={cn("md:col-start-7", boxStyle, linkStyle, "bg-primary-100 text-white")}>login</div>
    </nav>
  )
}

export default Navigation


