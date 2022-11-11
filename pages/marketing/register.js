import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import SuccessModal from "../../components/SuccessModal";
import ErrorModal from "../../components/ErrorModal";

export default function Register() {
  const [successModal, setSuccess] = useState(false);
  const [errorModal, setError] = useState(false);
  const [value, setValue] = useState("");

  // form validation with yup Lib
  const validationSchema = Yup.object({
    user: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      fullname: Yup.string().required("Required"),
    }),

    marketing: Yup.object({
      telephone: Yup.string().required("Required"),
      cv: Yup.string().required("Required"),
      letter: Yup.string().required("Required"),
      linkedin: Yup.string().required("Required"),
      textarea1: Yup.string().required("Required"),
      textarea2: Yup.string().required("Required"),
      textarea3: Yup.string().required("Required"),
      textarea4: Yup.string().required("Required"),
      textarea5: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
      textarea6: Yup.string().required("Required"),
      textarea7: Yup.string().required("Required"),
    }),
  });

  // initial form value
  const initialValues = {
    user: {
      email: "",
      fullname: "",
    },

    marketing: {
      telephone: "",
      cv: "",
      letter: "",
      linkedin: "",
      textarea1: "",
      textarea2: "",
      textarea3: "",
      textarea4: "",
      textarea5: "",
      role: "",
      textarea6: "",
      textarea7: "",
    },
  };

  const onSubmit = async (values, onSubmitProps) => {
    await axios
      .post("/api/marketing", values)
      .then((response) => {
        setSuccess(true);
        setValue(response.data.name);
        onSubmitProps.resetForm();
      })
      .catch((error) => {
        setError(true);
        setValue(error.response.status);
      });
  };

  return (
    <>
      {/* render success OR error modals  after registration */}
      {errorModal && <ErrorModal closeModal={setError} value={value} />}
      {successModal && <SuccessModal closeModal={setSuccess} value={value} />}

      <div className="container mt-40 mx-auto mb-40 w-4/5 sm:w-3/5">
        <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-10 border rounded border-black">
          <p className="text-3xl sm:text-4xl font-extrabold w-full">
            QRAFT ACADEMY APPLICATION FORM-Digital Marketing Track 2022
          </p>
          <p className="text-xl sm:text-2xl font-semibold w-full">
            The Qraft academy digital marketing apprenticeship program is a 3
            months program offering training and development of individuals
            looking to start a career in technology. These include software
            developers and data scientists
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          className="w-full"
        >
          <Form>
            {/* EMAIL CARD */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex space-x-2 items-center justify-start ">
                <label
                  className="text-lg sm:text-xl font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <FaAsterisk size="0.5em" color="red" />
              </div>
              <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
                <Field
                  className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
                  type="email"
                  placeholder="Your email"
                  aria-label="email"
                  name="user.email"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="user.email" />
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
                <Field
                  className="appearance-none bg-transparent  w-full text-gray-700 border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
                  type="text"
                  placeholder="Your answer"
                  aria-label="fullname"
                  name="user.fullname"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="user.fullname" />
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
                <Field
                  className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-200 focus:ring-0 focus:border-black "
                  type="text"
                  placeholder="XXXX-XXXXXX"
                  aria-label="telephone"
                  name="marketing.telephone"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.telephone" />
              </div>
            </div>

            {/*CV CARD */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex space-x-2 items-center justify-start ">
                <label className="text-lg sm:text-xl font-medium" htmlFor="cv">
                  Link your CV
                </label>
                <FaAsterisk size="0.5em" color="red" />
              </div>
              <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
                <Field
                  className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-200 focus:ring-0 focus:border-black "
                  type="text"
                  placeholder="Your answer"
                  aria-label="cv"
                  name="marketing.cv"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.cv" />
              </div>
            </div>

            {/* COVER LETTER CARD */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex space-x-2 items-center justify-start ">
                <label
                  className="text-lg sm:text-xl font-medium"
                  htmlFor="letter"
                >
                  Link to your Cover Letter
                </label>
                <FaAsterisk size="0.5em" color="red" />
              </div>
              <div className=" flex flex-col items-start justify-start border-b border-gray-400 w-5/6">
                <Field
                  className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-200 focus:ring-0 focus:border-black "
                  type="text"
                  placeholder="Your answer"
                  aria-label="letter"
                  name="marketing.letter"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.letter" />
              </div>
            </div>

            {/* LINKEDIN CARD */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex space-x-2 items-center justify-start ">
                <label
                  className="text-lg sm:text-xl font-medium"
                  htmlFor="linkedin"
                >
                  Link to your LinkedIn
                </label>
                <FaAsterisk size="0.5em" color="red" />
              </div>
              <div className=" flex flex-col items-start justify-start border-b border-gray-400 w-5/6">
                <Field
                  className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-200 focus:ring-0 focus:border-black "
                  type="text"
                  placeholder="Your answer"
                  aria-label="linkedin"
                  name="marketing.linkedin"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.linkedin" />
              </div>
            </div>

            {/* HOW YOU GOT TO KNOW ABOUT QRAFT CARD */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex items-start justify-start">
                <label
                  htmlFor="inspiration_to_apply"
                  className="text-lg sm:text-xl font-medium  w-5/6"
                >
                  How did you learn about Qraft Academy. What inspired
                  /motivated you to apply for this program?
                </label>
                <FaAsterisk size="0.5em" color="red" className="w-1/6" />
              </div>
              <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
                <Field
                  className="block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border 
              border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="inspiration_to_apply"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea1"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea1" />
              </div>
            </div>

            {/* EXPECTATIONS FROM THE PROGRAM */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
                <Field
                  className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="expectations_from_program"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea2"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea2" />
              </div>
            </div>

            {/* WHAT ARE YOU CURRENTLY WORKING ON */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
                <Field
                  className="form-control block w-full px-4 py-3 border border-solid border-gray-300 rounded transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="currently_working_on"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea3"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea3" />
              </div>
            </div>

            {/* DESIGN TOOLS */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex space-x-2 items-start justify-start">
                <label
                  htmlFor="design_tools"
                  className="text-lg sm:text-xl font-medium"
                >
                  What are your favorite and least favorite design tools, and
                  why?
                </label>
                <FaAsterisk size="0.5em" color="red" />
              </div>
              <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
                <Field
                  className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="design_tools"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea4"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea4" />
              </div>
            </div>

            {/* PROUD ACHIEVEMENT */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
                <Field
                  className="form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="proud_achievement"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea5"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea5" />
              </div>
            </div>

            {/* ROLE */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
              <div className="inline-flex space-x-2 items-center justify-start ">
                <p className="text-lg sm:text-xl font-medium">
                  What type of role best suits you?
                </p>
                <FaAsterisk size="0.5em" color="red" />
              </div>
              <div className="">
                <Field
                  type="radio"
                  name="marketing.role"
                  value="highly independent role"
                  className="form-radio"
                />
                <label
                  htmlFor="highly_independent_role"
                  className="ml-4 text-sm sm:text-base"
                >
                  Highly independent role
                </label>
                <br></br>
                <Field
                  type="radio"
                  name="marketing.role"
                  value="Team Based"
                  className="form-radio"
                />
                <label
                  htmlFor="team_based"
                  className="ml-4 text-sm sm:text-base"
                >
                  Team Based
                </label>
                <br></br>
                <Field
                  type="radio"
                  name="marketing.role"
                  value="strong people skills"
                  className="form-radio"
                />
                <label
                  htmlFor="strong_people_skills"
                  className="ml-4 text-sm sm:text-base"
                >
                  Strong people skills Role
                </label>
                <br></br>
                <Field
                  type="radio"
                  name="marketing.role"
                  value="less people focused"
                  className="form-radio"
                />
                <label
                  htmlFor="less_people_focused"
                  className="ml-4 text-sm sm:text-base"
                >
                  Less people focused Role
                </label>
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.role" />
              </div>
            </div>

            {/* SOMETHING YOU BELIEVED IN */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
                <Field
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="something_you_believed_in"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea6"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea6" />
              </div>
            </div>

            {/*YOUR GOAL */}
            <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
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
                <Field
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  id="your_goal"
                  rows="3"
                  placeholder="Your answer"
                  name="marketing.textarea7"
                  as="textarea"
                />
              </div>
              <div className="font-bold text-red-600 text-sm">
                <ErrorMessage name="marketing.textarea7" />
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
    </>
  );
}
