import * as yup from "yup";

export const ValidationSchema = yup.object({
  FirstName: yup
    .string()
    .min(4, "Minimum Name Length is 4")
    .max(10, "Maximum Length is 10")
    .required("Please Enter Name"),
  Gender: yup.string().required(),
});
