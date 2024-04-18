
import React from 'react'
import CourseCard from '../cards/course-card'

const Courses = () => {
    return (
        <section className='container px-4 mx-auto my-28'>
            <h1 className="text-lg  tracking-wider  font-bold lg:text-xl mb-4">Available Courses.</h1>
            <div className="flex flex-wrap items-center">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </section>
    )
}

export default Courses