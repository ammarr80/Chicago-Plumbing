import PrimaryButton from "../../../reusbaleUi/PrimaryButton";
import HeroImage from "../pics/hero.jpg";

import Info from "./Info";
import { Link } from "react-router-dom";

import {
  Mail,
  Menu,
  Printer,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(null);

  const navRef = useRef(null);

  // calculating the total width of the upper area of hero section

  let currentScrollPositionY = 0;
  const upSection = useRef(null);
  useEffect(() => {
    const upSectionDistance = upSection.current.offsetTop;
    document.addEventListener("scroll", () => {
      currentScrollPositionY = scrollY;

      if (currentScrollPositionY >= upSectionDistance) {
        navRef.current.classList.add("popup");
        navRef.current.classList.remove("hidden");
      } else {
        navRef.current.classList.add("hidden");
        navRef.current.classList.remove("popup");
      }
    });
  }, []);

  return (
    <header className="max-w-[90%] mx-auto" id="header">
      <nav className="md:hidden flex items-center justify-between py-6 mb-3">
        <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
        <Menu id="menu" />
      </nav>

      <nav className="flex items-center justify-between py-6 hidden md:flex lg:hidden mb-4">
        <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
        <ul className="flex items-center space-x-12">
          <li>
            <a href="#services" className="font-semibold">
              Services
            </a>
          </li>
          <li>
            <a href="#service-areas" className="font-semibold">
              Service Areas
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="font-semibold bg-white px-4 py-3 text-black rounded-lg flex gap-3 items-center"
            >
              <Mail />
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav className="hidden lg:flex items-center justify-between py-6 mb-8">
        <h2 className="font-bold text-primary text-3xl">Chicago Plumbing</h2>
        <ul className="flex items-center space-x-12">
          <li>
            <a href="#services" className="font-semibold">
              Services
            </a>
          </li>
          <li>
            <a href="#service-areas" className="font-semibold">
              Service Areas
            </a>
          </li>
          <li>
            <a href="#reviews" className="font-semibold">
              Reviews
            </a>
          </li>
          <li>
            <a href="#faqs" className="font-semibold">
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="font-semibold bg-primary px-4 py-3 text-white rounded-lg flex gap-3 items-center"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav
        id="navbar"
        ref={navRef}
        class="bg-primary w-full hidden max-lg:hidden fixed px-8 py-3 top-0 left-0 z-50 flex items-center justify-between"
      >
        <h2 class="font-bold text-2xl text-white">Chicago Plumbing</h2>
        <div class="flex items-center gap-6 relative">
          <div>
            <a
              onMouseEnter={() => setMenuOpen("services")}
              onMouseLeave={() => setMenuOpen(null)}
              href="/services.html"
              class="flex items-center gap-1 transition-all duration-300 font-semibold text-white navbar-links"
              id="services-dropdown"
            >
              View All Services{" "}
              {menuOpen == "services" ? <ChevronUp /> : <ChevronDown />}
            </a>
            {menuOpen == "services" && (
              <div
                onMouseEnter={() => setMenuOpen("services")}
                onMouseLeave={() => setMenuOpen(null)}
                class="bg-white absolute max-w-lg -bottom-52 px-4 py-6 rounded-sm shadow-md navbar-popups hover:block"
                id="services-popup"
              >
                <nav class="grid grid-cols-2 gap-6 mb-8">
  <div class="flex flex-col gap-3">
    <Link
      to="/services/emergency-plumbing"
      class="text-black text-sm font-semibold hover:underline"
    >
      Emergency Plumbing
    </Link>
    <Link
      to="/services/shower-head-repair"
      class="text-black text-sm font-semibold hover:underline"
    >
      Shower Head Repair
    </Link>
    <Link
      to="/services/sewer-line-repair"
      class="text-black text-sm font-semibold hover:underline"
    >
      Sewer Line Repair & Replacement
    </Link>
    <Link
      to="/services/water-heater-services"
      class="text-black text-sm font-semibold hover:underline"
    >
      Water Heater Services
    </Link>
  </div>
  <div class="flex flex-col gap-3">
    <Link
      to="/services/leak-detection-repair"
      class="text-black text-sm font-semibold hover:underline"
    >
      Leak Detection & Repair
    </Link>
    <Link
      to="/services/toilet-fixture-repair"
      class="text-black text-sm font-semibold hover:underline"
    >
      Toilet & Fixture Repair
    </Link>
    <Link
      to="/services/sump-pump-installation"
      class="text-black text-sm font-semibold hover:underline"
    >
      Sump Pump Installation & Repair
    </Link>
    <Link
      to="/services/frozen-burst-pipe-repair"
      class="text-black text-sm font-semibold hover:underline"
    >
      Frozen / Burst Pipe Repair
    </Link>
  </div>
</nav>

                <Link
                  to="/services"
                  className="bg-primary font-semibold text-white rounded-md px-3 py-2"
                >
                  More Details About Services
                </Link>
              </div>
            )}
          </div>
          <div>
            <a
              onMouseEnter={() => setMenuOpen("locations")}
              onMouseLeave={() => setMenuOpen(null)}
              href=""
              class="flex items-center gap-1 font-semibold text-white navbar-links"
              id="areas-dropdown"
            >
              Areas We Serve{" "}
              {menuOpen == "locations" ? <ChevronUp /> : <ChevronDown />}
            </a>
            {menuOpen == "locations" && (
              <div
                onMouseEnter={() => setMenuOpen("locations")}
                onMouseLeave={() => setMenuOpen(null)}
                class="bg-white absolute max-w-lg -bottom-52 px-4 py-6 rounded-sm shadow-md navbar-popups"
                id="areas-popup"
              >
                 <nav class="grid grid-cols-2 gap-6 mb-8">
                  <div class="flex flex-col gap-3">
                    <Link
                      to="/locations/lincoln-park"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Lincoln Park
                    </Link>
                    <Link
                      to="/locations/wicker-park"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Wicker Park
                    </Link>
                    <Link
                      to="/locations/lakeview"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Lakeview
                    </Link>
                    <Link
                      to="/locations/hyde-park"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Hyde Park
                    </Link>
                  </div>

                  <div class="flex flex-col gap-3">
                    <Link
                      to="/locations/logan-square"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Logan Square
                    </Link>
                    <Link
                      to="/locations/river-north"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      River North
                    </Link>
                    <Link
                      to="/locations/south-loop"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      South Loop
                    </Link>
                    <Link
                      to="/locations/old-town"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Old Town
                    </Link>
                  </div>
                </nav>
                <Link
                  to={"/locations"}
                  className="bg-primary font-semibold text-white rounded-md px-3 py-2"
                >
                  More Details About Locations
                </Link>
              </div>
            )}
          </div>

          <a
            href="#footer"
            class="bg-primary border text-white px-9 py-3 rounded-md font-semibold"
          >
            Contact
          </a>
          <div class="flex items-center gap-5">
            <a
              href="tel:(312) 555-0147"
              class="flex items-center gap-4 bg-white shadow-2xl  text-black font-semibold px-4 py-3 rounded-lg"
            >
              <Phone className="w-5 h-5" /> (312) 555-0147
            </a>
          </div>
        </div>
      </nav>
      <div
        id="hero-upper"
        ref={upSection}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-center lg:items-start
      "
      >
        <div className="">
          <h1 className="font-bold text-4xl lg:text-5xl mb-5">
            24/7 Emergency Chicago Plumbing
          </h1>
          <p className="text-gray-600 leading-normal tracking-wide mb-10 max-w-[50ch]">
            Fast, reliable plumbing for leaks, clogs, water heaters, and urgent
            repairs. We arrive on time, give clear pricing upfront, and get the
            job done right the first time. Call now for same-day service.
          </p>
          <PrimaryButton />
        </div>
        <div className="py-0 lg:px-4 mx-auto">
          <img
            src={HeroImage}
            className="rounded-md shadow-md rounded-full w-full mx-auto max-w-lg"
            alt=""
          />
        </div>
      </div>

      <div className="md:w-[90%] mx-auto md:flex justify-center">
        <Info />
      </div>
    </header>
  );
}
