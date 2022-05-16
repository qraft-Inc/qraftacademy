import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaAsterisk } from "react-icons/fa";

export default function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
      <div className="inline-flex items-start justify-start">
        <label
          htmlFor="inspiration_to_apply"
          className="text-lg sm:text-xl font-medium  w-5/6"
        >
          {label}
        </label>
        <FaAsterisk size="0.5em" color="red" className="w-1/6" />
      </div>
      <div className="flex flex-col space-y-6 items-start justify-start py-2 w-5/6">
        <Field
          placeholder="Your Answer"
          aria-label="textarea"
          id={name}
          name={name}
          as="textarea"
          {...rest}
          className="block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="font-bold text-red-600 text-sm">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
