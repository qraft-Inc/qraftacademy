import Link from "next/link";
import Image from 'next/image';

export default function AboutUs() {
    return (
        //start of  about area 
        <div className="flex justify-items-center text-gray-700 justify-center items-center font-semiMedium text-lg font-sans text-left tracking-normal leading-relaxed mb-6 lg:mb-0">
            <div className="grid max-w-xl lg:min-w-full lg:grid-cols-2 gap-x-8 justify-between min-h-full px-10">
                <div className="">
                    <div>
                        <h3 className="text-4xl font-bold mb-6 lg:mt-8 text-light-blue">
                            What
                            <span className="text-blue-900"> QraftAcademy </span>
                            <span className="">Is </span>
                            For You
                        </h3>
                        <div className=" space-y-4 mb-3">
                            <blockquote>Qraft Academy is an education startup that provides participants with an opportunity for self-discovery, access to experiential learning opportunities, and meaningful work.
                                <br />
                                The objective is to expose participants to a diverse range of opportunities to build experience, clarity about their career goals, and achieve them.
                            </blockquote>
                            <blockquote>
                                This is done through hands-on training, mentorship, and apprenticeship programs. Upon graduation some are maintained, others connected to paid work opportunities.
                                <br />
                                Qraft Academy is an initiative from Qraft Mind, a modern work award winner.
                            </blockquote>
                        </div>
                        <Link href="/">
                            <a className="text-white bg-blue-900 inline-flex items-center justify-center  px-8 py-4 text-base font-semibold leading-6 rounded-full w-auto uppercase mt-2 mb-2  hover:bg-blue-500 transition duration-300">Learn Now</a>
                        </Link>
                        <h3 className="text-xl font-bold mb-6 lg:mt-8 text-light-blue">
                            Through our online qraft academy platform young people access;
                        </h3>
                        <ul className="list-disc space-y-2">
                            <li>Online remote apprenticeships to gain work experience and work based learning with tracked competencies. This comes with deliberate talent development and matching or access to  opportunities like paid employment, freelance and scholarships.</li>
                            <li>Hybrid business design sprints for venture development to start or accelerate self employment/ entrepreneurship as a career </li>
                            <li>E-commerce to sell their products</li>
                            <li>MOOCs for personal , professional and business development</li>
                            <li>One on one career mentorship and guidance</li>
                        </ul>
                    </div>
                </div>

                {/*start of about image area*/}
                <div classsName="flex justify-center">
                    <div className="flex justify-center ">
                        <Image
                            src="https://res.cloudinary.com/filipe256/image/upload/v1642172211/qraftstore/team_qraftacademy_boqbc4.jpg"
                            alt="Team Qraft Academy - About us image background"
                            width={550}
                            height={450}
                            quality={100}
                            objectFit="cover"
                            className="object-cover mt-4 md:object-none"
                        />
                    </div>
                </div>
                {/* about image area end */}

            </div>
        </div>
        // end of about area 
    );
}
