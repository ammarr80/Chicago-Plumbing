import image from "../pics/services-hero.jpg";
import { Menu, Mail,Plus, Minus, Check, CheckCircle, Star, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../../reusbaleUi/PrimaryButton";
import {useState, useEffect, useRef } from "react";
import Footer from "../../../reusbaleUi/Footer";

const data = [
  {
    title: "Emergency Plumbing",
    description:
      "Our 24/7 emergency plumbing service provides rapid response for urgent issues like burst pipes and major leaks to prevent damage and restore your plumbing fast.",
    slug: "emergency-plumbing",
    benefits: [
      "24/7 emergency response",
      "Fast arrival",
      "Licensed plumbers",
      "Upfront pricing",
      "Guaranteed work",
    ],
    reviews: [
      { text: "They fixed my burst pipe fast and professionally.", name: "Alex, Chicago", job: "Homeowner", rating: 5 },
      { text: "Quick response and great service.", name: "Sarah, Chicago", job: "Tenant", rating: 4 },
      { text: "Solved the issue right away.", name: "John, Chicago", job: "Landlord", rating: 5 },
      { text: "Arrived late at night and handled it perfectly.", name: "Michael, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "How quickly can you respond to emergency plumbing issues?",
        answer:
          "Our emergency team is available 24/7 and responds as quickly as possible. In many cases, we arrive within the same hour to stop leaks, limit damage, and restore plumbing safely.",
      },
      {
        question: "What problems are considered plumbing emergencies?",
        answer:
          "Burst pipes, flooding, sewer backups, major leaks, overflowing toilets, and complete water loss are all emergencies that require immediate professional attention.",
      },
      {
        question: "Will I receive pricing before repairs begin?",
        answer:
          "Yes. We always provide clear upfront estimates and explain repair options so you know exactly what to expect before any work starts.",
      },
    ],
  },

  {
    title: "Shower Head Repair",
    description:
      "We repair and replace shower heads to restore strong water flow while fixing leaks, blockages, and worn connections quickly and cleanly.",
    slug: "shower-head-repair",
    benefits: [
      "Quick service",
      "Better water pressure",
      "Affordable pricing",
      "Professional tools",
    ],
    reviews: [
      { text: "Shower works like new now.", name: "Maya, Chicago", job: "Tenant", rating: 4 },
      { text: "Fixed the clog in minutes.", name: "Omar, Chicago", job: "Homeowner", rating: 5 },
      { text: "Very clean and professional.", name: "Leah, Chicago", job: "Manager", rating: 5 },
      { text: "Pressure improved instantly.", name: "Daniel, Chicago", job: "Homeowner", rating: 4 },
    ],
    faqs: [
      {
        question: "What shower head issues do you repair?",
        answer:
          "We fix leaks, mineral buildup, low pressure, broken fittings, and worn internal parts. When replacement makes more sense, we install new units for improved performance.",
      },
      {
        question: "Can weak water pressure in the shower be improved?",
        answer:
          "Yes. Low pressure is commonly caused by clogs, sediment buildup, or faulty components, all of which we can diagnose and fix effectively.",
      },
      {
        question: "How long does a shower head repair usually take?",
        answer:
          "Most repairs are completed in one visit and typically take less than an hour depending on the problem.",
      },
    ],
  },

  {
    title: "Sewer Line Repair",
    description:
      "We repair clogged or damaged sewer lines using modern inspection and repair methods to restore drainage and prevent costly backups.",
    slug: "sewer-line-repair",
    benefits: [
      "Prevents backups",
      "Camera inspections",
      "Long-lasting repairs",
      "Minimal disruption",
    ],
    reviews: [
      { text: "Fixed our sewer problem fast.", name: "Hassan, Chicago", job: "Landlord", rating: 5 },
      { text: "Very professional service.", name: "Nina, Chicago", job: "Manager", rating: 4 },
      { text: "Saved us from major damage.", name: "Eli, Chicago", job: "Homeowner", rating: 5 },
      { text: "Clear and honest work.", name: "Robert, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "How do you diagnose sewer line problems?",
        answer:
          "We use advanced camera systems to inspect inside your sewer lines, allowing us to locate blockages, cracks, and damage accurately without unnecessary digging.",
      },
      {
        question: "Will sewer repairs damage my yard or floors?",
        answer:
          "Not always. We use modern techniques designed to minimize disruption and only dig when absolutely necessary for a permanent repair.",
      },
      {
        question: "What warning signs indicate sewer line issues?",
        answer:
          "Common signs include slow drains, recurring clogs, foul odors, gurgling sounds, and water backing up into sinks or toilets.",
      },
    ],
  },

  {
    title: "Water Heater Services",
    description:
      "We install, repair, and maintain water heaters to keep hot water reliable and energy efficient in your home or business.",
    slug: "water-heater-services",
    benefits: [
      "Reliable hot water",
      "Energy efficiency",
      "All brands serviced",
      "Same-day service",
    ],
    reviews: [
      { text: "Installed fast and works great.", name: "Liam, Chicago", job: "Homeowner", rating: 5 },
      { text: "Very friendly technicians.", name: "Sophia, Chicago", job: "Tenant", rating: 5 },
      { text: "Repaired my old heater easily.", name: "Zara, Chicago", job: "Landlord", rating: 4 },
      { text: "Hot water same day.", name: "Andrew, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "What types of water heaters do you service?",
        answer:
          "We service traditional tank systems and modern tankless water heaters from all major manufacturers.",
      },
      {
        question: "How long does installation usually take?",
        answer:
          "Most water heater installations are completed within the same day so you can quickly return to normal use.",
      },
      {
        question: "Should I repair or replace an older heater?",
        answer:
          "We assess the unit’s condition and provide honest recommendations based on cost, efficiency, and reliability.",
      },
    ],
  },

  {
    title: "Leak Detection & Repair",
    description:
      "We locate hidden leaks using advanced tools and repair them quickly before they cause serious structural damage.",
    slug: "leak-detection-repair",
    benefits: [
      "Precise detection",
      "No unnecessary damage",
      "Lower water bills",
      "Fast repairs",
    ],
    reviews: [
      { text: "Found a hidden leak quickly.", name: "Aisha, Chicago", job: "Homeowner", rating: 5 },
      { text: "Very precise service.", name: "Daniel, Chicago", job: "Supervisor", rating: 4 },
      { text: "Quick and clean fix.", name: "Fatima, Chicago", job: "Tenant", rating: 5 },
      { text: "Solved what others couldn’t.", name: "Thomas, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "How are hidden leaks detected?",
        answer:
          "We use specialized equipment such as moisture sensors and acoustic tools to locate leaks without damaging walls or floors.",
      },
      {
        question: "Can small leaks cause serious problems?",
        answer:
          "Yes. Over time even minor leaks can lead to mold growth, structural damage, and higher water bills.",
      },
      {
        question: "Do you repair leaks after detection?",
        answer:
          "Yes. Once located, we repair the leak immediately whenever possible to prevent further damage.",
      },
    ],
  },

  {
    title: "Toilet & Fixture Repair",
    description:
      "We repair leaking toilets, broken sinks, faucets, and plumbing fixtures to restore normal use quickly and affordably.",
    slug: "toilet-fixture-repair",
    benefits: [
      "Fast repairs",
      "Leak elimination",
      "Affordable service",
      "One-visit solutions",
    ],
    reviews: [
      { text: "Toilet fixed perfectly.", name: "Ravi, Chicago", job: "Tenant", rating: 5 },
      { text: "Quick and friendly team.", name: "Emily, Chicago", job: "Homeowner", rating: 4 },
      { text: "Multiple fixtures repaired.", name: "Jamal, Chicago", job: "Manager", rating: 5 },
      { text: "Everything works now.", name: "Kevin, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "What toilet problems do you repair?",
        answer:
          "We fix running toilets, constant clogs, weak flushing, leaking bases, and broken internal components.",
      },
      {
        question: "Can damaged fixtures be replaced?",
        answer:
          "Yes. We repair or replace sinks, faucets, and other fixtures depending on their condition and your preference.",
      },
      {
        question: "How fast are most repairs completed?",
        answer:
          "Most fixture repairs are completed within one visit, usually under an hour.",
      },
    ],
  },

  {
    title: "Sump Pump Installation",
    description:
      "We install and service sump pumps to protect basements from flooding and long-term water damage.",
    slug: "sump-pump-installation",
    benefits: [
      "Flood prevention",
      "Reliable equipment",
      "Professional installation",
      "Long-term protection",
    ],
    reviews: [
      { text: "Installed perfectly.", name: "Grace, Chicago", job: "Homeowner", rating: 5 },
      { text: "Fast and reliable.", name: "Omar, Chicago", job: "Landlord", rating: 5 },
      { text: "Basement stays dry now.", name: "Leila, Chicago", job: "Tenant", rating: 4 },
      { text: "Great workmanship.", name: "Brian, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "When is a sump pump necessary?",
        answer:
          "If your basement experiences flooding, water pooling, or high moisture levels, a sump pump is strongly recommended.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Most installations are completed within a single day.",
      },
      {
        question: "Do you service existing sump pumps?",
        answer:
          "Yes. We repair, replace, and maintain existing systems to ensure reliable performance.",
      },
    ],
  },

  {
    title: "Frozen / Burst Pipe Repair",
    description:
      "We provide rapid repairs for frozen and burst pipes to stop leaks and protect your home from major water damage.",
    slug: "frozen-burst-pipe-repair",
    benefits: [
      "Immediate response",
      "Safe thawing methods",
      "Damage prevention",
      "Long-term fixes",
    ],
    reviews: [
      { text: "Saved my house from flooding.", name: "Nora, Chicago", job: "Tenant", rating: 5 },
      { text: "Very fast service.", name: "Imran, Chicago", job: "Homeowner", rating: 5 },
      { text: "Professional repair.", name: "Samantha, Chicago", job: "Landlord", rating: 4 },
      { text: "Handled frozen pipes safely.", name: "David, Chicago", job: "Homeowner", rating: 5 },
    ],
    faqs: [
      {
        question: "What should I do immediately after a pipe bursts?",
        answer:
          "Shut off your main water supply right away and contact us for emergency repair service.",
      },
      {
        question: "Can frozen pipes be thawed without damage?",
        answer:
          "Yes. We use controlled, safe thawing techniques to avoid pipe cracks or bursting.",
      },
      {
        question: "Do you help prevent pipes from freezing again?",
        answer:
          "Yes. We provide insulation and preventative solutions to protect your plumbing in cold weather.",
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

        <section className="">
          <h2 className="font-bold text-4xl mb-5">What People Say</h2>
          <p className="text-gray-600 mb-12">
            Our customers trust us for fast response times, honest pricing, and quality workmanship. From emergency repairs to routine maintenance, we focus on delivering reliable plumbing solutions that keep homes and businesses running smoothly.
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex gap-10" ref={containerRef}>
              {[...service.reviews, ...service.reviews].map((review, index) => (
                <div key={index} ref={cardRef} className="cards bg-white rounded-lg py-6 px-5 grid justify-items-between space-y-6 shrink-0 max-w-[400px] min-w-[300px]">
                  <div className="space-y-2">
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
        <section>
           <h2 className="font-bold text-4xl mb-5">What People Ask</h2>
          <p className="text-gray-600 mb-12">
            Our customers trust us for fast response times, honest pricing, and quality workmanship. From emergency repairs to routine maintenance, we focus on delivering reliable plumbing solutions that keep homes and businesses running smoothly.
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
