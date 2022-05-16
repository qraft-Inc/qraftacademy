import React from "react";
import Input from "./Input";
import RadioBtn from "./RadioBtn";
import Textarea from "./Textarea";

export default function FormikControl({ control, ...rest }) {
  // decide which form fields to render based on control prop
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "radio":
      return <RadioBtn {...rest} />;
    default:
      return null;
  }
}
