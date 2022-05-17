import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaAsterisk, FaOptinMonster } from "react-icons/fa";

export default function RadioBtn(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="container flex flex-col space-y-6 items-start justify-center px-6 py-8 border rounded border-black mx-auto my-16">
      <div className="inline-flex space-x-2 items-center justify-start ">
        <p className="text-lg sm:text-xl font-medium">{label}</p>
        <FaAsterisk size="0.5em" color="red" />
      </div>
      <div className="">
        <Field
          name={name}
          {...rest}
          className="appearance-none bg-transparent  w-full text-gray-700  border-none leading-tight mt-0 px-0.5 border-b border-gray-400 focus:ring-0 focus:border-gray-700"
        >
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value} className="ml-4 text-sm sm:text-base">{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
        <div className="font-bold text-red-600 text-sm">
          <ErrorMessage name={name} />
        </div>
      </div>
    </div>
  );
}
