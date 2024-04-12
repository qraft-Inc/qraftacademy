
import React from 'react'
import CourseCard from '../cards/course-card'

const Courses = () => {
    return (
        <section className='mx-8'>
            <h1>Available Courses</h1>
            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-1">
                <CourseCard />
                <CourseCard />
                <CourseCard className="md:row-start-2 lg:row-start-0" />
                <CourseCard className="md:row-start-2 lg:row-start-0" />
            </div>
        </section>
    )
}

export default Courses