
import React from 'react'
import CourseCard from '../cards/course-card'

const Courses = () => {
    return (
        <section className='mx-8 my-4 '>
            <h1 className="font-bold text-xl mb-2">Available Courses.</h1>
            <div className="flex items-center flex-wrap justify-between">
                <CourseCard />
                <CourseCard />
                <CourseCard  />
                <CourseCard  />
            </div>
        </section>
    )
}

export default Courses