import Image from 'next/image';
import GetStarted from '../GetStarted';
import Rating from '../Rating';
// import Link from 'next/link';

// data to be displayed into each course card
const data = [

    {
        id: 4,
        courseImg: "https://cdn.pixabay.com/photo/2016/08/05/16/07/african-1572535_960_720.jpg",
        courseTitle: "Data-driven culture",
        text1: "Concept",
        // text2: "18.April.2022",
        text3: "Digital transformation",
        altText: "Data-driven culture",
        url: "/datascientists"
    },
    {
        id: 5,
        courseImg: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        courseTitle: "M & E, AI ",
        text1: "Concept",
        // text2: "18.April.2022",
        text3: "Using AI in M&E",
        altText: "No Coding Data Science",
        url: "/datascientists"
    },
    {
        id: 6,
        courseImg: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        courseTitle: "Data driven Marketing",
        text1: "Concept",
        // text2: "18.April.2022",
        text3: "Marketing",
        altText: "Data driven Marketing",
        url: "/datascientists"
    }

]

export default function CourseList(props) {
    return (
        <div className="mb-1  py-8 px-4 pt-0">
            <h2 className="m-8 font-medium text-blue-900 text-xl">Course List</h2>
            <div className="mt-4 grid gap-y-6 md:gap-x-1 xl:grid-cols-3 sm:grid-cols-2 sm:gap-10">
                {data.map(course => (
                    <div key={course.id} className=" flex justify-center xl:justify-even">
                        <div className=" rounded-lg shadow-2xl max-w-sm xl:max-w-ls hover:-translate-y-2 transform transition-500" >
                            <Image
                                src={course.courseImg}
                                alt={course.altText}
                                width={700}
                                height={500}
                                quality={100}
                                className="rounded-t-lg"
                            />
                            <div className="p-6 pt-0">

                                <h3 className="text-lg font-semibold mb-4 mt-2">{course.courseTitle}</h3>

                                <div className="flex justify-between">
                                    <span className="text-lg font-sm">{course.text1}</span>
                                    <span className="text-lg font-sm">{course.text2}</span>
                                </div>

                                <p className="text-lg font-sm mb-2">{course.text3}</p>

                                <Rating />

                                <div className="flex justify-center my-4 mt-8">
                                    <GetStarted props={course.url} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
