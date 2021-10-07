
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
          <SwiperSlide>
            <figure className="md:grid md:grid-cols-2 mb-12">
              <div className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                <Image
                  src="/img/img1.png"
                  alt="Software Developers"
                  layout="responsive"
                  width={400}
                  height={420}
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
                  <a className="rounded-lg w-24 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Discover</a>
                </Link>
              </article>
            </figure>
          </SwiperSlide>

          {/* visual artists */}
          <SwiperSlide>
            <figure className="md:grid md:grid-cols-2 mb-12">
              <article className="px-4 md:pl-24 md:flex md:flex-col md:justify-center pt-4">
                <h2 className="text-xl font-semibold leading-tight">Visual Artists</h2>
                <p className="leading-7 m-0 sm:pr-10 lg:text-lg pt-4 pb-8">
                  Beat the stats and stereotypes, explore and stand out.
                  Build products and a porfolio you are proud to show off and earn from it.
                </p>
                <Link href="./artists">
                  <a className="rounded-lg w-24 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Discover</a>
                </Link>
              </article>
              <div className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
                <Image
                  src="/img/img2.png"
                  alt="Course Creators"
                  layout="responsive"
                  width={500}
                  height={520}
                />
              </div>

            </figure>
          </SwiperSlide> 

          {/*UI/UX Designers*/}
          <SwiperSlide>
            <figure className="md:grid md:grid-cols-2 mb-12">
                <div className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                <Image
                  src="/img/img1.png"
                  alt="Software Developers"
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
                  <a className="rounded-lg w-24 text-center text-white font-bold text-base p-2.5 bg-[#4092CF] hover:bg-blue-400 transition duration-300">Discover</a>
                </Link>
              </article>
            </figure>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}