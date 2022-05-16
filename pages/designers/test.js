import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "../../formik/FormikControl";

export default function register() {
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
    comments: "",
    radioBtn: "",
  };

  // form validation with yup Lib
  const validatinSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    radioBtn: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.setSubmitting(false);
  };
  return (
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
                label="What Program are you enrolling for?"
                name="radioBtn"
                options={radioOptions}
              />
              <FormikControls
                control="textarea"
                placeholder="Your Answer"
                label=" How did you learn about Qraft Academy. What inspired /motivated you to apply for this program?"
                name="comments"
              />
              <div className="container">
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
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
  );
}
