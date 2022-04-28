import React from "react";
import { FaAsterisk } from "react-icons/fa";
export default function register() {
  return (
    // INTRODUCTION
    <div className="container mt-40 mx-auto mb-40 w-4/5 sm:w-3/5">
      <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-10 border rounded border-black">
        <p className="text-3xl sm:text-4xl font-extrabold w-full">
          QRAFT NIGHT SCHOOL APPLICATION FORM-DIGITAL MARKETING TRACK 2022
        </p>
        <p className="text-xl sm:text-2xl font-semibold w-full">
          The Qraft academy digital marketing apprenticeship program is a 3
          months program offering training and development of individuals
          looking to start a career in technology.
        </p>
        <p className="text-xl sm:text-2xl font-semibold w-full">
          These include software developers and data scientists
        </p>
      </div>

      <form action="" className="w-full">
        {/* EMAIL CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* email title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" for="email">
              Email
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* email input with placeholder */}
          <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
              type="email"
              placeholder="Your email"
              aria-label="email"
              id="email"
              name="email"
            />
          </div>
        </div>
        {/* NAME CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* Full name title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" for="fullname">
              Full Name
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* Full name input with placeholder */}
          <div className=" flex flex-col  items-start justify-start border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
              type="text"
              placeholder="Your answer"
              aria-label="fullname"
              id="fullname"
              name="fullname"
            />
          </div>
        </div>
        {/* CONTACT CARD */}
        <div className="container flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* phone number title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" for="telephone">
              Phone Number
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* telephone input with placeholder */}
          <div className=" flex flex-col items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-200 focus:ring-0 focus:border-black "
              type="tel"
              placeholder="Your answer"
              aria-label="telephone"
              id="telephone"
              name="telephone"
            />
          </div>
        </div>
        {/*CV CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* cv title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" for="cv">
              Link your CV
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* cv input with placeholder */}
          <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight focus:ring-0 "
              type="url"
              placeholder="Your answer"
              aria-label="cv"
              id="cv"
              name="cv"
            />
          </div>
        </div>
        {/* COVER LETTER CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* cover letter title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" for="letter">
              Link to your Cover Letter
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* cover letter input with placeholder */}
          <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight focus:ring-0 "
              type="url"
              placeholder="Your answer"
              aria-label="letter"
              id="letter"
              name="letter"
            />
          </div>
        </div>
        {/* LINKEDIN CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* cover letter title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" for="linkedIn">
              Link to your LinkedIn
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* linkedIn input with placeholder */}
          <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight focus:ring-0 "
              type="url"
              placeholder="Your answer"
              aria-label="linkedIn"
              id="linkedIn"
              name="linkedIn"
            />
          </div>
        </div>

        {/* HOW YOU GOT TO KNOW ABOUT QRAFT CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex items-start justify-start">
            <label
              for="inspiration_to_apply"
              className="text-lg sm:text-xl font-medium  w-5/6"
            >
              How did you learn about Qraft Academy. What inspired /motivated
              you to apply for this program?
            </label>
            <FaAsterisk size="0.5em" color="red" className="w-1/6" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        block
        w-full
        px-4
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="inspiration_to_apply"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* EXPECTATIONS FROM THE PROGRAM */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              for="expectations_from_program"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              What are your expectations from this program?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        form-control
        block
        w-full
        px-4
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="expectations_from_program"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* WHAT ARE YOU CURRENTLY WORKING ON */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              for="currently_working_on"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              What are you working on currently? and How do you keep your
              marketing skills current?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        form-control
        block
        w-full
        px-4
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="currently_working_on"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* MARKETING TOOLS */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              for="design_tools"
              className="text-lg sm:text-xl font-medium"
            >
              What are your favorite and least favorite marketing Platforms, and
              why?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        form-control
        block
        w-full
        px-4
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="design_tools"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* PROUD ACHIEVEMENT */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              for="proud_achievement"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              What is your most proud of achievement so far?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        form-control
        block
        w-full
        px-4
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="proud_achievement"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* ROLE */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* role title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-lg sm:text-xl font-medium">
              What type of role best suits you?
            </p>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* Different roles and their radio buttons */}
          <div className="">
            <input
              type="radio"
              name="role"
              id="highly_independent_role"
              value="Highly independent role"
            />
            <label
              for="highly_independent_role"
              className="ml-4 text-sm sm:text-base"
            >
              Highly independent role
            </label>
            <br></br>

            <input
              type="radio"
              name="role"
              id="team_based"
              value="Team Based"
            />
            <label for="team_based" className="ml-4 text-sm sm:text-base">
              Team Based
            </label>
            <br></br>
            <input
              type="radio"
              name="role"
              id="strong_people_skills"
              value="Strong people skills Role"
            />
            <label
              for="strong_people_skills"
              className="ml-4 text-sm sm:text-base"
            >
              Strong people skills Role
            </label>
            <br></br>
            <input
              type="radio"
              name="role"
              id="less_people_focused"
              value="Less people focused Role"
            />
            <label
              for="less_people_focused"
              className="ml-4 text-sm sm:text-base"
            >
              Less people focused Role
            </label>
          </div>
        </div>
        {/* SOMETHING YOU BELIEVED IN */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="flex space-x-2 items-start justify-start">
            <label
              for="something_you_believed_in"
              className="text-lg sm:text-xl font-medium w-5/6"
            >
              When was the last time you stood up for something that you
              believed in? What was your motivation? How did it turn out?
            </label>
            <FaAsterisk size="0.5em" color="red" className="w-1/6" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="something_you_believed_in"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/*YOUR GOAL */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              for="your_goal"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              Professionally, what’s your goal?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
      "
              id="your_goal"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        <div className="container">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded mx-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
