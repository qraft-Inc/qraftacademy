import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from 'formik';

export default function Register() {

  // radio button options
  const radioOptions1 = [
    { key: "Product Design", value: "product design" },
    { key: "Digital Marketing", value: "digital marketing" },
    { key: "Software Development", value: "software development" },
  ];

  const radioOptions2 = [
    { key: "highly_independent_role", value: "highly_independent_role" },
    { key: "strong_people_skills", value: "strong_people_skills" },
    { key: "less_people_focused", value: "less_people_focused" },
  ];

  // form validation with yup Lib
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    fullname: Yup.string().required("Required"),
    telephone: Yup.string().required("Required"),
    program: Yup.string().required("Required"),
    answer1: Yup.string().required("Required"),
    answer2: Yup.string().required("Required"),
    answer3: Yup.string().required("Required"),
    answer4: Yup.string().required("Required"),
    answer5: Yup.string().required("Required"),
    answer6: Yup.string().required("Required"),
    answer7: Yup.string().required("Required"),
    letter: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
    program: Yup.string().required("Required"),
    cv: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
  });

  // initial form value
  const initialValues = {
    email: "",
    fullname: "",
    telephone: "",
    program: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    role: "",
    program: "",
    image: "",
    cv: "",
    letter: "",
  }

  const onSubmit = values => {
    console.log("form data", values)
  }


  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  // });


  return (
    // INTRODUCTION
    <div className="container mt-40 mx-auto mb-40 w-4/5 sm:w-3/5">
      <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-10 border rounded border-black">
        <p className="text-3xl sm:text-4xl font-extrabold w-full">
          QRAFT NIGHT SCHOOL APPLICATION FORM-UI/UX TRACK 2022
        </p>
        <p className="text-xl sm:text-2xl font-semibold w-full">
          Life is an ongoing learning process and this Night school gives you an
          opportunity to learn a new skill that will help you remain relevant in
          your field, earn more money through side hustles or realize big dreams
          and transition of career.
        </p>
      </div>
      {/* <form onSubmit={formik.handleSubmit} className="w-full"> */}


      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className="w-full"
      >
        <>

        {/* EMAIL CARD */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" htmlFor="email">
              Email
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
              type="email"
              placeholder="Your email"
              aria-label="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.email ? formik.errors.email : null}
          </div>
        </div> */}

        {/* NAME CARD */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label
              className="text-lg sm:text-xl font-medium"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className=" flex flex-col  items-start justify-start border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
              type="text"
              placeholder="Your answer"
              aria-label="fullname"
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
            />
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.fullname ? formik.errors.fullname : null}
          </div>
        </div> */}

        {/* CONTACT CARD */}
        {/* <div className="container flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label
              className="text-lg sm:text-xl font-medium"
              htmlFor="telephone"
            >
              Phone Number
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className=" flex flex-col items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-200 focus:ring-0 focus:border-black "
              type="tel"
              placeholder="Your answer"
              aria-label="telephone"
              id="telephone"
              name="telephone"
              onChange={formik.handleChange}
              value={formik.values.telephone}
            />
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.telephone ? formik.errors.telephone : null}
          </div>
        </div> */}

        {/*CV CARD */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" htmlFor="cv">
              Link your CV
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
            <input
              type="file"
              aria-label="cv"
              id="cv"
              name="cv"
              onChange={formik.handleChange}
              value={formik.values.cv}
            />
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.cv ? formik.errors.cv : null}
          </div>
        </div> */}

        {/* COVER LETTER CARD */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <label className="text-lg sm:text-xl font-medium" htmlFor="letter">
              Link to your Cover Letter
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className=" flex flex-col items-start justify-start border-b border-gray-400 w-5/6">
            <input
              type="file"
              aria-label="letter"
              id="letter"
              name="letter"
              onChange={formik.handleChange}
              value={formik.values.letter}
            />
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.letter ? formik.errors.letter : null}
          </div>
        </div> */}

        {/* PROGRAM CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-lg sm:text-xl font-medium">
              What Program are you enrolling for?
            </p>
            <FaAsterisk size="0.5em" color="red" />
          </div>

          <div className="">
            {/* <input
            type="radio"
            className="form-radio"
            name="program"
            id="product_design"
            value={radioOptions1.key}
          /> */}
            <Field type="radio" name="program" value="product design" />
            <label
              htmlFor="product_design"
              className="ml-4 text-sm sm:text-base"
            >
              Product Design
            </label>
            <br></br>
            {/* <input
            type="radio"
            name="program"
            id="digital_marketing"
            value={formik.values.program}
          /> */}
            <Field type="radio" name="program" value="digital_marketing" />
            <label
              htmlFor="digital_marketing"
              className="ml-4 text-sm sm:text-base"
            >
              Digital Marketing
            </label>
            <br></br>
            {/* <input
            type="radio"
            name="program"
            id="software_development"
            className="form-radio"
            value={formik.values.program}
          /> */}
            <Field type="radio" name="program" value="software_development" />
            <label
              htmlFor="software_development"
              className="ml-4 text-sm sm:text-base"
            >
              Software Development
            </label>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {/* {formik.errors.program ? formik.errors.program : null} */}
            {/* <ErrorMessage name="program" /> */}
          </div>
        </div>

        {/* HOW YOU GOT TO KNOW ABOUT QRAFT CARD */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex items-start justify-start">
            <label
              htmlFor="inspiration_to_apply"
              className="text-lg sm:text-xl font-medium  w-5/6"
            >
              How did you learn about Qraft Academy. What inspired /motivated
              you to apply for this program?
            </label>
            <FaAsterisk size="0.5em" color="red" className="w-1/6" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border 
              border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="inspiration_to_apply"
              rows="3"
              placeholder="Your Answer"
              name="answer1"
              onChange={formik.handleChange}
              value={formik.values.answer1}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer1 ? formik.errors.answer1 : null}
          </div>
        </div> */}

        {/* EXPECTATIONS FROM THE PROGRAM */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              htmlFor="expectations_from_program"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              What are your expectations from this program?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="expectations_from_program"
              rows="3"
              placeholder="Your Answer"
              name="answer2"
              onChange={formik.handleChange}
              value={formik.values.answer2}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer2 ? formik.errors.answer2 : null}
          </div>
        </div> */}

        {/* WHAT ARE YOU CURRENTLY WORKING ON */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              htmlFor="currently_working_on"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              What are you working on currently? and How do you keep your
              designing skills current?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="form-control block w-full px-4 py-3 border border-solid border-gray-300 rounded transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="currently_working_on"
              rows="3"
              placeholder="Your Answer"
              name="answer3"
              onChange={formik.handleChange}
              value={formik.values.answer3}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer3 ? formik.errors.answer3 : null}
          </div>
        </div> */}

        {/* DESIGN TOOLS */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              htmlFor="design_tools"
              className="text-lg sm:text-xl font-medium"
            >
              What are your favorite and least favorite design tools, and why?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="design_tools"
              rows="3"
              placeholder="Your Answer"
              name="answer4"
              onChange={formik.handleChange}
              value={formik.values.answer4}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer4 ? formik.errors.answer4 : null}
          </div>
        </div> */}

        {/* PROUD ACHIEVEMENT */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              htmlFor="proud_achievement"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              What is your most proud of achievement so far?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="proud_achievement"
              rows="3"
              placeholder="Your Answer"
              name="answer5"
              onChange={formik.handleChange}
              value={formik.values.answer5}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer5 ? formik.errors.answer5 : null}
          </div>
        </div> */}

        {/* ROLE */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-lg sm:text-xl font-medium">
              What type of role best suits you?
            </p>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="">
            {/* <input
            type="radio"
            name="role"
            id={formik.values.role}
            onChange={formik.handleChange}
            value={formik.values.role}
            options={radioOptions2}
          /> */}
            <Field type="radio" name="role" value="highly independent role" />
            <label
              htmlFor="highly_independent_role"
              className="ml-4 text-sm sm:text-base"
            >
              Highly independent role
            </label>
            <br></br>

            {/* <input
            type="radio"
            name="role"
            id={formik.values.role}
            onChange={formik.handleChange}
            value={formik.values.role}
            options={radioOptions2}
          /> */}
            <Field type="radio" name="role" value="Team Based" />
            <label htmlFor="team_based" className="ml-4 text-sm sm:text-base">
              Team Based
            </label>
            <br></br>

            {/* <input
            type="radio"
            name="role"
            id={formik.values.role}
            onChange={formik.handleChange}
            value={formik.values.role}
            options={radioOptions2}
          /> */}
            <Field type="radio" name="role" value="strong people skills" />
            <label
              htmlFor="strong_people_skills"
              className="ml-4 text-sm sm:text-base"
            >
              Strong people skills Role
            </label>
            <br></br>
            {/* <input
            type="radio"
            name="role"
            id={formik.values.role}
            onChange={formik.handleChange}
            value={formik.values.role}
            options={radioOptions2}
          /> */}
            <Field type="radio" name="role" value="less people focused" />
            <label
              htmlFor="less_people_focused"
              className="ml-4 text-sm sm:text-base"
            >
              Less people focused Role
            </label>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {/* {formik.errors.role ? formik.errors.role : null} */}
            {/* <ErrorMessage name="program" /> */}
          </div>
        </div>

        {/* SOMETHING YOU BELIEVED IN */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="flex space-x-2 items-start justify-start">
            <label
              htmlFor="something_you_believed_in"
              className="text-lg sm:text-xl font-medium w-5/6"
            >
              When was the last time you stood up for something that you
              believed in? What was your motivation? How did it turn out?
            </label>
            <FaAsterisk size="0.5em" color="red" className="w-1/6" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="something_you_believed_in"
              rows="3"
              placeholder="Your Answer"
              name="answer6"
              onChange={formik.handleChange}
              value={formik.values.answer6}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer6 ? formik.errors.answer6 : null}
          </div>
        </div> */}

        {/*YOUR GOAL */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              htmlFor="your_goal"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              Professionally, what’s your goal?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="your_goal"
              rows="3"
              placeholder="Your Answer"
              name="answer7"
              onChange={formik.handleChange}
              value={formik.values.answer7}
            ></textarea>
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.answer7 ? formik.errors.answer7 : null}
          </div>
        </div> */}

        {/*IMAGE */}
        {/* <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          <div className="inline-flex space-x-2 items-start justify-start">
            <label
              htmlFor="your_goal"
              className="text-lg sm:text-xl font-medium leading-loose"
            >
              Profile Image?
            </label>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
            <input
              type="file"
              aria-label="image"
              id="image"
              name="image"
              onChange={formik.handleChange}
              value={formik.values.image}
            />
          </div>
          <div className="font-bold text-red-600 text-sm">
            {formik.errors.image ? formik.errors.image : null}
          </div>
        </div> */}

        <div className="container">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded mx-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
        </>
      </Formik>
    </div >
  );
}
