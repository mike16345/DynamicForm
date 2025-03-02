import { FieldOptions } from "../types/FieldTypes";

const fields: FieldOptions = {
  title: "User Registration",
  fields: [
    {
      name: "username",
      type: "text",
      label: "Username",
      validations: {
        required: true,
        minLength: {
          value: 2,
        },
        maxLength: {
          value: 100,
        },
      },
    },
    {
      name: "gender",
      type: "select",
      label: "Gender",
      options: ["Male", "Female", "Other"],
      validations: {
        required: true,
      },
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      validations: {
        required: true,
        email: true,
      },
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      validations: {
        required: true,
        minLength: {
          value: 6,
        },
      },
    },
    {
      name: "birthdate",
      type: "date",
      label: "Birthdate",
      validations: {
        required: true,
      },
    },
  ],
};

export default fields;
