import {
  AlertTriangle,
  CheckCircle,
  Droplet,
  Droplets,
  ShowerHead,
  Thermometer,
} from "lucide-react";

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="max-w-[90%] mx-auto grid  lg:grid-cols-2 gap-0 md:gap-8  lg:gap-0  lg:items-center grid-cols-1  "
      >
        <div className="mb-14 md:mb-0">
          <h2 className="font-bold text-4xl mb-7 max-w-[20ch]">
            Plumbing Services — Emergency & Same-Day
          </h2>
          <p className="text-gray-600 max-w-[56ch] leading-normal text-base mb-10">
            We handle common plumbing problems for homes and small businesses.
            Whether it’s urgent or routine, we focus on fast response, clear
            pricing, and getting the job done right the first time.
          </p>
          <ul className="space-y-5 mb-12 max-w-[40ch]">
            <li className="flex items-start text-sm gap-2 text-gray-500">
              <CheckCircle className="text-[#008cff]/80"></CheckCircle>Clear
              diagnosis and repair options explained before work begins.
            </li>
            <li className="flex items-start text-sm gap-2 text-gray-500">
              <CheckCircle className="text-[#008cff]/80"></CheckCircle>
              Professional tools and quality parts used on every job.
            </li>
            <li className="flex items-start text-sm gap-2 text-gray-500">
              <CheckCircle className="text-[#008cff]/80"></CheckCircle>Clean,
              careful work with respect for your property.
            </li>
            <li className="flex items-start text-sm gap-2 text-gray-500">
              <CheckCircle className="text-[#008cff]/80"></CheckCircle>Upfront
              communication so there are no surprises.
            </li>
          </ul>
          <div className="space-x-3 grid justify-items-start gap-3 md:flex">
            <a
              href="tel:(312) 555-0147"
              className="bg-primary text-white inline-block font-semibold px-6 py-4 rounded-lg"
            >
              Call for Service
            </a>
            <a
              href="/services.html"
              className="bg-white border text-black inline-block font-semibold px-6 py-4 rounded-lg"
            >
              View All Services
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:grid-cols-2 grid-cols-1 md:gap-8 lg:gap-6 gap-8">
          <div className="hover:-translate-y-1 transform duration-300 transition-all overflow-hidden py-8 px-3 text-center rounded-md shadow-md relative service-cards      bg-white z-3">
            <div className="mb-8 space-y-3">
              <AlertTriangle className="block mx-auto text-primary w-12 h-12"></AlertTriangle>
              <h4 className="font-bold mb-2">Burst Pipe Repair</h4>
              <p className="text-gray-600 text-sm max-w-[40ch] mx-auto">
                We quickly locate and repair burst pipes to prevent water damage
                and restore your plumbing.
              </p>
            </div>
            <a
              href="tel:(312) 555-0147"
              className="bg-primary font-bold text-white px-4 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>

          <div className="hover:-translate-y-1 transform duration-300 transition-all overflow-hidden py-8 px-3 text-center rounded-md shadow-md relative service-cards      bg-white z-3">
            <div className="mb-8 space-y-3">
              <Droplets className="block mx-auto text-primary w-12 h-12"></Droplets>
              <h4 className="font-bold mb-2">Emergency Leak Fix</h4>
              <p className="text-gray-600 text-sm max-w-[40ch] mx-auto">
                Immediate response to fix leaks and minimize water waste and
                property damage.
              </p>
            </div>
            <a
              href="tel:(312) 555-0147"
              className="bg-primary font-bold text-white px-4 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>

          <div className="hover:-translate-y-1 transform duration-300 transition-all overflow-hidden py-8 px-3 text-center rounded-md shadow-md relative service-cards      bg-white z-3">
            <div className="mb-8 space-y-3">
              <ShowerHead className="block mx-auto text-primary w-12 h-12"></ShowerHead>
              <h4 className="font-bold mb-2">Bathroom & Toilet Repairs</h4>
              <p className="text-gray-600 text-sm max-w-[45ch] mx-auto">
                Expert repairs for sinks, toilets, showers, and other bathroom
                fixtures.
              </p>
            </div>
            <a
              href="tel:(312) 555-0147"
              className="bg-primary font-bold text-white px-4 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>

          <div className="hover:-translate-y-1 transform duration-300 transition-all overflow-hidden py-8 px-3 text-center rounded-md shadow-md relative service-cards      bg-white z-3">
            <div className="mb-8 space-y-3">
              <Thermometer className="block mx-auto text-primary w-12 h-12"></Thermometer>
              <h4 className="font-bold mb-2">Water Heater Repair & Service</h4>
              <p className="text-gray-600 text-sm max-w-[45ch] mx-auto">
                Repair and maintain water heaters to ensure a reliable supply of
                hot water.
              </p>
            </div>
            <a
              href="tel:(312) 555-0147"
              className="bg-primary font-bold text-white px-4 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
