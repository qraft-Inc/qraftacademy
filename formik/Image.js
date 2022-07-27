import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaAsterisk } from "react-icons/fa";

export default function Image(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
      <div className="inline-flex space-x-2 items-center justify-start ">
        <label className="text-lg sm:text-xl font-medium" htmlFor={name}>
          {label}
        </label>
        <FaAsterisk size="0.5em" color="red" />
      </div>

      <div className=" flex flex-col  items-start justify-start  border-b border-gray-400 w-5/6">
        <Field
          aria-label="email"
          id={name}
          name={name} {...rest}
          className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
        />
      </div>
      <div className="font-bold text-red-600 text-sm">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
