import image from "../pics/services-hero.jpg";
import { Menu, Mail, Check, CheckCircle, Star, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../../reusbaleUi/PrimaryButton";
import { useEffect, useRef } from "react";

const data = [
  {
    title: "Emergency Plumbing",
    description:
      "Our 24/7 emergency plumbing service provides rapid response for any urgent issue, from burst pipes to severe leaks. We arrive quickly to prevent further damage and restore your plumbing. Trust our skilled team to handle emergencies efficiently and reliably.",
    slug: "emergency-plumbing",
    benefits: [
      "24/7 emergency response",
      "Fast arrival to prevent damage",
      "Licensed and insured plumbers",
      "Upfront pricing",
      "Work backed by guarantee",
    ],
    reviews: [
      {
        text: "Fast and reliable service! They fixed my burst pipe in no time.",
        name: "Alex, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Highly recommend for emergency plumbing. Very professional.",
        name: "Sarah, Chicago",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Came quickly and solved the problem efficiently. Excellent service.",
        name: "John, Chicago",
        job: "Landlord",
        rating: 5,
      },
      {
        text: "Answered the call late at night and arrived fast. Solid work.",
        name: "Michael, Chicago",
        job: "Homeowner",
        rating: 5,
      },
    ],
  },
  {
    title: "Shower Head Repair",
    description:
      "We specialize in repairing and replacing shower heads to ensure optimal water flow and comfort. Using professional tools, we quickly clear blockages and fix faulty connections. Our service ensures a smooth and reliable shower experience.",
    slug: "shower-head-repair",
    benefits: [
      "Quick and affordable repair",
      "Improved water pressure",
      "Professional tools and parts",
      "Clean and efficient service",
    ],
    reviews: [
      {
        text: "My shower now works perfectly. Very fast and clean job.",
        name: "Maya, Chicago",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Excellent service! Fixed the blockage in minutes.",
        name: "Omar, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Professional and friendly. Shower flows like new.",
        name: "Leah, Chicago",
        job: "Assistant Property Manager",
        rating: 5,
      },
      {
        text: "Water pressure improved instantly. Happy with the service.",
        name: "Daniel, Chicago",
        job: "Homeowner",
        rating: 4,
      },
    ],
  },
  {
    title: "Sewer Line Repair",
    description:
      "Damaged or clogged sewer lines can cause serious problems in your home. Our team repairs or replaces sewer lines to restore proper flow and prevent backups. We use modern equipment for long-lasting results with minimal disruption.",
    slug: "sewer-line-repair",
    benefits: [
      "Prevents backups and property damage",
      "Modern inspection equipment",
      "Long-term repair solutions",
      "Experienced sewer specialists",
    ],
    reviews: [
      {
        text: "Sewer line fixed without any hassle. Very professional team.",
        name: "Hassan, Chicago",
        job: "Landlord",
        rating: 5,
      },
      {
        text: "Quick, clean, and efficient. Highly recommend their service.",
        name: "Nina, Chicago",
        job: "Property Manager",
        rating: 4,
      },
      {
        text: "Reliable and knowledgeable. Saved us from a big backup.",
        name: "Eli, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Explained everything clearly and completed the job on time.",
        name: "Robert, Chicago",
        job: "Homeowner",
        rating: 5,
      },
    ],
  },
  {
    title: "Water Heater Services",
    description:
      "We provide full water heater services including installation, repair, and maintenance. Our experts ensure reliable hot water and extend the life of your system. We work with both traditional and tankless water heaters.",
    slug: "water-heater-services",
    benefits: [
      "Consistent hot water",
      "Energy-efficient solutions",
      "All major brands serviced",
      "Professional installation and repair",
    ],
    reviews: [
      {
        text: "Water heater installed quickly and works perfectly.",
        name: "Liam, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Friendly technicians and professional service.",
        name: "Sophia, Chicago",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Fixed my old heater efficiently. Highly recommend.",
        name: "Zara, Chicago",
        job: "Landlord",
        rating: 4,
      },
      {
        text: "Hot water restored the same day. Very smooth process.",
        name: "Andrew, Chicago",
        job: "Homeowner",
        rating: 5,
      },
    ],
  },
  {
    title: "Leak Detection & Repair",
    description:
      "Hidden leaks can cause serious damage if left untreated. We use advanced detection tools to locate leaks quickly and repair them before they worsen. This helps protect your home and reduce water bills.",
    slug: "leak-detection-repair",
    benefits: [
      "Early leak detection",
      "Prevents water damage",
      "Reduces utility bills",
      "Non-invasive methods",
    ],
    reviews: [
      {
        text: "Found and fixed a hidden leak fast. Saved me a lot of money.",
        name: "Aisha, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Professional and accurate service. Highly recommend.",
        name: "Daniel, Chicago",
        job: "Maintenance Supervisor",
        rating: 4,
      },
      {
        text: "Quick and non-invasive. Very happy with the results.",
        name: "Fatima, Chicago",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Stopped a leak that others couldn’t find. Impressive work.",
        name: "Thomas, Chicago",
        job: "Homeowner",
        rating: 5,
      },
    ],
  },
  {
    title: "Toilet & Fixture Repair",
    description:
      "We repair toilets, sinks, and other plumbing fixtures to restore proper function. Our process includes diagnosing issues, replacing worn parts, and testing performance. Fast service with minimal disruption.",
    slug: "toilet-fixture-repair",
    benefits: [
      "Fast repairs",
      "Fixes leaks and running toilets",
      "Improves bathroom functionality",
      "Affordable service",
    ],
    reviews: [
      {
        text: "Toilet repaired quickly and perfectly. Great job.",
        name: "Ravi, Chicago",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Friendly team and very efficient service.",
        name: "Emily, Chicago",
        job: "Homeowner",
        rating: 4,
      },
      {
        text: "Fixed multiple fixtures without any hassle.",
        name: "Jamal, Chicago",
        job: "Assistant Property Manager",
        rating: 5,
      },
      {
        text: "Everything works smoothly again. Very reliable service.",
        name: "Kevin, Chicago",
        job: "Homeowner",
        rating: 5,
      },
    ],
  },
  {
    title: "Sump Pump Installation",
    description:
      "Protect your basement from flooding with professional sump pump installation and repair. We install reliable systems designed to handle heavy rain and snow melt. Our team ensures proper setup and performance.",
    slug: "sump-pump-installation",
    benefits: [
      "Prevents basement flooding",
      "Reliable pump systems",
      "Proper installation",
      "Long-term home protection",
    ],
    reviews: [
      {
        text: "Installed my sump pump perfectly. Very professional.",
        name: "Grace, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Reliable and quick service. Highly recommend.",
        name: "Omar, Chicago",
        job: "Landlord",
        rating: 5,
      },
      {
        text: "Basement fully protected now. Great experience.",
        name: "Leila, Chicago",
        job: "Tenant",
        rating: 4,
      },
      {
        text: "Clear explanation and solid installation work.",
        name: "Brian, Chicago",
        job: "Homeowner",
        rating: 5,
      },
    ],
  },
  {
    title: "Frozen / Burst Pipe Repair",
    description:
      "Frozen or burst pipes can cause major water damage fast. We provide rapid repairs to stop leaks, thaw pipes, and prevent further issues. Quick action helps protect your home and plumbing system.",
    slug: "frozen-burst-pipe-repair",
    benefits: [
      "Rapid response",
      "Prevents major water damage",
      "Safe pipe thawing",
      "Emergency-ready service",
    ],
    reviews: [
      {
        text: "Came immediately and fixed the burst pipe. Lifesaver!",
        name: "Nora, Chicago",
        job: "Tenant",
        rating: 5,
      },
      {
        text: "Fast, professional, and efficient service.",
        name: "Imran, Chicago",
        job: "Homeowner",
        rating: 5,
      },
      {
        text: "Saved my home from flooding. Excellent work.",
        name: "Samantha, Chicago",
        job: "Landlord",
        rating: 4,
      },
      {
        text: "Handled the frozen pipes safely and quickly.",
        name: "David, Chicago",
        job: "Homeowner",
        rating: 5,
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
  let trackWidth = useRef(0)
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
      containerRef.current.style.transform = `translateX(${x.current}px)`

      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animationId)
  }, []);

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
                Service Areas
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
            <p className="text-gray-600 mb-13 max-w-[45ch]">{service.description}</p>
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
              Benefits of {service.title}
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

<section>

</section>
        <section classNamey="">
          <h2 className="font-bold text-4xl mb-5">What People Say</h2>
          <p className="text-gray-600 mb-12">
            Our customers trust us for fast response times, honest pricing, and quality workmanship. From emergency repairs to routine maintenance, we focus on delivering reliable plumbing solutions that keep homes and businesses running smoothly.
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex gap-10" ref={containerRef}>
              {[...service.reviews, ...service.reviews].map((review, index) => (
                <div key={index} ref={cardRef} className="cards bg-white rounded-lg py-6 px-5 grid justify-items-between space-y-5 shrink-0 max-w-xs">
                  <div className="space-y-1">
                      <div className="flex gap-2">
                            {Array(review.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="bg-primary rounded-full w-6 h-6 p-1" fill="#fff" stroke="0" />
                              ))}
                      </div>
                      <p>
                          <p>{review.text}</p>
                      </p>
                  </div>
                  <div>
                      <p className="font-bold">
                          {review.name}
                      </p>
                      <p className="text-sm text-gray-600">
                          {review.job}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
