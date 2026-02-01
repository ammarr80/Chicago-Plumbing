import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const faqs = [
    {
      question: "What types of services do you offer?",
      answer:
        "We provide a wide range of services to meet your needs, including installation, maintenance, and repair solutions. Each service is delivered by skilled professionals using the latest techniques.",
      open: "plus",
      close: "minus",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, our team is available for urgent service needs. We respond quickly and efficiently to minimize downtime and address issues safely and effectively.",
      open: "plus",
      close: "minus",
    },
    {
      question: "How do you ensure high-quality results?",
      answer:
        "Every project is handled with precision and care. Our team follows strict quality protocols, uses professional-grade tools, and focuses on delivering lasting and reliable results.",
      open: "plus",
      close: "minus",
    },
    {
      question: "Are your services customizable?",
      answer:
        "Absolutely. We tailor our solutions to your specific requirements. From scheduling to service scope, we work closely with you to ensure the outcome meets your expectations.",
      open: "plus",
      close: "minus",
    },
    {
      question: "Do you provide transparent pricing?",
      answer:
        "Yes. We offer clear, upfront estimates and detailed explanations of our services. You will always know what to expect without hidden fees or surprises.",
      open: "plus",
      close: "minus",
    },
    {
      question: "How do you prioritize customer satisfaction?",
      answer:
        "Customer satisfaction is at the heart of our services. We focus on communication, professionalism, and quality to ensure each client has a smooth and positive experience.",
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
