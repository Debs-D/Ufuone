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
    {
      imgUrl: img3,
      question: "What is Ufuon?",
      answer: "Ufuon is a leading provider of electronics, robotics, and tech solutions in Africa. We aim to empower individuals, businesses, and communities through innovative technology."
    },
    {
      imgUrl: img3,
      question: "What products and services does Ufuon offer?",
      answer:
        "Ufuon offers a wide range of products, including electronics components, robotics kits, and tech gadgets. We also provide services such as training, workshops, and consulting.",
    },
    {
      imgUrl: img3,
      question: "What age groups can learn with Ufuon?",
      answer:
        "Our programs are designed for all age groups, ensuring that learning is inclusive and effective for everyone.",
    },
    {
      imgUrl: img3,
      question: "Where is Ufuon located",
      answer:
        "Ufuon is headquartered in 11 Barba Street, Ohakwe Junction, Rumuigbo, Port Harcourt, with operations and partnerships across Africa."
    },
    {
      imgUrl: img3,
      question: "What types of electronics components do you sell?",
      answer:
        "We sell a variety of electronics components, including Arduino, Raspberry Pi, sensors, motors, and more.",
    },
    {
      imgUrl: img3,
      question: "Do you offer customized robotics solutions?",
      answer:
        "Yes, our team of experts can design and develop customized robotics solutions for businesses and individuals.",
    },
    {
      imgUrl: img3,
      question: "What kind of training programs do you offer?",
      answer:
        "We offer training programs in electronics, robotics, and programming, tailored for individuals, schools, and businesses.",
    },
    {
      imgUrl: img3,
      question: "How do I place an order?",
      answer:
        "You can place an order online through our online store (store.ufuon.com) or by contacting our sales team directly.",
    },
    {
      imgUrl: img3,
      question: " What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, bank transfers, and mobile payments.",
    },
    {
      imgUrl: img3,
      question: "Do you offer delivery?",
      answer:
        "Yes, we offer delivery services across Africa. Please contact us for more information on delivery rates and estimated delivery times.",
    },
    {
      imgUrl: img3,
      question: ". How do I get technical support?",
      answer:
        "You can contact our technical support team through our website, email, or phone",
    },
    {
      imgUrl: img3,
      question: "What kind of technical support do you offer?",
      answer:
        "We offer technical support for all our products and services, including troubleshooting, repairs, and maintenance",
    },
    {
      imgUrl: img3,
      question: "Do you have a warranty policy?",
      answer:
        "Yes, we offer a warranty policy for our products. Please contact us for more information on our warranty terms and conditions.",
    },
    {
      imgUrl: img3,
      question: " Can I partner with Ufuon?",
      answer:
        "Yes, we welcome partnerships with businesses, organizations, and individuals who share our vision and values.",
    },
    {
      imgUrl: img3,
      question: " Do you have a community program?",
      answer:
        "Yes, we have a community program that aims to promote STEM education and innovation across Africa. Please contact us for more information on our programs and community.",
    },
    {
      imgUrl: img3,
      question: "How can I get involved with Ufuon's community program?",
      answer:
        "You can get involved by contacting us through our website or social media channels. We welcome volunteers, mentors, and sponsors.",
    },
    {
      imgUrl: img3,
      question: "What is your shipping policy?",
      answer:
        "We offer shipping across Africa. Please contact us for more information on shipping rates and estimated delivery times.",
    },
    {
      imgUrl: img3,
      question: "Can I track my order?",
      answer:
        "We take great care in packaging and shipping our products. However, if your order is lost or damaged during shipping, please contact us and we will work with you to resolve the issue.",
    },
    {
      imgUrl: img3,
      question: "What happens if my order is lost or damaged during shipping?",
      answer:
        "Yes, we have a community program that aims to promote STEM education and innovation across Africa. Please contact us for more information on our programs and community.",
    },
    {
      imgUrl: img3,
      question: "Can I return a product?",
      answer:
        "Yes, you can return a product within 7 - 14 days of delivery depending on the nature of the item. Please contact us for more information on our return policy.",
    },
    {
      imgUrl: img3,
      question: "How do I initiate a return?",
      answer:
        "To initiate a return, please contact us through our website or email and provide your order number and reason for return",
    },
    {
      imgUrl: img3,
      question: "What is your refund policy?",
      answer:
        "We offer refunds for returned products. Please contact us for more information on our refund policy.",
    },
    {
      imgUrl: img3,
      question: "What payment methods do you accept?",
      answer:
        "Yes, we have a community program that aims to promote STEM education and innovation across Africa. Please contact us for more information on our programs and community.",
    },
    {
      imgUrl: img3,
      question: "What kind of technical support do you offer?",
      answer:
        "We accept various payment methods, including credit/debit cards, bank transfers, and mobile payments.",
    },
    {
      imgUrl: img3,
      question: "What kind of technical support do you offer?",
      answer:
        "Yes, we have a community program that aims to promote STEM education and innovation across Africa. Please contact us for more information on our programs and community.",
    },
    {
      imgUrl: img3,
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes, we occasionally offer discounts or promotions. Please sign up for our newsletter or follow us on social media to stay informed.",
    },
    {
      imgUrl: img3,
      question: "How do you handle sales tax and VAT?",
      answer:
        "We handle sales tax and VAT in accordance with local regulations. Please contact us for more information.",
    },
    {
      imgUrl: img3,
      question: " How do I troubleshoot a technical issue?",
      answer:
        "Please contact our technical support team through our website or email and provide a detailed description of the issue.",
    },
    {
      imgUrl: img3,
      question: "Do you offer repair services?",
      answer:
        "Yes, we offer repair services for our products. Please contact us for more information.",

    },
    {
      imgUrl: img3,
      question: "Can I get a replacement for a defective product?",
      answer:
        "Yes, we offer replacements for defective products. Please contact us for more information.",
        
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
