
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  return (
    <>
      <section className="w-full pt-14 pb-7 md:pt-20 md:pb-24" id="courses">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          speed={600}
          parallax={true}
        >
          {/* software developers */}
          <SwiperSlide  className="p-8">
            <figure className="md:grid md:grid-cols-2 mb-12">
              <div className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                <Image
                  src="https://res.cloudinary.com/filipe256/image/upload/v1644905941/qraftstore/software_development_ci3tns.jpg"
                  alt="Software Developers"
                  layout="responsive"
                  width={300}
                  height={320}
                  quality={100}
                />
              </div>
              <article className="pl-4 md:flex md:flex-col md:justify-center">
                <h2 className="text-xl font-semibold leading-tight">Software Developers</h2>
                <p className="leading-7 sm:pr-12 xl:pr-32 lg:text-lg pt-4 pb-8 m-0">
                  Great talent and products are made, not born. Collaborate with
                  industry experts and earn badges that matter, while building
                  products that actually fix the world&#39;s biggest bugs.
                </p>
                <Link href="./developers">
                  <a className="rounded-lg w-32 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Get Started</a>
                </Link>
              </article>
            </figure>
          </SwiperSlide>

          {/* digital marketing */}
          <SwiperSlide className="p-8">
            <figure className="md:grid md:grid-cols-2 mb-12">
            <div className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 order-2">
                <Image
                  src="https://res.cloudinary.com/filipe256/image/upload/v1645064225/qraftstore/Digital_Marketing_dbkrx8.jpg"
                  alt="digital marketing"
                  layout="responsive"
                  width={500}
                  height={520}
                />
              </div>
              <article className="px-4 md:pl-24 md:flex md:flex-col md:justify-center pt-4 order-1">
                <h2 className="text-xl font-semibold leading-tight">Digital Marketing</h2>
                <p className="leading-7 m-0 sm:pr-10 lg:text-lg pt-4 pb-8">
                  Beat the stats and stereotypes, explore and stand out.
                  Build products and a porfolio you are proud to show off and earn from it.
                </p>
                <Link href="./marketing">
                  <a className="rounded-lg w-32 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Get Started</a>
                </Link>
              </article>
            </figure>
          </SwiperSlide> 

          {/*UI/UX Designers*/}
          <SwiperSlide className="p-8">
            <figure className="md:grid md:grid-cols-2 mb-12">
                <div className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                <Image
                  src="https://res.cloudinary.com/filipe256/image/upload/v1645064225/qraftstore/Product_Design_utd76i.jpg"
                  alt="UI/UX Designers"
                  layout="responsive"
                  width={400}
                  height={420}
                  quality={100}
                />

              </div>
              <article className="pl-4 md:flex md:flex-col md:justify-center">
                <h2 className="text-xl font-semibold leading-tight">UI/UX Designers</h2>
               <p className="leading-7 sm:pr-12 xl:pr-32 lg:text-lg pt-4 pb-8 m-0">
                  Great talent and products are made, not born. Collaborate with
                  industry experts and earn badges that matter, while building
                  products that actually fix the world&#39;s biggest bugs.
                </p>
                <Link href="./designers">
                  <a className="rounded-lg w-32 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Get Started</a>
                </Link>
              </article>
            </figure>
          </SwiperSlide>

           {/*Data Literacy*/}
           <SwiperSlide className="p-8">
            <figure className="md:grid md:grid-cols-2 mb-12">
                <div className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                <Image
                  src="https://res.cloudinary.com/filipe256/image/upload/v1651093245/qraftstore/data_f8bhh1_tqzcnk.jpg"
                  alt="Data Literacy"
                  layout="responsive"
                  width={400}
                  height={420}
                  quality={100}
                />

              </div>
              <article className="pl-4 md:flex md:flex-col md:justify-center">
                <h2 className="text-xl font-semibold leading-tight">Free Data Literacy For Organisations</h2>
               <p className="leading-7 sm:pr-12 xl:pr-32 lg:text-lg pt-4 pb-8 m-0">
                  Learn how to build a data driven culture in your organisation. 
                  The reason why organisations are not data driven is not just technical but also cultural.
                  Normalise using data in your decision making process.
                </p>
                <Link href="./datascientists">
                  <a className="rounded-lg w-32 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Contact Us</a>
                </Link>
              </article>
            </figure>
          </SwiperSlide>

        </Swiper>
      </section>
    </>
  );
}