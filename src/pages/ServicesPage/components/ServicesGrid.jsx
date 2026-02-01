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

export default function ServicesGrid() {
  return (
    <>
      <section class="max-w-[90%] mx-auto">
        <h2 className="font-bold text-3xl mb-4">Services We Offer</h2>
        <div class="grid lg:grid-cols-3 lg:items-stretch md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-8 lg:gap-4 py-4 text-center ">
          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <AlertTriangle className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">Emergency Plumbing</h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  24/7 fast response for any plumbing emergency.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <ShowerHead className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">
                  Shower Head Repair
                </h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Clear blocked drains quickly with professional tools.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <Wrench className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1 text-center">
                  Sewer Line Repair
                </h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Repair or replace damaged sewer lines to restore proper flow.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <Thermometer className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">Water Heater Services</h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Install, repair, or maintain water heaters for consistent hot
                  water.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <Search className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">Leak Detection & Repair</h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Find hidden leaks and fix them before they cause damage.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <Toilet className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">Toilet & Fixture Repair</h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Fix toilets, sinks, and other fixtures for proper function.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <Droplets className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">
                  Sump Pump Installation
                </h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Install or repair sump pumps to prevent basement flooding.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div class="service-card-html w-full rounded-lg shadow-md hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center justify-between bg-white py-6 px-6 ">
            <div class="content grid justify-items-center gap-4">
              <Snowflake className="w-13 h-13 text-primary" />
              <div class="text-content  ">
                <h4 class="font-bold text-lg mb-1">Frozen / Burst Pipe Repair</h4>
                <p class="text-center mb-8 text-gray-600 flex-grow">
                  Rapid repair of frozen or burst pipes to stop water damage.
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4 ">
              <a
                href=""
                class="bg-[#f4f4f4] rounded-lg px-5 py-3 text-sm xs:text-base text-black font-semibold"
              >
                Learn More
              </a>
              <a
                href="tel:(312)555-0147"
                class="bg-primary text-white rounded-lg px-5 py-3 text-sm xs:text-base font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
