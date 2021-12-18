import Image from 'next/image';
import GetStarted from './GetStarted';
import Rating from './Rating';

// data to be displayed into each course card
const data = [
    {
        id: 1,
        courseImg: "/img/img1.png",
        text1: "Some text 1",
        text2: "Some text 2",
        courseTitle: "Software Development",
        text3: "Some text 3",
        altText: "Software Developers"
    },
    {
        id: 2,
        courseImg: "/img/img2.png",
        text1: "Some text 4",
        text2: "Some text 5",
        courseTitle: "Digital Marketing",
        text3: "Some text 6",
        altText: "Digital Marketeers"
    },
    {
        id: 3,
        courseImg: "/img/img1.png",
        text1: "Some text 7",
        text2: "Some text 8",
        courseTitle: "UI/UX Design",
        text3: "Some text 9",
        altText: "UI/UX designers"
    }
]

export default function CourseList() {
    return (
            <div className="mb-6 py-8 px-0 pt-0">
                <h2 className="font-medium text-blue-900 text-xl">Course List</h2>
                <div className="mt-4 grid gap-y-6 md:gap-x-10 xl:grid-cols-3 sm:grid-cols-2 sm:gap-10">
                    {data.map(course => (
                            <div key={course.id} className=" flex justify-center xl:justify-between">
                                <div className=" rounded-lg shadow-2xl max-w-sm hover:-translate-y-2 transform transition-500" >
                                    <Image 
                                        src={course.courseImg}
                                        alt={course.altText}
                                        width={400}
                                        height={400}
                                        quality={100}
                                        className="rounded-t-lg"
                                    />
                                    <div className="p-6 pt-0">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-sm">{course.text1}</span>
                                            <span className="text-lg font-sm">{course.text2}</span>
                                        </div>
                    
                                        <h3 className="text-lg font-medium mb-4 mt-2">{course.courseTitle}</h3>
                    
                                        <p className="text-lg font-sm mb-2">{course.text3}</p>
                    
                                        <Rating />
                    
                                        <div className="flex justify-center my-4 mt-8">
                                            <GetStarted />
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
