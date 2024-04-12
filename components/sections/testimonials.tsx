import React from 'react'
import TestimonialCard from '../cards/testimonial-card'

const Testimonials = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between mx-4 '>
        <TestimonialCard />
        <TestimonialCard />
    </div>
  )
}

export default Testimonials