import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const faqs = [
    {
      question: "How do you ensure the quality of your plumbing work?",
      answer:
        "Every project is handled by skilled professionals who follow strict safety and quality protocols. We pay attention to detail to deliver reliable and long-lasting results.",
      open: "plus",
      close: "minus",
    },
    {
      question: "Do you offer emergency plumbing services?",
      answer:
        "Yes, we provide prompt response for urgent plumbing needs. Our team arrives quickly and works efficiently to resolve issues while maintaining safety and quality.",
      open: "plus",
      close: "minus",
    },
    {
      question: "How do you handle complex plumbing problems?",
      answer:
        "Our experienced plumbers assess each situation carefully and apply proven techniques. We prioritize accuracy, safety, and efficiency to provide lasting solutions.",
      open: "plus",
      close: "minus",
    },
    {
      question: "Are your services transparent and trustworthy?",
      answer:
        "Absolutely. We maintain clear communication, provide honest estimates, and explain each step of the work. Our goal is to ensure a smooth, reliable experience.",
      open: "plus",
      close: "minus",
    },
    {
      question: "Do you follow safety protocols on every job?",
      answer:
        "Yes. Safety is a top priority on all our projects. Our team uses proper protective equipment and follows industry standards to keep every site safe.",
      open: "plus",
      close: "minus",
    },
    {
      question: "What makes your plumbing services reliable?",
      answer:
        "Our combination of skilled professionals, attention to detail, and efficient processes ensures dependable results. Every job is completed thoroughly and carefully for your peace of mind.",
      open: "plus",
      close: "minus",
    },
  ];

  return (
    <>
      <section id="faqs" className="max-w-[90%] mx-auto mb-26">
        <div>
          <h2 className="font-bold text-4xl mb-5">What People Ask</h2>
          <p className="text-gray-600 md:max-w-[80ch] max-w-[60ch] leading-normal mb-3 text-base mb-14">
            Our plumbing services are built on trust, skill, and attention to
            detail. Every task is handled by qualified professionals who work
            efficiently and safely. We keep our approach honest and direct,
            delivering consistent results and a smooth experience for every
            customer.
          </p>
        </div>

        <div className="faqs-container max-w-[80%] mx-auto space-y-4 max-md:max-w-[100%]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white px-6 py-4 rounded-lg shadow-sm max-md:px-4 max-md:py-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg max-md:text-base">
                  {faq.question}
                </h3>

                <button
                  className="plus cursor-pointer"
                  onClick={() =>
                    setCurrentIndex(currentIndex != index ? index : null)
                  }
                >
                  {currentIndex == index ? (
                    <Minus />
                  ) : (
                    <Plus className="w-7 h-7" />
                  )}
                </button>
              </div>

              <div>
                {currentIndex == index && (
                  <p className="text-base tracking-wide leading-normal mt-5 max-md:text-sm text-gray-600 faqs-p">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
