import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from '../assets/images/workshop.webp';
import Header from "./Header";

const RegisterWorkshop = () => {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        category: "",
        description: "",
        additionalInfo: "",
        projectType: "",
        requestType: "workshop project",
        details:'',
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
          navigate('/');
        }
      };


  return (

   <>
  <div className="mb-10">
  <Header />

  </div>

<div className="min-h-screen flex flex-col justify-center items-center bg-white px-8 ">
         <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden justify-center max-sm:flex-col-reverse">
           <div className="lg:w-1/2 w-full p-10">

             <h2 className="text-2xl font-bold mb-6">Register Your Workshop</h2>

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
               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition" onClick={handleSubmit}>
                 Submit
               </button>
             </form>
           </div>
   
           {/* Right section with image and message */}
           <div className="lg:w-1/2 h-full w-full py-16 px-5 mt-24 flex flex-col items-center gap-4 max-md:px-16">
             <img src={img} alt="Enrollment Illustration" className="bg-white border-black border-2 rounded-md" />
             <div className="pt-10 flex flex-col gap-2 h-80">
               <h1 className="text-3xl">Register Your Workshop Project</h1>
               <p>Bring your innovative ideas to life! Register your workshop project and showcase your creativity, problem-solving skills, and technical expertise. Whether its a tech-driven solution, an educational initiative, or a community-focused project, we&apos;re excited to support your vision.</p>
             </div>
           </div>
         </div>
       </div>
   
   
   
   </>
  )
}

export default RegisterWorkshop
