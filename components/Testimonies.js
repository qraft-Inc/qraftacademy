
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
    name: "Samuel Jackson",
    course: "Software Developer",
    testimonial: "Qraft Academy is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist.",
    img: "/img/pic.png"
  },
  {
    id: 2,
    name: "Samuel Jackson",
    course: "UI/UX Designer",
    testimonial: "Qraft Academy is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist.",
    img: "/img/pic.png"
  },
  {
    id: 3,
    name: "Samuel Jackson",
    course: " Visual Artist",
    testimonial: "Qraft Academy is an online education platform that delivers video courses.",
    img: "/img/pic.png"
  },
  {
    id: 4,
    name: "Samuel Jackson",
    course: "Course Creator",
    testimonial: "Qraft Academy is an online education platform that delivers video courses.",
    img: "/img/pic.png"
  },
  {
    id: 5,
    name: "Samuel Jackson",
    course: "Software Developer",
    testimonial: "Qraft Academy is an online education platform that delivers video courses Qraft Academy is an online education platform that delivers video courses.",
    img: "/img/pic.png"
  }
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
          <SwiperSlide key={user.id} className="pb-4">
            <figure className=" flex flex-col justify-center items-center h-56">

              <p className="py-2 px-12 text-base md:w-2/3">
              &quot;<i>{user.testimonial}</i>&quot;
              </p>
              <div className="flex items-center">
                <div className="block rounded-full">
                  <img src={user.img} alt={user.name} />
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