import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img from '../assets/images/image_fx_ (33) 1.svg';

const Register = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const source = params.get('source');

  let message;
  switch (source) {
    case 'offer1':
      message = {
        header: 'Build it Yourself',
        body: 'Get access to schematics, component designs, and all the relevant information you need to build your project independently.'
      };
      break;
    case 'offer2':
      message = {
        header: 'Let Us Build it for You',
        body: 'Leave the hard work to us! We’ll build your project from start to finish, tailored to your needs.'
      };
      break;
    case 'offer3':
      message = {
        header: 'Let’s Build it Together',
        body: 'Collaborate with an expert assistant to bring your project to life while gaining hands-on experience.'
      };
      break;
    default:
      message = { header: 'Register for a Project', body: '' };
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    description: "",
    additionalInfo: "",
    projectType: "",
    requestType: "project",
    amount: "",
    payment: "",
    details: message.body,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://exam-end.herokuapp.com/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      const result = await response.json();
      console.log("Success:", result);

      navigate("/success");
    } catch (error) {
      console.error("Error submitting data:", error);
      navigate('/high-level');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden justify-center">
        <div className="lg:w-1/2 w-full p-10">
          <h2 className="text-2xl font-bold mb-6">Register Your Project</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name of Project</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Type of Project</label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Category of Project</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Description of Project</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
              <input
                type="text"
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right section with image and message */}
        <div className="lg:w-1/2 h-full w-full py-16 px-5 mt-24 flex flex-col items-center gap-4 max-md:px-16">
          <img src={img} alt="Enrollment Illustration" className="bg-white border-black border-2 rounded-md" />
          <div className="pt-10 flex flex-col gap-2 h-80">
            <h1 className="text-3xl">{message.header}</h1>
            <p>{message.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;