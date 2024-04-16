
import React from 'react'
import CourseCard from '../cards/course-card'

const Courses = () => {
    return (
        <section className='container px-4 mx-auto'>
            <h1 className="text-4xl  tracking-wider  font-bold lg:text-5x mb-2">Available Courses.</h1>
            <div className="flex flex-wrap items-stretch -mx-4">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </section>
    )
}

export default Courses