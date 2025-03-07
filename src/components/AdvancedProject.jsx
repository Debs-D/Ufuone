import { useState } from "react";
import { PaystackButton } from "react-paystack";
import PropTypes from "prop-types";
import img from "../assets/images/Group 48.svg";
import ButtonNavbar from "../components/ButtonNavbar";
import { useNavigate } from "react-router-dom";

// Reusable FormInput component
const FormInput = ({ id, label, type, value, onChange, required }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-lg text-gray-700 mb-2">
      {label}:
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required={required}
    />
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

const AdvancedProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    projectType: "",
    category: "",
    projectDescription: "",
    otherInfo: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://api.com/data", {
        method: "POST", // Define the request method
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify(formData), // Convert formData to a JSON string
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      const result = await response.json();
      console.log("Success:", result);
      navigate("/success"); // Redirect after success
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  

  const handlePaymentSuccess = () => {
    // Payment success logic
  };

  const handlePaymentClose = () => {
    // Payment close logic
  };


  const paystackConfig = {
    email: formData.email,
    amount: 1000, // Example amount
    publicKey: "your-public-key",
  };

  return (
    <>
      <ButtonNavbar />
      <button
        onClick={() => navigate(-1)} // This will take the user to the previous page
        className="p-4 bg-orange-700 hover:bg-orange-500 text-white rounded-lg ml-5 mt-3  left-4 flex items-center justify-center"
      >
        <span className="text-xl">&larr;</span> {/* Left Arrow */}
      </button>

      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-8 ">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          {/* Form Section */}
          <div className="lg:w-1/2 w-full p-10">
            <form onSubmit={handleEnroll} className="space-y-4">
              <FormInput
                id="projectType"
                label="Type of Project"
                type="text"
                value={formData.projectType}
                onChange={handleInputChange}
                required
              />
              <FormInput
                id="name"
                label="Name of Project"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <FormInput
                id="category"
                label="Category of Project"
                type="text"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Description of the Project:
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="w-full  bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="otherInfo"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Any Other Information:
                </label>
                <textarea
                  id="otherInfo"
                  name="otherInfo"
                  value={formData.otherInfo}
                  onChange={handleInputChange}
                  className="w-full  bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              </div>
              <PaystackButton
                {...paystackConfig}
                text="Proceed to Payment"
                className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                onSuccess={handlePaymentSuccess}
                onClose={handlePaymentClose}
              />
            </form>
          </div>
          {/* Image Section */}
          <div className=" bg-white">
            <img
              src={img}
              alt="Enrollment Illustration"
              className=" bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedProject;
