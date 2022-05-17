import * as Yup from "yup";
export const formSchema = Yup.object().shape({
  email: Yup.string()

    // Format Validation
    .email("Invalid email address format")

    // Required Field Validation
    .required("Email is required"),

  fullname: Yup.string()

    // Format Validation
    .email("Invalid email address format")

    // Required Field Validation
    .required("Full Name is required"),

  telephone: Yup.string()

    .required("Phone number is required")
    .matches(
      /^\+256\d{9}/,
      "Invalid phone number"
    ),
  cv: Yup.string()

    // Format Validation
    .url()

    // Required Field Validation
    .required("cv is required"),

  letter: Yup.string()

    // Format Validation
    .url()

    // Required Field Validation
    .required("Cover letter link is required"),

  program: Yup.string()

    // Required Field Validation
    .required("A radio option is required"),

  role: Yup.string()
  .required("A radio option is required"),
});
