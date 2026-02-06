import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [currentIndex, setCurrentIndex] = useState(null);

 const faqs = [
  {
    question: "Which areas do you serve?",
    answer:
      "We provide plumbing services across multiple neighborhoods in Chicago. Each location receives fast, professional, and reliable service from our local team.",
    open: "plus",
    close: "minus",
  },
  {
    question: "Do you offer emergency services in all locations?",
    answer:
      "Yes. Our emergency plumbing team responds quickly to urgent issues in every service area, minimizing damage and restoring plumbing safely and efficiently.",
    open: "plus",
    close: "minus",
  },
  {
    question: "Are your plumbers familiar with local buildings?",
    answer:
      "Absolutely. Our team has extensive experience working in apartments, condos, and older homes in each neighborhood, ensuring safe and effective repairs.",
    open: "plus",
    close: "minus",
  },
  {
    question: "Can I schedule service in my specific neighborhood?",
    answer:
      "Yes. You can book services for your area directly, and our local team will arrive on time with the right tools to handle the job efficiently.",
    open: "plus",
    close: "minus",
  },
  {
    question: "Do you offer transparent pricing for each location?",
    answer:
      "Yes. We provide clear upfront pricing for every service in every neighborhood, so you know exactly what to expect without surprises.",
    open: "plus",
    close: "minus",
  },
  {
    question: "How do you ensure high-quality service locally?",
    answer:
      "Each location is supported by experienced plumbers who follow strict quality protocols. Our focus is on reliable, long-lasting solutions for every client.",
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
            Our services are designed to deliver quality, efficiency, and
            reliability. Each project is handled by experienced professionals
            who focus on achieving excellent results while keeping the process
            smooth and transparent. Here are some common questions our clients
            ask.
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
