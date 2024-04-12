import React from 'react'
import { Quote } from "lucide-react"
import cn from "classnames"

const TestimonialCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("max-w-md", className)}>
      <Quote size={24} className='mb-2 text-primary-300 rotate-[180deg]' />
      <div className="pl-4">
        <p className="text-gray-100 text-3xl mb-2
        ">
          Qraft Academy transformed my tech career. The training, mentorship, and real-world experience helped me land my dream job.
        </p>
        <div className='text-sm'>
          <p className="font-semibold">John Doe</p>
          <p className="text-primary-100">CEO, Company Name</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard