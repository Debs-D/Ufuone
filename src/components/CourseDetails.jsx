import { useParams } from "react-router-dom";
import { useState } from "react";
import { PaystackButton } from "react-paystack";

const courses = [
  {
    id: 1,
    name: "Robotics Online Courses",
    Including: "Including Robotics Kit",
    dis: "Learn Robotics in a hands-on manner by building projects...",
    image:
      "https://assets.skyfilabs.com/images/account/description-mechatronics-v1.jpg",
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
    image:
      "https://assets.skyfilabs.com/images/account/description-electrical-v1.jpg",
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
    image:
      "https://assets.skyfilabs.com/images/account/description-mechatronics-v2.jpg",
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "Raspberry Pi  imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an Raspberry Pi  hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular Raspberry Pi  (Career Building Course)",
        dis: "Exciting career in Raspberry Pi ",
        amount: 25000,
      },
    ],
  },
  {
    id: 4,
    name: "Career Building Online Courses",
    Including: "Including Career Building Kit",
    dis: "Learn Career Building in a hands-on manner by building projects...",
    image:
      "https://assets.skyfilabs.com/images/account/description-mechatronics-v1.jpg",
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
    image:
      "https://assets.skyfilabs.com/images/account/description-electronics-v3.jpg",
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "IoT (Internet of Things) imitates human and animal activities like walking, moving arms, and expressions.",
      "Learn to control machines using hand, finger, or facial muscle movements.",
      "Build an animatronic hand that mimics your hand motions.",
    ],
    data: [
      {
        name: "Popular IoT (Internet of Things) (Career Building Course)",
        dis: "Exciting career in IoT (Internet of Things)",
        amount: 35000,
      },
    ],
  },
  {
    id: 6,
    name: "Machine Learning Online Courses",
    Including: "Including Machine Learning Kit",
    dis: "Learn Machine Learning in a hands-on manner by building projects...",
    image:
      "https://assets.skyfilabs.com/images/account/description-mechatronics-v1.jpg",
    whatYouLearn: [
      "Design, fabricate, and control robots using embedded systems.",
      "Understand Arduino architecture and its programming.",
      "Work with servo motors as actuators.",
      "Design and fabricate flex sensors.",
    ],
    whyBuild: [
      "AnimatroMachine Learningnics imitates human and animal activities like walking, moving arms, and expressions.",
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
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  const paystackConfig = {
    reference: `txn_${new Date().getTime()}`,
    email: "useremail@example.com",
    amount: course.data[0].amount * 100,
    publicKey: "your-public-key-here",
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
    <div className="min-h-screen w-full bg-gray-100 p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="col-span-2 bg-white p-6 rounded-l-lg shadow-lg">
          <img
            src={course.image}
            alt={course.name}
            className="w-full rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {course.name}
          </h1>
          <p className="text-lg text-gray-700 mb-2">{course.Including}</p>
          <p className="text-gray-600 mb-4">{course.dis}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            What You will Learn
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
        <div className="bg-white p-6 rounded-r-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Enrollment Form
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleEnroll}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Your Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email{" "}
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number{" "}
              </label>
              <input
                type="phonenumber"
                name="phone number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                city of residence{" "}
              </label>
              <input
                type="text"
                name="city"
                value={formData.cityofresidence}
                onChange={handleInputChange}
                placeholder="Enter your city"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Describe your project"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
            >
              Enroll Now
            </button>
            <PaystackButton
              {...paystackConfig}
              onSuccess={handlePaymentSuccess}
              onClose={handlePaymentClose}
              className="mt-4 w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
