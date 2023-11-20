"use client";
import { useState } from "react";

export default function AddnewLead() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    vehicleMakeModel: "",
    year: "",
    condition: "",
    additionalDetails: "",
    address: "",
    city: "",
    stateProvince: "",
    zipCode: "",
    leadSource: "",
    referralSource: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission here or send data to your backend
    // For this example, we'll just log the form data
    console.log("Form Data:", formData);
  };

  return (
    <div
      className="bg-white shadow-lg rounded-md px-8 py-6 mx-auto mt-8 max-w-[90%]"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
        Add New Lead
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label htmlFor={key} className="text-gray-700 font-semibold mb-2">
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              :
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
        <div className="col-span-2 mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full focus:outline-none focus:ring focus:ring-blue-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
