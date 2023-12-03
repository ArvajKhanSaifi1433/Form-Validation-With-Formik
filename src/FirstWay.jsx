import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  userName: yup.string().required("Name is Required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  gender: yup.string().required("Please Fill Gender"),
  hobby: yup.array().min(1).of(yup.string().required()).required(),
  about: yup.string().min(50, "min is 50").max(60, "max is 60").required(),
  date: yup.date().required("please is Enter your date of birth"),
});
function FirstWay() {
  const [first, setfirst] = useState("white");
  return (
    <div className="border p-5" style={{ background: first }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          userName: "",
          password: "",
          gender: "",
          hobby: "",
          about: "",
          Category: "",
          date: "",
          Color: "",
          Range: "",
        }}
        onSubmit={(values) => {
          setfirst(values.Color);
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-3">
          <div>
            <Field
              name="userName"
              type="text"
              placeholder="Enter Name here..."
              className="focus:outline-none border"
            />
            <div className="text-red-600">
              <ErrorMessage name="userName" />
            </div>
          </div>
          <div>
            <Field
              name="password"
              placeholder="Enter Password here..."
              type="password"
              className="focus:outline-none border"
            />
            <div className="text-red-600">
              <ErrorMessage name="password" />
            </div>
          </div>
          <div className="flex gap-1">
            <label htmlFor="">Gender :</label>
            <label htmlFor="MM">Male</label>
            <Field type="radio" value="Male" name="gender" id="MM" />
            <label htmlFor="FM">Female</label>
            <Field type="radio" value="Female" name="gender" id="FM" />
          </div>
          <div className="text-red-700">
            <ErrorMessage name="gender" />
          </div>
          <div className="flex gap-1">
            <label htmlFor="">Hobby :</label>
            <label htmlFor="Hb">cricket</label>
            <Field type="checkbox" value="cricket" name="hobby" id="Hb" />
            <label htmlFor="Ft">football</label>
            <Field type="checkbox" value="football" name="hobby" id="Ft" />
          </div>
          <div className="text-red-700">
            <ErrorMessage name="hobby" />
          </div>
          <div className="flex gap-1">
            <label htmlFor="">About :</label>
            <Field
              name="about"
              as="textarea"
              rows="5"
              className="focus:outline-none border flex-grow resize-none overflow-hidden"
            />
          </div>
          <div className="text-red-700">
            <ErrorMessage name="about" />
          </div>
          <div className="flex gap-1">
            <label htmlFor="">Select Category :</label>
            <Field
              name="Category"
              as="select"
              className="focus:outline-none border flex-grow resize-none overflow-hidden"
            >
              <option value="">Select Category</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Truck">Truck</option>
            </Field>
          </div>
          <Field type="date" name="date" />
          <div className="text-red-700">
            <ErrorMessage name="date" />
          </div>
          <Field type="color" name="Color" />
          <div className="flex gap-1">
            <label htmlFor="">Range</label>
            <Field type="range" name="Range" className="flex-grow" />
          </div>
          <button type="submit" className="border px-4 self-start mx-auto mt-3">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FirstWay;
