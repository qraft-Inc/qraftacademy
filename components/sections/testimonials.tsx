import React from 'react'
import TestimonialCard from '../cards/testimonial-card'

const Testimonials = () => {
  return (
    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4'>
      <TestimonialCard />
      <TestimonialCard className="row-start-2 md:row-start-1" />
    </div>
  )
}

export default Testimonials