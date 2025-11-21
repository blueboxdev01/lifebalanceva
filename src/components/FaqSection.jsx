import { useState } from "react";
import { faqs } from "../constants";
import aboutbg from "../assets/bgAbout.png";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 lg:pb-20"
      style={{
        backgroundImage: `url(${aboutbg})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom",
      }}>
      <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-row py-4 lg:py-15 lg:pb-0 gap-6 lg:gap-16 justify-between items-start">
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-5/6 lg:mx-auto text-n-3 text-left">
          <h2 className="text-3xl lg:text-5xl text-n-3 font-extrabold">
            Quick Answers About Hiring Filipino Virtual Assistants
          </h2>
          <p className="text-n-3 text-lg font-medium">
            Everything you need to know about transforming your business with
            elite Filipino talent.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 bg-n-1 p-4 rounded-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left">
                <span className="text-n-3 text-xl font-bold ">
                  {faq.question}
                </span>
                <span
                  className="text-gray-500 transition-transform duration-200"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-4 text-n-3 text-lg mt-4">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
