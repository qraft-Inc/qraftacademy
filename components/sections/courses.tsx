
import React from 'react'
import CourseCard from '../cards/course-card'

const programs = [

    {
        name: "Workmasters",
        image: "https://res.cloudinary.com/dwa3soopc/image/upload/v1717414050/QraftAcademy/WorkMasterslandscape.jpg",
        date: "Volunteers Program"
    },
    {
        name: "Workmasters",
        image: "https://res.cloudinary.com/dwa3soopc/image/upload/v1717414050/QraftAcademy/WorkMasterslandscape.jpg",
        date: "Apprentices Program"
    },
    {
        name: "Workmasters",
        image: "https://res.cloudinary.com/dwa3soopc/image/upload/v1717414050/QraftAcademy/WorkMasterslandscape.jpg",
        date: "Employees Program"
    },
    {
        name: "Freelancers Lounge",
        image: "https://res.cloudinary.com/dwa3soopc/image/upload/v1717412385/FLX_dukq7i.jpg",
        date: "Independent Workers"
    },
]
const Courses = () => {
    return (
        <section className='container px-4 mx-auto my-28'>
            <h1 className="text-lg  tracking-wider  font-bold lg:text-xl mb-4">Available Programs.</h1>
            <div className="flex flex-wrap items-center">
                {programs.map((program) => <CourseCard desc={program.date} image={program.image} key={program.name} name={program.name} />)}

            </div>
        </section>
    )
}

export default Courses