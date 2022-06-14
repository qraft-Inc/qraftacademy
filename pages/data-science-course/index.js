// import Link from "next/link"
// import Image from "next/image"
import Head from "next/head";
// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Hero from "../../components/DataScienceComponents/Hero";
import CoursesList from "../../components/DataScienceComponents/CourseList";

export default function Index() {

    return (
        <>
        <Head>
          <title>Home | Qraft Academy</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        </Head>
  
        <div>
          <Hero 
          image="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         title1="Data Science "
            title2="Course"
             subTitle="
             Learn scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data."
              btnText="View below"
               btnLink="courses" 
          />
          <CoursesList />
          {/* <Testimonies /> */}
          
        </div>
      </>
    );
}
