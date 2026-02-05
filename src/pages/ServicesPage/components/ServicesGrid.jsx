import {
  AlertTriangle,
  ShowerHead,
  Wrench,
  Thermometer,
  Search,
  Toilet,
  Droplets,
  Snowflake,
} from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Emergency Plumbing",
    description: "24/7 fast response for any plumbing emergency.",
    Icon: AlertTriangle,
    slug: "emergency-plumbing",
  },
  {
    title: "Shower Head Repair",
    description: "Clear blocked drains quickly with professional tools.",
    Icon: ShowerHead,
    slug: "shower-head-repair",
  },
  {
    title: "Sewer Line Repair",
    description:
      "Repair or replace damaged sewer lines to restore proper flow.",
    Icon: Wrench,
    slug: "sewer-line-repair",
  },
  {
    title: "Water Heater Services",
    description:
      "Install, repair, or maintain water heaters for consistent hot water.",
    Icon: Thermometer,
    slug: "water-heater-services",
  },
  {
    title: "Leak Detection & Repair",
    description: "Find hidden leaks and fix them before they cause damage.",
    Icon: Search,
    slug: "leak-detection-repair",
  },
  {
    title: "Toilet & Fixture Repair",
    description: "Fix toilets, sinks, and other fixtures for proper function.",
    Icon: Toilet,
    slug: "toilet-fixture-repair",
  },
  {
    title: "Sump Pump Installation",
    description: "Install or repair sump pumps to prevent basement flooding.",
    Icon: Droplets,
    slug: "sump-pump-installation",
  },
  {
    title: "Frozen / Burst Pipe Repair",
    description: "Rapid repair of frozen or burst pipes to stop water damage.",
    Icon: Snowflake,
    slug: "frozen-burst-pipe-repair",
  },
];

export default function ServicesGrid() {
  return (
    <>
      <section class="max-w-[90%] mx-auto">
        <h2 className="font-bold text-3xl mb-4">Services We Offer</h2>
        <div class="grid lg:grid-cols-3 lg:items-stretch md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-8 lg:gap-4 py-4 text-center ">
          {data.map((item, index) => (
            <div
              key={index}
              class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 "
            >
              <div class="content grid justify-items-center gap-4">
                <item.Icon className="w-13 h-13 text-primary" />
                <div class="text-content  ">
                  <h4 class="font-bold text-lg mb-1">{item.title}</h4>
                  <p class="text-center mb-8 text-gray-600 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4 ">
                <Link
                  to={`/services/${item.slug}`}
                  class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
                >
                  Learn More
                </Link>
                <a
                  href="tel:(312)555-0147"
                  class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
