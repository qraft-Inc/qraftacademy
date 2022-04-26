import Image from 'next/image';
import GetStarted from './GetStarted';
import Rating from './Rating';
import Link from 'next/link';

// data to be displayed into each course card
const data = [
    {
        id: 1,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1644905941/qraftstore/software_development_ci3tns.jpg",
        courseTitle: "Software Development",
        text1: "Start",
        text2: "04.April.2022",
        text3: "3 Months",
        altText: "Software Developers",
        url: "/developers"
    },
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1645064225/qraftstore/Digital_Marketing_dbkrx8.jpg",
        courseTitle: "Digital Marketing",
        text1: "Start",
        text2: "11.April.2022",
        text3: "3 Months",
        altText: "Digital Marketers",
        url: "/marketing"
    },
    {
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1645064225/qraftstore/Product_Design_utd76i.jpg",
        courseTitle: "UI/UX Design",
        text1: "Start",
        text2: "18.April.2022",
        text3: "3 Months",
        altText: "UI/UX designers",
        url: "/designers"
    },
    {
        id: 4,
        courseImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.qlik.com%2Fblog%2Fsolving-the-data-literacy-gap&psig=AOvVaw2VVdH5yi05064suPDQyc8N&ust=1651053537918000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCkz_C7sfcCFQAAAAAdAAAAABAI",
        courseTitle: "Data Literacy",
        text1: "Start",
        text2: "18.April.2022",
        text3: "3 Months",
        altText: "data scientists",
        url: "/datascientists"
    }

]

export default function CourseList(props) {
    return (
        <div className="mb-6 py-8 px-0 pt-0">
            <h2 className="font-medium text-blue-900 text-xl">Course List</h2>
            <div className="mt-4 grid gap-y-6 md:gap-x-10 xl:grid-cols-3 sm:grid-cols-2 sm:gap-10">
                {data.map(course => (
                    <div key={course.id} className=" flex justify-center xl:justify-even">
                        <div className=" rounded-lg shadow-2xl max-w-sm xl:max-w-ls hover:-translate-y-2 transform transition-500" >
                            <Image
                                src={course.courseImg}
                                alt={course.altText}
                                width={500}
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
