
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

const data = [
  {
    id: 1,
    name: "Timothy Olili",
    course: "Software Developer",
    testimonial: "I’ve learned so much from a variety of different technologies. Andrew's great at telling us when to dive deeper into a topic or when to step back or move on to different solution. Phillip’s help has been invaluable as well. I couldn’t have asked for a better experience.",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642173782/qraftstore/Timothy_momyx0.jpg"
  },
  {
    id: 2,
    name: "Samuel Mabonga",
    course: "UI/UX Designer",
    testimonial: "Qraft Academy was a great upskilling experience for me. The staff and instructors are all super pros, and getting to dive right into client work was perfect for a learn-by-doing student like myself. Highly recommended!",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Samuel_Mabonga_UX-UI_Designer_uiwc2q.jpg"
  },
  {
    id: 3,
    name: "Juliyana Woldeab",
    course: "Digital Marketer",
    testimonial: "Qraft Academy allowed me to get involved in various parts of the business as well as experience different job roles allowing me to broaden my industry knowledge as well as my education.",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/Juliyana_woldeab_pwoiyd.jpg"
  },
]
export default function Testimonies() {
  return (

    
    <section className="h-auto md:grid md:grid-cols-1 mb-8">
      <div className="flex flex-col items-center px-2">
        <h1 className="text-xl font-semibold leading-tight">What Students Say</h1>
        <p className="leading-7 sm:pr-12 xl:pr-32 lg:text-lg pt-4 pb-2 px-8" >Qraft Academy is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist.</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={true}
        scrollbar={{ draggable: true }}
        spaceBetween={-50}
        slidesPerView={1}
        className="md:w-9/12 h-full"
      >
        {data.map(user => (
          <SwiperSlide key={user.id}>
            <figure className=" flex flex-col justify-center items-center h-full">

              <p className="py-2 px-12 text-base md:w-2/3">
              &quot;<i>{user.testimonial}</i>&quot;
              </p>
              <div className="flex items-center mb-10">
                <div className="block rounded-full  w-14 h-14">
                  <Image 
                    src={user.img} 
                    alt={user.name} 
                    width={500}
                    height={500}
                  />
                </div>
                <figcaption className="ml-2 text-sm">
                  <h1 className="font-bold">{user.name}</h1>
                  <span className="">{user.course}</span>
                </figcaption>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      </section>
  
  );
};