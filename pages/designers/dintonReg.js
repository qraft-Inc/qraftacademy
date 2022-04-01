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
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
              type="email"
              placeholder="Your email"
              aria-label="email"
              id="email"
              name="email"
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
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
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
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
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
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
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
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight  "
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
        {/* HOW YOU GOT TO KNOW ABOUT QRAFT CARD */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="inspiration_to_apply"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              How did you learn about Qraft Academy. What inspired /motivated
              you to apply for this program?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
              id="inspiration_to_apply"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* EXPECTATIONS FROM THE PROGRAM */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="expectations_from_program"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              What are your expectations from this program?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
              id="expectations_from_program"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* WHAT ARE YOU CURRENTLY WORKING ON */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="currently_working_on"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              What are you working on currently? and How do you keep your
              designing skills current?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
              id="currently_working_on"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* DESIGN TOOLS */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="design_tools"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              What are your favorite and least favorite design tools, and why?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
              id="design_tools"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* PROUD ACHIEVEMENT */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="proud_achievement"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              what is your most proud of achievement so far?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
              id="proud_achievement"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>
        {/* ROLE */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 350 }}
        >
          {/* role title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-2xl font-medium">
              What type of role best suits you?
            </p>
            <FaAsterisk color="red" />
          </div>
          {/* Different roles and their radio buttons */}
          <div className="flex flex-col" style={{ width: 560, height: 59 }}>
            {/* <input type="radio" id="html" name="fav_language" value="HTML"> */}
            <input
              type="radio"
              name="role"
              id="highly_independent_role"
              value="Highly independent role"
            />
            <label for="highly_independent_role" className="ml-4">
              Highly independent role
            </label>
            <input
              type="radio"
              name="role"
              id="team_based"
              value="Team Based"
            />
            <label for="team_based" className="ml-4">
              Team Based
            </label>
            <input
              type="radio"
              name="role"
              id="strong_people_skills"
              value="Strong people skills Role"
            />
            <label for="strong_people_skills" className="ml-4">
              Strong people skills Role
            </label>
            <input
              type="radio"
              name="role"
              id="less_people_focused"
              value="Less people focused Role"
            />
            <label for="less_people_focused" className="ml-4">
              Less people focused Role
            </label>
          </div>
        </div>
        {/* SOMETHING YOU BELIEVED IN */}
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="something_you_believed_in"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              When was the last time you stood up for something that you
              believed in? What was your motivation? How did it turn out?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
        <div
          className="flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16"
          style={{ width: 900, height: 205 }}
        >
          <div
            className="inline-flex space-x-2 items-start justify-start"
            style={{ width: 635, height: 58 }}
          >
            <label
              for="your_goal"
              className="text-2xl font-medium leading-loose"
              style={{ width: 800, height: 58 }}
            >
              Professionally, what’s your goal?
            </label>
            <FaAsterisk color="red" />
          </div>
          <div
            className="flex flex-col space-y-6 items-start justify-start py-2"
            style={{ width: 560, height: 59 }}
          >
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
      </form>
    </div>
  );
}
