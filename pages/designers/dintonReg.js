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
      {/* EMAIL CARD */}
      <form action="">
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 176 }}
        >
          {/* email title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-2xl font-medium">Email</p>
            <FaAsterisk color="red" />
          </div>
          {/* email input with placeholder */}
          {/* <div
          className="flex flex-col space-y-6 items-start justify-start py-2"
          style={{ width: 560, height: 59 }}
        >
          <p className="text-base font-light text-gray-400">Your email</p>
          <div className="border-gray-400" style={{ width: 560, height: 1 }} />
        </div> */}
          <div
            className=" flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
            <input
              class="appearance-none bg-transparent  w-full text-gray-700 mr-3  leading-tight border-b border-gray-400 "
              type="email"
              placeholder="Your email"
              aria-label="email"
            />
          </div>
        </div>
      </form>
    </div>
  );
  
}
