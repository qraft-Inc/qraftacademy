import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

export default function register() {
  // radio button options
  const options = [
    { key: "Product Design", value: "productdesign" },
    { key: "Digital Marketing", value: "digitalmarketing" },
    { key: "Software Development", value: "softwaredevelopment" },
  ];

  // initial form values
  const initialValues = {
    email: "",
    fullname: "",
    phone: "",
    comments: "",
  };

  // form validation with yup
  const validatinSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    fullname: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
  });

  const onSubmit = values => {
    console.log("Form data", values);
  }
  return (
    <div className="container mt-40 mx-auto mb-40 w-4/5 sm:w-3/5">
      <Formik initialValues={initialValues} validationSchema={validatinSchema} onSubmit={onSubmit}>
        {
          formik => {
            return <Form>
              <FormikControls
               control="input"
               type="email"
               lable="Email"
               name="email"/>

            </Form>
          }
        }
      <Form action="" className="w-full">
        {/* EMAIL CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
            />
          </div>
        </div>

        {/* NAME CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
            />
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="container flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
            />
          </div>
        </div>
        {/* PROGRAM CARD */}
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
          {/* program title and asterik icon */}
          <div className="inline-flex space-x-2 items-center justify-start ">
            <p className="text-lg sm:text-xl font-medium">
              What Program are you enrolling for?
            </p>
            <FaAsterisk size="0.5em" color="red" />
          </div>
          {/* Different programs and their radio buttons */}
          <div className="">
            <input
              type="radio"
              className="form-radio"
              name="program"
              id="product_design"
              value="Product Design"
            />
            <label
              htmlFor="product_design"
              className="ml-4 text-sm sm:text-base"
            >
              Product Design
            </label>
            <br></br>
            <input
              type="radio"
              name="program"
              id="digital_marketing"
              value="Digital Marketing"
            />
            <label
              htmlFor="digital_marketing"
              className="ml-4 text-sm sm:text-base"
            >
              Digital Marketing
            </label>
            <br></br>
            <input
              type="radio"
              name="program"
              id="software_development"
              value="Software Development"
              className="form-radio"
            />
            <label
              htmlFor="software_development"
              className="ml-4 text-sm sm:text-base"
            >
              Software Development
            </label>
          </div>
        </div>
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
              className="block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="inspiration_to_apply"
              rows="3"
              placeholder="Your Answer"
            ></textarea>
          </div>
        </div>

        <div className="container">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded mx-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
      </Formik>
    </div>
  );
}
