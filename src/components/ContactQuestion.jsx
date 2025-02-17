import { useState } from "react";
import img1 from "../assets/images/Frame 119.svg";
import img2 from "../assets/images/Frame 120.svg";
import img3 from "../assets/images/Frame 121.svg";

const ContactQuestion = () => {
  // State to track which question is active
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Data for questions and answers
  const faqData = [
    {
      imgUrl: img1,
      question: "Can I learn virtually?",
      answer:
        "We offer engaging STEM lessons online through live classes, interactive tools, and self-paced modules—making learning accessible from anywhere.",
    },
    {
      imgUrl: img2,
      question: "Do you provide tutorials?",
      answer:
        "Yes, we provide tutorials that are tailored to help learners excel in their respective fields of interest.",
    },
    {
      imgUrl: img3,
      question: "What age groups can learn with Ufuon?",
      answer:
        "Our programs are designed for all age groups, ensuring that learning is inclusive and effective for everyone.",
    }, 
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center p-8 mb-10">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 mb-32">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg bg-gray-100 transition-transform duration-300"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() =>
                setActiveQuestion(activeQuestion === index ? null : index)
              }
            >
              <div className="flex items-center gap-4">
                <img src={item.imgUrl} alt="icon" className="w-8 h-8" />
                <h3 className="text-lg font-medium">{item.question}</h3>
              </div>
              {/* Icon for dropdown */}
              <div
                className={`transform ${
                  activeQuestion === index ? "rotate-180" : ""
                } transition-transform duration-300`}
              >
                ▼
              </div>
            </div>
            {/* Answer text */}
            {activeQuestion === index && (
              <p className="mt-4 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactQuestion;
