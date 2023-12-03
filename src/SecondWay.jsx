import { useFormik } from "formik";
import React from "react";
import { ValidationSchema } from "./schemas/ValidationSchema";

function SecondWay() {
  const { errors, values, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: false
      ? {
          FirstName: "",
          Range: "",
          Gender: "",
          Hobby: "",
          Select: "",
          Feedback: "",
          Data: "",
        }
      : {
          FirstName: "rvaj",
          Range: "32",
          Gender: "male",
          Hobby: "",
          Select: "",
          Feedback: "",
          Data: "",
        },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      className="max-w-sm border p-4 mx-auto rounded-md mt-10 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-1 flex-col">
        <div>
          <label htmlFor="FirstName">Name : </label>
          <input
            name="FirstName"
            value={values.FirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            id="FirstName"
            className="border focus:outline-none border-black flex-grow p-1"
          />
        </div>
        {<p className="text-red-500 text-sm">{errors.FirstName}</p>}
      </div>
      <div className="flex gap-2">
        <label htmlFor="gender">Gender : </label>
        <label htmlFor="Male">Male</label>
        <input
          id="Male"
          type="radio"
          value="male"
          name="Gender"
          onChange={handleChange}
          defaultChecked={values.Gender === "male"}
        />
        <label htmlFor="Female">Female</label>
        <input
          id="Female"
          type="radio"
          value="female"
          name="Gender"
          onChange={handleChange}
          defaultChecked={values.Gender === "female"}
        />
      </div>
      {<p className="text-sm text-red-500">{errors.Gender}</p>}
      <div className="flex gap-2">
        <label htmlFor="hobby">Hobbies : </label>
        <label htmlFor="cricket">cricket</label>
        <input
          id="cricket"
          type="checkbox"
          value="cricket"
          name="Hobby"
          onChange={handleChange}
          defaultChecked={values.Hobby === "cricket"}
        />
        <label htmlFor="football">football</label>
        <input
          id="football"
          type="checkbox"
          value="football"
          name="Hobby"
          onChange={handleChange}
          defaultChecked={values.Hobby === "football"}
        />
        <label htmlFor="coding">coding</label>
        <input
          id="coding"
          type="checkbox"
          value="coding"
          name="Hobby"
          onChange={handleChange}
          defaultChecked={values.Hobby === "coding"}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="Range">{values.Range || 0}%</label>
        <input
          type="range"
          name="Range"
          className="w-full"
          id="Range"
          max="200"
          value={values.Range || 0}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="selectCategory">Category :</label>
        <select
          name="Select"
          id="selectCategory"
          className="border focus:outline-none"
          value={values.Select}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="airPlane">airPlane</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="about">About</label>
        <span>:</span>
        <textarea
          name="Feedback"
          id="about"
          rows="5"
          value={values.Feedback}
          onChange={handleChange}
          className="border w-full resize-none"
        ></textarea>
      </div>
      <div className="flex gap-2">
        <label htmlFor="date">Data : </label>
        <input
          type="date"
          name="Data"
          id="data"
          value={values.Data}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" className="border px-4 py-1.5">
          Submit Data
        </button>
      </div>
    </form>
  );
}

export default SecondWay;
