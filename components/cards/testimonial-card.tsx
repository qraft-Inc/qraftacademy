import React from 'react'
import { Quote } from "lucide-react"

const TestimonialCard = () => {
  return (
    <div className="">
      <Quote className='mb-2 text-primary-100' />
      <div className="pl-4">
        <p className="text-gray-100">
          Qraft Academy transformed my tech career. The training, mentorship, and real-world experience helped me land my dream job.
        </p>
        <div className='text-sm'>
          <p className=" font-semibold">John Doe</p>
          <p className="text-primary-200">CEO, Company Name</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard