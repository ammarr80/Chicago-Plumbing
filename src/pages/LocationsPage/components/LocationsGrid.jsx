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
import { MapPin } from "lucide-react";

const data = [
  {
    title: "Lincoln Park",
    description:
      "Serving homes and apartments around Clark Street, Fullerton Ave, and the lakefront area.",
    Icon: MapPin,
    slug: "lincoln-park",
  },
  {
    title: "Wicker Park",
    description:
      "Plumbing services near Milwaukee Ave, Division Street, and surrounding residential blocks.",
    Icon: MapPin,
    slug: "wicker-park",
  },
  {
    title: "Lakeview",
    description:
      "Local plumbers for Lakeview East, Belmont Ave, and neighborhoods near the lake.",
    Icon: MapPin,
    slug: "lakeview",
  },
  {
    title: "Hyde Park",
    description:
      "Reliable plumbing around 53rd Street, residential streets, and nearby communities.",
    Icon: MapPin,
    slug: "hyde-park",
  },
  {
    title: "Logan Square",
    description:
      "Fast plumbing help near Logan Blvd, Fullerton Ave, and surrounding homes.",
    Icon: MapPin,
    slug: "logan-square",
  },
  {
    title: "River North",
    description:
      "Serving condos, businesses, and residences around State Street and Hubbard Street.",
    Icon: MapPin,
    slug: "river-north",
  },
  {
    title: "South Loop",
    description:
      "Professional plumbing services near Michigan Ave, Roosevelt Rd, and nearby areas.",
    Icon: MapPin,
    slug: "south-loop",
  },
  {
    title: "Old Town",
    description:
      "Local plumbers around Wells Street, North Ave, and historic residential zones.",
    Icon: MapPin,
    slug: "old-town",
  },
  {
    title: "Gold Coast",
    description:
      "High-end residential and condo plumbing near Rush Street and lakefront properties.",
    Icon: MapPin,
    slug: "gold-coast",
  },
];


export default function ServicesGrid() {
  return (
    <>
      <section className="max-w-[90%] mx-auto">
        <h2 className="font-bold text-3xl mb-4">Areas We Serve</h2>
        <div className="grid lg:grid-cols-3 lg:items-stretch md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-8 lg:gap-4 py-4 text-center ">
          {data.map((item, index) => (
            <div
              key={index}
              className="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 "
            >
              <div className="content grid justify-items-center gap-4">
                <item.Icon className="w-13 h-13 text-primary" />
                <div className="text-content  ">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-center mb-8 text-gray-600 flex-grow max-w-[40ch]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <Link
                  to={`/locations/${item.slug}`}
                  className="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
                >
                  Learn More
                </Link>
                <a
                  href="tel:(312)555-0147"
                  className="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
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
