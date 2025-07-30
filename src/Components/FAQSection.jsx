
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "1. What is schizophrenia and what are its symptoms?",
    answer:
      "Schizophrenia is a long-term mental health condition that affects how a person thinks, feels, and behaves. Common symptoms include hallucinations (seeing or hearing things that aren't there), delusions (false beliefs), disorganized speech, and difficulty with daily functioning.",
  },
  {
    question: "2. How can I find a depression psychiatrist near me?",
    answer:
      "You can start by checking online doctor directories like Practo or Lybrate, asking your general physician for a referral, or visiting nearby hospitals and mental health clinics.",
  },
  {
    question: "3. What are the different types of depression?",
    answer:
      "There are several forms, including major depressive disorder, persistent depressive disorder (dysthymia), bipolar disorder, seasonal affective disorder (SAD), and postpartum depression, each with its own symptoms and duration.",
  },
  {
    question: "4. What are the signs and symptoms of major depression?",
    answer:
      "Common signs include constant sadness, lack of interest in usual activities, sleep disturbances, low energy, difficulty concentrating, and feelings of hopelessness or guilt.",
  },
  {
    question: "5. How can I help someone with depression?",
    answer:
      "Be supportive and present. Listen without judgment, encourage them to speak with a professional, and offer help with small tasks. Just being there can make a big difference.",
  },
  {
    question: "6. What are the best therapy options for treating depression?",
    answer:
      "Popular and effective therapies include cognitive-behavioral therapy (CBT), interpersonal therapy (IPT), and psychodynamic therapy. The right therapy depends on the individual's needs.",
  },
  {
    question: "7. Where can I find depression treatment centers near me?",
    answer:
      "You can search on Google Maps, health directories, or contact local hospitals for recommendations. If you have health insurance, they can also guide you to covered centers.",
  },
  {
    question: "8. Can depression be treated without medication?",
    answer:
      "Yes, in many cases therapy, exercise, mindfulness practices, and lifestyle changes can help. However, severe depression might still require a combination of therapy and medication.",
  },
  {
    question: "9. What are the signs of depression in teens?",
    answer:
      "Teens may show symptoms like irritability, social withdrawal, changes in sleep or appetite, low motivation, and poor academic performance. Emotional changes are often more noticeable than sadness.",
  },
  {
    question: "10. How do I know if I need inpatient care for depression?",
    answer:
      "If you're experiencing severe depression, suicidal thoughts, or are unable to manage daily life safely, inpatient care provides a structured and supportive environment to help stabilize your condition.",
  },
];


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white pb-14 sm:pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-center text-[32px] font-extrabold text-[#183B82] mb-10">
        Curious? Start Here.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white overflow-hidden transition-all duration-300"
              style={{
                height: isActive ? "180px" : "72px",
              }}
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
                className={`w-full text-left flex justify-between items-center py-4 px-6 text-base font-normal cursor-pointer h-[72px] transition-colors duration-300 ${
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

              <div
                id={`faq${index}`}
                role="region"
                aria-labelledby={`faq${index}-btn`}
                className={`transition-opacity duration-300 px-6 text-[15px] text-gray-700 border-t border-gray-300 ${
                  isActive ? "opacity-100 pt-4" : "opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
