
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
    name: "Samuel Mabonga",
    course: "UI/UX Designer",
    testimonial: "Qraft Academy was a great upskilling experience for me. The staff and instructors are all super pros, and getting to dive right into client work was perfect for a learn-by-doing student like myself. Highly recommended!",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Samuel_Mabonga_UX-UI_Designer_uiwc2q.jpg"
  },
  {
    id: 2,
    name: "Phillip",
    course: "Software Developer",
    testimonial: "My passion was to always be a developer but was never sure if to leave my  job to pursue my career because I had bills to pay. The program helped me to balance my life, career and work because it's flexible. It helped me to utilize my time and have discovered myself through career session  to pursue software development as a career putting my passion into action.",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1644604596/qraftstore/WhatsApp_Image_2022-02-11_at_8.50.24_PM_lyuqye.jpg"
  },
  {
    id: 3,
    name: "Timothy Olili",
    course: "Software Developer",
    testimonial: "I’ve learned so much from a variety of different technologies. Andrew's great at telling us when to dive deeper into a topic or when to step back or move on to different solution. Phillip’s help has been invaluable as well. I couldn’t have asked for a better experience.",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642173782/qraftstore/Timothy_momyx0.jpg"
  },
  {
    id: 4,
    name: "Joshua",
    course: "Software Developer",
    testimonial: "Crafting my career path has been the greatest lesson I have picked out from the career development content. The Design Phase was a game changer for me. I had knowledge with figma but  this experience  gave me  exposure on how to use it to develop prototypes and this triggered my passion of design into action which I had long held back .",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642172206/qraftstore/Joshua_Kasasira_Developer_ehgije.jpg"
  },
  {
  id: 5,
  name: "Peter",
  course: "UI/UX Designer",
  testimonial: "The program was scary and yet exciting. The program pushed me out of my comfort zone to try out new things and it was exciting to see myself executing. The free-style of this program gave me a glimpse of the work world and helped me to handle anxiety of work without thinking about the actual repercussions. I have learnt alot from samuel during the design phase.",
  img: "https://res.cloudinary.com/filipe256/image/upload/v1644157368/qraftstore/igxjeiazjt5oiv8ejwwn.png"
  },
  {
    id: 6,
    name: "Shakira",
    course: "Software Developer",
    testimonial: "I have explored design which has sparked an interest that I wish to look into in the future. I have been able to come up with ideas for the projects that we are embarking on.",
    img: "https://res.cloudinary.com/filipe256/image/upload/v1642172210/qraftstore/Shakira_Ndagire_Developer_pmgrge.jpg"
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