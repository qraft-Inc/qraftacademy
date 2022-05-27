import React, { useState, useEffect } from "react";
import { FaAsterisk } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "../../components/formik/FormikControl";
import axios from "axios";
import SuccessModal from "../../components/SuccessModal";
import ErrorModal from "../../components/ErrorModal";

export default function test() {
  const [successModal, setSuccess] = useState(false);
  const [errorModal, setError] = useState(false);
  const [value, setValue] = useState("");

  // radio button options
  const radioOptions = [
    { key: "Product Design", value: "product design" },
    { key: "Digital Marketing", value: "digital marketing" },
    { key: "Software Development", value: "software development" },
  ];

  // initial form values
  const initialValues = {
    email: "",
    name: "",
    phone: "",
    program: "",
    answer: "",
  };

  // form validation with yup Lib
  const validatinSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    program: Yup.string().required("Required"),
    answer: Yup.string().required("Required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    axios
      .post("http://localhost:5000/api/designers/test/data", values)
      .then((response) => {
        setSuccess(true);
        setValue(response.data.name)
        onSubmitProps.resetForm();
      })
      .catch((error) => {
        setError(true);
        setValue(error.message)
      });
  };
  return (
    <>
    {/* render success OR error modals  after registration*/}
      {errorModal && <ErrorModal closeModal={setError} value={value}/>}
      {successModal && <SuccessModal closeModal={setSuccess} value={value}/>}
 
    <div className="container mt-40 mx-auto mb-40 w-4/5 sm:w-3/5">
      <Formik
        initialValues={initialValues}
        validationSchema={validatinSchema}
        onSubmit={onSubmit}
        className="w-full"
      >
        {(formik) => {
          console.log(formik);
          return (
            // render the different form fields
            <Form>
              <FormikControls
                control="input"
                placeholder="Your email"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControls
                control="input"
                placeholder="Your full name"
                type="text"
                label="Full Name"
                name="name"
              />
              <FormikControls
                control="input"
                placeholder="Your phone number"
                type="text"
                label="Phone Number"
                name="phone"
              />
              <FormikControls
                control="radio"
                label="What program are you enrolling for?"
                name="program"
                options={radioOptions}
              />
              <FormikControls
                control="textarea"
                placeholder="Your Answer"
                label=" How did you learn about Qraft Academy. What inspired /motivated you to apply for this answer?"
                name="answer"
              />
              <div className="container">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded mx-auto"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
    </>
  );
}
