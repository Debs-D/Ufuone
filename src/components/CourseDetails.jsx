import { useParams } from "react-router-dom";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import ButtonNavbar from "../components/ButtonNavbar";

import robImg from "../assets/images/image_fx_ (33) 1.svg";

// Sample course data
const courses = [
  {
    id: 1,
    name: "Robotics Online Courses",
    Including: "Including Robotics Kit",
    dis: "Learn Robotics in a hands-on manner by building projects...",
    image: robImg,
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "Animatronics imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an animatronic hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular Robotics (Career Building Course)",
        dis: "Exciting career in Robotics",
        amount: 30000,
      },
    ],
  },
  {
    id: 2,
    name: "Electronic Online Courses",
    Including: "Including Electronic Kit",
    dis: "Learn Electronics in a hands-on manner by building projects...",
    image: robImg,
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "Electronic imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an animatronic hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular Electronic (Career Building Course)",
        dis: "Exciting career in Electronic",
        amount: 15000,
      },
    ],
  },
  {
    id: 3,
    name: "Raspberry Pi Online Courses",
    Including: "Including Raspberry Pi Kit",
    dis: "Learn Raspberry Pi in a hands-on manner by building projects...",
    image: robImg,
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "Raspberry Pi imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build a Raspberry Pi hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular Raspberry Pi (Career Building Course)",
        dis: "Exciting career in Raspberry Pi",
        amount: 25000,
      },
    ],
  },
  {
    id: 4,
    name: "Career Building Online Courses",
    Including: "Including Career Building Kit",
    dis: "Learn Career Building in a hands-on manner by building projects...",
    image: robImg,
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "Career Building imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an animatronic hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular Career Building (Career Building Course)",
        dis: "Exciting career in Career Building",
        amount: 30000,
      },
    ],
  },
  {
    id: 5,
    name: "IoT (Internet of Things) Online Courses",
    Including: "Including Internet of Things Kit",
    dis: "Learn IoT with practical, hands-on projects...",
    image: robImg,
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "IoT imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an animatronic hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular IoT (Career Building Course)",
        dis: "Exciting career in IoT",
        amount: 35000,
      },
    ],
  },
  {
    id: 6,
    name: "Machine Learning Online Courses",
    Including: "Including Machine Learning Kit",
    dis: "Learn Machine Learning in a hands-on manner by building projects...",
    image: robImg,
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "Machine Learning imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an animatronic hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular Machine Learning (Career Building Course)",
        dis: "Exciting career in Machine Learning",
        amount: 30000,
      },
    ],
  },
];

const CourseDetails = () => {
  const { id } = useParams(); // Get course ID from URL params
  const course = courses.find((course) => course.id === parseInt(id));

  const paystackConfig = {
    reference: `txn_${new Date().getTime()}`,
    email: "useremail@example.com",
    amount: course.data[0].amount * 100,
    publicKey: "your-public-key-here", // Replace with your Paystack public key
  };

  const handlePaymentSuccess = (reference) => {
    alert("Payment Successful! Reference: " + reference);
  };

  const handlePaymentClose = () => {
    alert("Payment closed.");
  };

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    projectDescription: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEnroll = (e) => {
    e.preventDefault();
    alert("Enrollment successful! Proceeding to payment...");
  };

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <>
      {/* Render ButtonNavbar */}
      <ButtonNavbar />

      <div className="min-h-screen w-full bg-gray-100 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="col-span-1 lg:col-span-1 bg-white p-8 rounded-lg shadow-xl">
            <img
              src={course.image}
              alt={course.name}
              className="w-full rounded-lg mb-6"
            />
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {course.name}
            </h1>
            <p className="text-lg text-gray-700 mb-3">{course.Including}</p>
            <p className="text-gray-600 mb-6">{course.dis}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
              What You Will Learn
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {course.whatYouLearn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
              Why Build This Project?
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {course.whyBuild.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
              Course Details
            </h2>
            {course.data.map((detail, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {detail.name} - ₦{detail.amount.toLocaleString()}
                </h3>
                <p className="text-gray-600">{detail.dis}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Enrollment Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Enroll Now
            </h2>
            <form onSubmit={handleEnroll}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="text-lg text-gray-700 mb-2">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Age */}
              <div className="mb-4">
                <label htmlFor="age" className="text-lg text-gray-700 mb-2">
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Project Description */}
              <div className="mb-4">
                <label
                  htmlFor="projectDescription"
                  className="text-lg text-gray-700 mb-2"
                >
                  Project Description:
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="text-lg text-gray-700 mb-2">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="text-lg text-gray-700 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label htmlFor="address" className="text-lg text-gray-700 mb-2">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Country */}
              <div className="mb-4">
                <label htmlFor="country" className="text-lg text-gray-700 mb-2">
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* State */}
              <div className="mb-4">
                <label htmlFor="state" className="text-lg text-gray-700 mb-2">
                  State:
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* City */}
              <div className="mb-4">
                <label htmlFor="city" className="text-lg text-gray-700 mb-2">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Paystack Button */}
              <PaystackButton
                {...paystackConfig}
                text="Proceed to Payment"
                className="w-full py-3 bg-red-600 text-white rounded-lg"
                onSuccess={handlePaymentSuccess}
                onClose={handlePaymentClose}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
