import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import vector from '../assets/Depression/vector_treatments.png';


const faqs = [
  {
    question: "1. What is schizophrenia and what are its symptoms?",
    answer:
      "Schizophrenia is a chronic mental disorder affecting thoughts, emotions, and behavior. Symptoms include hallucinations, delusions, disorganized speech, and lack of motivation.",
  },
  {
    question: "2. What are the different types of schizophrenia?",
    answer:
      "Types include paranoid, disorganized, catatonic, undifferentiated, and residual schizophrenia, each with distinct symptom patterns.",
  },
  {
    question: "3. How is schizophrenia diagnosed?",
    answer:
      "Diagnosis involves clinical evaluation, psychiatric assessment, and ruling out other conditions, often using DSM-5 criteria.",
  },
  {
    question: "4. What treatments are available for schizophrenia?",
    answer:
      "Treatments include antipsychotic medications, psychotherapy, social skills training, and coordinated specialty care.",
  },
  {
    question: "5. What are the early warning signs of schizophrenia?",
    answer:
      "Early signs may include social withdrawal, unusual thoughts, confusion, reduced emotional expression, and trouble focusing.",
  },
  {
    question: "6. How can schizophrenia be managed long-term?",
    answer:
      "Long-term management includes medication adherence, regular therapy, supportive housing, and family involvement.",
  },
  {
    question: "7. Is schizophrenia hereditary?",
    answer:
      "Yes, genetics play a role. Having a close relative with schizophrenia increases the risk, though it’s not guaranteed.",
  },
  {
    question: "8. What is the difference between schizophrenia and schizoaffective disorder?",
    answer:
      "Schizoaffective disorder includes symptoms of schizophrenia along with mood disorder symptoms like depression or mania.",
  },
  {
    question: "9. Where can I find the best schizophrenia treatment centers in India?",
    answer:
      "You can search online directories, visit hospitals with psychiatry departments, or consult psychiatrists on platforms like Practo.",
  },
  {
    question: "10. What are the latest advancements in schizophrenia treatment?",
    answer:
      "New treatments include long-acting injectable antipsychotics, digital therapy tools, and research into targeted brain stimulation.",
  },
];


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white pb-8 sm:pb-20 px-6 max-w-7xl mx-auto relative">
      <h1 className="text-center text-[32px] font-extrabold text-[#183B82] mb-10">
        Curious? Start Here.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto sm:mb-20">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                aria-expanded={isActive}
                aria-controls={`faq${index}`}
                id={`faq${index}-btn`}
                className={`w-full text-left flex justify-between items-center py-4 px-6 text-base font-normal cursor-pointer transition-colors duration-300 ${
                  isActive ? "bg-[#183b82] text-white" : "text-black"
                }`}
              >
                <span className="w-full pr-4">{faq.question}</span>
                <span
                  className={`w-11 h-10 rounded-full bg-white ${
                    isActive ? "text-[#183b82]" : "bg-[#183b82] text-[#183b82]"
                  } flex items-center justify-center transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>

              {/* Toggle answer visibility */}
              <div
                id={`faq${index}`}
                role="region"
                aria-labelledby={`faq${index}-btn`}
                className={`px-6 text-[15px] text-gray-700 border-t border-gray-300 transition-all duration-300 ${
                  isActive ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
        <img
        src={vector}
        alt="Gradient divider"
        className=" hidden sm:block w-full h-auto absolute bottom-[-180px] left-10 z-0"
      />
      </div>
    </div>
  );
};

export default FAQSection;
