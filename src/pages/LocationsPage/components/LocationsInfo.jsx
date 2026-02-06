import image from "../pics/locations-hero.jpg";
import {
  Menu,
  Mail,
  Plus,
  Minus,
  Check,
  CheckCircle,
  Star,
  Trash,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../../reusbaleUi/PrimaryButton";
import { useState, useEffect, useRef } from "react";
import Footer from "../../../reusbaleUi/Footer";

const data = [
  {
    title: "Lincoln Park",
    description:
      "We provide fast and reliable plumbing services throughout Lincoln Park for apartments, homes, and older buildings in the area.",
    slug: "lincoln-park",
    benefits: [
      "Fast local service",
      "Older pipe experience",
      "Licensed plumbers",
      "Clear pricing",
      "Reliable repairs",
    ],
    reviews: [
      {
        text: "Quick service and very professional work.",
        name: "Alex, Lincoln Park",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Arrived fast and fixed everything.",
        name: "Sarah, Lincoln Park",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Very reliable local plumbers.",
        name: "John, Lincoln Park",
        job: "Landlord",
        rating: 5,
      },
      {
        text: "Great service from start to finish.",
        name: "Michael, Lincoln Park",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you provide plumbing services throughout Lincoln Park?",
        answer:
          "Yes. We serve all residential and commercial properties across Lincoln Park with fast response and professional plumbing solutions.",
      },
      {
        question: "Are you familiar with older plumbing systems in this area?",
        answer:
          "Yes. Many buildings in Lincoln Park have older pipe systems and we have experience repairing and maintaining them safely.",
      },
      {
        question: "Do you offer emergency plumbing in Lincoln Park?",
        answer:
          "Yes. Our team is available for emergency plumbing services day and night throughout the neighborhood.",
      },
    ],
  },

  {
    title: "Wicker Park",
    description:
      "We deliver professional plumbing services across Wicker Park for apartments, condos, and residential properties.",
    slug: "wicker-park",
    benefits: [
      "Quick local service",
      "Familiar with homes",
      "Experienced plumbers",
      "Clear pricing",
      "Reliable work",
    ],
    reviews: [
      {
        text: "Fast response and great service.",
        name: "Maya, Wicker Park",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Very clean and professional work.",
        name: "Omar, Wicker Park",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Solved the issue quickly.",
        name: "Leah, Wicker Park",
        job: "Manager",
        rating: 5,
      },
      {
        text: "Friendly and reliable plumbers.",
        name: "Daniel, Wicker Park",
        job: "Homeowner",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "Do you serve all of Wicker Park?",
        answer:
          "Yes. We provide plumbing services throughout Wicker Park and surrounding residential areas.",
      },
      {
        question: "Do you work in apartments and condos?",
        answer:
          "Yes. We regularly service apartments, condos, and single-family homes in the neighborhood.",
      },
      {
        question: "Can you respond quickly to plumbing emergencies?",
        answer:
          "Yes. Our local team is able to respond fast to emergency plumbing calls in Wicker Park.",
      },
    ],
  },

  {
    title: "Lakeview",
    description:
      "We offer dependable plumbing services in Lakeview for homes, apartments, and multi-unit properties.",
    slug: "lakeview",
    benefits: [
      "Fast local service",
      "Familiar with buildings",
      "Experienced plumbers",
      "Clear pricing",
      "Reliable repairs",
    ],
    reviews: [
      {
        text: "Very fast and professional.",
        name: "Aisha, Lakeview",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Fixed everything in one visit.",
        name: "Daniel, Lakeview",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Great local service.",
        name: "Fatima, Lakeview",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Highly recommend them.",
        name: "Thomas, Lakeview",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you provide plumbing services across Lakeview?",
        answer:
          "Yes. We serve all residential and commercial properties throughout Lakeview.",
      },
      {
        question: "Are you experienced with multi-unit buildings?",
        answer:
          "Yes. Many Lakeview properties are multi-unit buildings and we regularly work on these systems.",
      },
      {
        question: "Do you offer emergency plumbing services here?",
        answer:
          "Yes. Emergency plumbing services are available throughout Lakeview at all times.",
      },
    ],
  },

  {
    title: "Hyde Park",
    description:
      "We provide trusted plumbing services in Hyde Park for residential homes and apartment buildings.",
    slug: "hyde-park",
    benefits: [
      "Fast local service",
      "Older pipe experience",
      "Licensed plumbers",
      "Clear pricing",
      "Reliable repairs",
    ],
    reviews: [
      {
        text: "Very professional local plumbers.",
        name: "Ravi, Hyde Park",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Quick and clean work.",
        name: "Emily, Hyde Park",
        job: "Homeowner",
        rating: 4,
      },
      {
        text: "Solved multiple issues fast.",
        name: "Jamal, Hyde Park",
        job: "Manager",
        rating: 5,
      },
      {
        text: "Everything works perfectly now.",
        name: "Kevin, Hyde Park",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you service homes and apartments in Hyde Park?",
        answer:
          "Yes. We work with both residential houses and apartment buildings throughout Hyde Park.",
      },
      {
        question: "Are you familiar with older plumbing systems here?",
        answer:
          "Yes. Many properties in Hyde Park have older pipes that require experienced handling.",
      },
      {
        question: "Is emergency plumbing available in Hyde Park?",
        answer:
          "Yes. Our team offers emergency plumbing services throughout the area.",
      },
    ],
  },

  {
    title: "Logan Square",
    description:
      "We deliver fast plumbing services across Logan Square for residential and multi-unit properties.",
    slug: "logan-square",
    benefits: [
      "Quick local service",
      "Familiar with homes",
      "Experienced plumbers",
      "Clear pricing",
      "Reliable work",
    ],
    reviews: [
      {
        text: "Fast response and great service.",
        name: "Grace, Logan Square",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Very reliable local plumbers.",
        name: "Omar, Logan Square",
        job: "Landlord",
        rating: 5,
      },
      {
        text: "Fixed everything quickly.",
        name: "Leila, Logan Square",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Great workmanship overall.",
        name: "Brian, Logan Square",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you provide plumbing services in Logan Square?",
        answer:
          "Yes. We serve all residential and commercial properties in Logan Square.",
      },
      {
        question: "Do you handle apartments and houses here?",
        answer:
          "Yes. We regularly work with both apartments and single-family homes.",
      },
      {
        question: "Can you respond quickly to emergencies?",
        answer:
          "Yes. Our team responds fast to emergency plumbing calls in Logan Square.",
      },
    ],
  },

  {
    title: "River North",
    description:
      "We provide professional plumbing services in River North for condos, apartments, and commercial properties.",
    slug: "river-north",
    benefits: [
      "Fast city response",
      "Condo experience",
      "Licensed plumbers",
      "Upfront pricing",
      "Trusted service",
    ],
    reviews: [
      {
        text: "Very professional downtown service.",
        name: "Nora, River North",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Fast and reliable plumbers.",
        name: "Imran, River North",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Handled everything smoothly.",
        name: "Samantha, River North",
        job: "Manager",
        rating: 4,
      },
      {
        text: "Great work in our condo.",
        name: "David, River North",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you work in high-rise buildings in River North?",
        answer:
          "Yes. We regularly service condos and high-rise properties in River North.",
      },
      {
        question: "Are emergency services available downtown?",
        answer:
          "Yes. We provide emergency plumbing services throughout River North.",
      },
      {
        question: "Do you service commercial properties here?",
        answer:
          "Yes. We work with both residential and commercial buildings in the area.",
      },
    ],
  },

  {
    title: "South Loop",
    description:
      "We offer reliable plumbing services in South Loop for apartments, condos, and residential properties.",
    slug: "south-loop",
    benefits: [
      "Fast local service",
      "Familiar with buildings",
      "Experienced plumbers",
      "Clear pricing",
      "Reliable repairs",
    ],
    reviews: [
      {
        text: "Quick and professional service.",
        name: "Grace, South Loop",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Very clean work.",
        name: "Omar, South Loop",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Solved our plumbing issues fast.",
        name: "Leila, South Loop",
        job: "Manager",
        rating: 4,
      },
      {
        text: "Great experience overall.",
        name: "Brian, South Loop",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you serve all of South Loop?",
        answer:
          "Yes. We provide plumbing services throughout South Loop and nearby areas.",
      },
      {
        question: "Do you work in condo buildings here?",
        answer:
          "Yes. Many South Loop properties are condos and apartments we regularly service.",
      },
      {
        question: "Is emergency plumbing available in South Loop?",
        answer:
          "Yes. Emergency plumbing services are available at all times in South Loop.",
      },
    ],
  },

  {
    title: "Old Town",
    description:
      "We deliver dependable plumbing services in Old Town for residential homes and apartment buildings.",
    slug: "old-town",
    benefits: [
      "Fast local service",
      "Older pipe experience",
      "Licensed plumbers",
      "Clear pricing",
      "Reliable repairs",
    ],
    reviews: [
      {
        text: "Very fast and professional.",
        name: "Alex, Old Town",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Great local service.",
        name: "Sarah, Old Town",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Fixed everything quickly.",
        name: "John, Old Town",
        job: "Landlord",
        rating: 5,
      },
      {
        text: "Highly recommend them.",
        name: "Michael, Old Town",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you provide plumbing services throughout Old Town?",
        answer:
          "Yes. We serve homes and apartment buildings across Old Town.",
      },
      {
        question: "Are you familiar with older plumbing systems here?",
        answer:
          "Yes. Many Old Town properties have older pipes that require experienced service.",
      },
      {
        question: "Do you offer emergency plumbing services?",
        answer:
          "Yes. Emergency plumbing services are available throughout Old Town.",
      },
    ],
  },

  {
    title: "Gold Coast",
    description:
      "We provide high-quality plumbing services in Gold Coast for condos, apartments, and residential properties.",
    slug: "gold-coast",
    benefits: [
      "Fast city response",
      "Condo experience",
      "Licensed plumbers",
      "Upfront pricing",
      "Trusted service",
    ],
    reviews: [
      {
        text: "Very professional service.",
        name: "Maya, Gold Coast",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Fast and reliable plumbers.",
        name: "Omar, Gold Coast",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Handled everything smoothly.",
        name: "Leah, Gold Coast",
        job: "Manager",
        rating: 4,
      },
      {
        text: "Great experience overall.",
        name: "Daniel, Gold Coast",
        job: "Homeowner",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Do you work in condos and apartments in Gold Coast?",
        answer:
          "Yes. We regularly service condo buildings and residential properties in Gold Coast.",
      },
      {
        question: "Is emergency plumbing available here?",
        answer:
          "Yes. Emergency plumbing services are available throughout Gold Coast.",
      },
      {
        question: "Do you service high-rise buildings?",
        answer:
          "Yes. We work with high-rise and multi-unit properties in the area.",
      },
    ],
  },
];


export default function ServicesInfo() {
  const { slug } = useParams();
  const service = data.find((item) => item.slug === slug);

  const containerRef = useRef(null);
  const cardRef = useRef(null);
  let x = useRef(0);
  const cardAmount = 4;
  let cardWidth = useRef(0);
  const GAP = 40;
  let trackWidth = useRef(0);
  let animationId;
  useEffect(() => {
    cardWidth = cardRef.current.offsetWidth + GAP;
    trackWidth = cardWidth * cardAmount;

    x.current = -trackWidth;

    function animate() {
      x.current += 2;

      if (x.current >= 0) {
        x.current = -trackWidth;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;

      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(null);
  return (
    <div className="space-y-26">
      <header className="max-w-[90%] mx-auto">
        <nav className="md:hidden flex items-center justify-between py-6 mb-3">
          <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
          <Menu id="menu" />
        </nav>
        <nav className="hidden max-lg:md:flex items-center justify-between py-6 mb-3">
          <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
          <ul className="flex items-center justify-between w-1/2">
            <Link to="/services">
              <a href="" className="font-semibold ">
                Go Back
              </a>
            </Link>

            <li>
              <a href="" className="font-semibold ">
                FAQs
              </a>
            </li>

            <li className="bg-white flex items-center py-4 px-4 rounded-lg gap-2">
              <Mail className="" />
              <a href="" className="font-semibold ">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <nav className="hidden lg:flex items-center justify-between py-6 mb-8">
          <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
          <ul className="flex items-center justify-between w-[60%] font-semibold">
            <li>
              <Link to="/services" className="font-semibold ">
                Go Back
              </Link>
            </li>
            <li>
              <a href="" className="font-semibold ">
                All Services
              </a>
            </li>

            <li>
              <a href="" className="font-semibold ">
                FAQs
              </a>
            </li>

            <li className="bg-white text-black flex items-center py-4 px-4 rounded-lg gap-2">
              <Mail className="" />
              <a href="" className="font-semibold ">
                Contact
              </a>
            </li>

            <li>
              <PrimaryButton />
            </li>
          </ul>
        </nav>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center ">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">
              {service.title}
            </h1>
            <p className="text-gray-600 mb-13 max-w-[45ch]">
              {service.description}
            </p>
            <PrimaryButton />
          </div>
          <div className="py-2 px-4">
            <img src={image} alt="" className="rounded-lg mx-auto shadow-md" />
          </div>
        </div>
      </header>

      <main className="max-w-[90%] mx-auto space-y-26">
        <section>
          <div>
            <h2 className="font-bold text-4xl mb-5">
              Why Choose Us at {service.title}
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <CheckCircle className="text-primary w-4 h-4" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="">
          <h2 className="font-bold text-4xl mb-5">What People Say</h2>
          <p className="text-gray-600 mb-12">
            Our customers trust us for fast response times, honest pricing, and
            quality workmanship. From emergency repairs to routine maintenance,
            we focus on delivering reliable plumbing solutions that keep homes
            and businesses running smoothly.
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex gap-10" ref={containerRef}>
              {[...service.reviews, ...service.reviews].map((review, index) => (
                <div
                  key={index}
                  ref={cardRef}
                  className="cards bg-white rounded-lg py-6 px-5 grid justify-items-between space-y-6 shrink-0 max-w-[400px] min-w-[300px]"
                >
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="bg-primary rounded-full w-6 h-6 p-1"
                            fill="#fff"
                            stroke="0"
                          />
                        ))}
                    </div>
                    <p>
                      <p>{review.text}</p>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.job}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="font-bold text-4xl mb-5">What People Ask</h2>
          <p className="text-gray-600 mb-12">
            Our customers trust us for fast response times, honest pricing, and
            quality workmanship. From emergency repairs to routine maintenance,
            we focus on delivering reliable plumbing solutions that keep homes
            and businesses running smoothly.
          </p>
          <div className="faqs-container max-w-[80%] mx-auto space-y-4 max-md:max-w-[100%]">
            {service.faqs.map((faq, index) => (
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}