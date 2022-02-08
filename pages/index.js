import { makePublicRouterInstance } from "next/dist/client/router";
import Head from "next/head";
import Testimonies from "../components/Testimonies";
import Hero from "../components/Hero";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Qraft Academy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />

        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </Head>

      <div>
        <Hero />
        <Courses />
        <Testimonies />
      </div>
    </>
  );
}
