import React from "react";
import { FaAsterisk } from "react-icons/fa";
export default function dintonReg() {
  return (
    // INTRODUCTION
    <div className="container mt-40 mx-auto mb-40">
      <div
        className="flex flex-col space-y-6 items-start justify-center px-6 py-10 border rounded border-black mx-auto"
        style={{ width: 900, height: 498.34 }}
      >
        <p
          className="text-5xl font-extrabold leading-10"
          style={{ width: 852, height: 194.34 }}
        >
          QRAFT NIGHT SCHOOL APPLICATION FORM-UI/UX Track 2022
        </p>
        <p className="text-4xl font-semibold leading-10" style={{ width: 852 }}>
          Life is an ongoing learning process and this Night school gives you an
          opportunity to learn a new skill that will help you remain relevant in
          your field, earn more money through side hustles or realize big dreams
          and transition of career
        </p>
      </div>

      <form action="">
        {/* EMAIL CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 176 }}
        >
          {/* email title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-2xl font-medium" for="email">
              Email
            </label>
            <FaAsterisk color="red" />
          </div>
          {/* email input with placeholder */}
          <div
            className=" flex flex-col  items-start justify-start  border-b border-gray-400"
            style={{ width: 560, height: 59 }}
          >
            <input
              class="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
              type="email"
              placeholder="Your email"
              aria-label="email"
              id="email"
            />
          </div>
        </div>
        {/* NAME CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 176 }}
        >
          {/* Full name title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-2xl font-medium" for="fullname">
              Full Name
            </label>
            <FaAsterisk color="red" />
          </div>
          {/* Full name input with placeholder */}
          <div
            className=" flex flex-col  items-start justify-start  border-b border-gray-400"
            style={{ width: 560, height: 59 }}
          >
            <input
              class="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
              type="text"
              placeholder="Your answer"
              aria-label="fullname"
              id="fullname"
              name="fullname"
            />
          </div>
        </div>
        {/* CONTACT CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 176 }}
        >
          {/* phone number title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-2xl font-medium" for="telephone">
              Phone Number
            </label>
            <FaAsterisk color="red" />
          </div>
          {/* telephone input with placeholder */}
          <div
            className=" flex flex-col  items-start justify-start  border-b border-gray-400"
            style={{ width: 560, height: 59 }}
          >
            <input
              class="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
              type="tel"
              placeholder="Your answer"
              aria-label="telephone"
              id="telephone"
              name="telephone"
            />
          </div>
        </div>
        {/*CV CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 176 }}
        >
          {/* cv title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-2xl font-medium" for="cv">
              Link your CV
            </label>
            <FaAsterisk color="red" />
          </div>
          {/* cv input with placeholder */}
          <div
            className=" flex flex-col  items-start justify-start  border-b border-gray-400"
            style={{ width: 560, height: 59 }}
          >
            <input
              class="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
              type="url"
              placeholder="Your answer"
              aria-label="cv"
              id="cv"
              name="cv"
            />
          </div>
        </div>
        {/* COVER LETTER CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 176 }}
        >
          {/* cover letter title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-2xl font-medium" for="letter">
              Link to your Cover Letter
            </label>
            <FaAsterisk color="red" />
          </div>
          {/* cover letter input with placeholder */}
          <div
            className=" flex flex-col  items-start justify-start  border-b border-gray-400"
            style={{ width: 560, height: 59 }}
          >
            <input
              class="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
              type="url"
              placeholder="Your answer"
              aria-label="letter"
              id="letter"
              name="letter"
            />
          </div>
        </div>
        {/* PROGRAM CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 270 }}
        >
          {/* program title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-2xl font-medium">
              What Program are you enrolling for?
            </p>
            <FaAsterisk color="red" />
          </div>
          {/* Different programs and their radio buttons */}
          <div className="flex flex-col" style={{ width: 560, height: 59 }}>
            {/* <input type="radio" id="html" name="fav_language" value="HTML"> */}
            <input
              type="radio"
              name="program"
              id="product_design"
              value="Product Design"
            />
            <label for="product_design" className="ml-4">
              Product Design
            </label>
            <input
              type="radio"
              name="program"
              id="digital_marketing"
              value="Digital Marketing"
            />
            <label for="digital_marketing" className="ml-4">
              Digital Marketing
            </label>
            <input
              type="radio"
              name="program"
              id="software_development"
              value="Software Development"
            />
            <label for="software_development" className="ml-4">
              Software Development
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
