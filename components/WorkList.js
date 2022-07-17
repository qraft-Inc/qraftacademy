import Image from 'next/image';
import GetStarted from './GetStarted';
import Rating from './Rating';
import Link from 'next/link';

// data to be displayed into each course card
const data = [
    
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1655885737/qraftstore/software_developmen_ooqmhl.jpg",
        courseTitle: "Product Development Apprenticeship",
        text1: "Start",
        text2: "05.September.2022",
        text3: "3 Months",
        altText: "Digital Marketers",
        url: "/marketing"
    },
    {
        id: 3,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1655885737/qraftstore/product_design_nf5mvk.jpg",
        courseTitle: "Product Growth Clinic",
        text1: "Start",
        text2: "1.August.2022",
        text3: "2 Months",
        altText: "UI/UX designers",
        url: "/designers"
    }
]

export default function WorkList(props) {
    return (
        <div className="mb-6 py-8 px-0 pt-24" id="workList">
            <h2 className="font-medium text-blue-900 text-xl">Available Work</h2>
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
