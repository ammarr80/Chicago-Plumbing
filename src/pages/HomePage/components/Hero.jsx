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
    <header className="max-w-[90%] mx-auto">
      <nav className="md:hidden flex items-center justify-between py-6 mb-3">
        <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
        <Menu id="menu" />
      </nav>

      <nav className="flex items-center justify-between py-6 hidden md:flex lg:hidden mb-4">
        <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
        <ul className="flex items-center space-x-12">
          <li>
            <a href="" className="font-semibold">
              Services
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              Service Areas
            </a>
          </li>
          <li>
            <a
              href=""
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
            <a href="" className="font-semibold">
              Services
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              Service Areas
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              Reviews
            </a>
          </li>
          <li>
            <a href="" className="font-semibold">
              FAQs
            </a>
          </li>
          <li>
            <a
              href=""
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
        class="bg-primary w-full hidden max-lg:hidden fixed px-16 py-3 top-0 left-0 z-50 flex items-center justify-between"
      >
        <h2 class="font-bold text-2xl text-white">
          Chicago Plumbing
        </h2>
        <div class="flex items-center gap-6 relative">
          <div>
            <a
              onMouseEnter={() => setMenuOpen("services")}
              onMouseLeave={() => setMenuOpen(null)}
              href="/services.html"
              class="flex items-center text-sm gap-1 transition-all duration-300 font-semibold text-white navbar-links"
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
                    <a
                      href="/services/emergency-plumbing"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Emergency Plumbing
                    </a>
                    <a
                      href="/services/drain-cleaning"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Drain Cleaning & Unclogging
                    </a>
                    <a
                      href="/services/sewer-repair"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Sewer Line Repair & Replacement
                    </a>
                    <a
                      href="/services/water-heater"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Water Heater Services
                    </a>
                  </div>
                  <div class="flex flex-col gap-3">
                    <a
                      href="/services/leak-detection"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Leak Detection & Repair
                    </a>
                    <a
                      href="/services/toilet-repair"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Toilet & Fixture Repair
                    </a>
                    <a
                      href="/services/sump-pump"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Sump Pump Installation & Repair
                    </a>
                    <a
                      href="/services/frozen-pipes"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Frozen / Burst Pipe Repair
                    </a>
                  </div>
                </nav>
                <a
                  href=""
                  className="bg-primary font-semibold text-white rounded-md px-3 py-2"
                >
                  More Details About Services
                </a>
              </div>
            )}
          </div>
          <div>
            <a
              onMouseEnter={() => setMenuOpen("locations")}
              onMouseLeave={() => setMenuOpen(null)}
              href=""
              class="flex items-center gap-1 text-sm font-semibold text-white navbar-links"
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
                    <a
                      href="/areas/lincoln-park"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Lincoln Park
                    </a>
                    <a
                      href="/areas/wicker-park"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Wicker Park
                    </a>
                    <a
                      href="/areas/lakeview"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Lakeview
                    </a>
                    <a
                      href="/areas/hyde-park"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Hyde Park
                    </a>
                  </div>

                  <div class="flex flex-col gap-3">
                    <a
                      href="/areas/logan-square"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Logan Square
                    </a>
                    <a
                      href="/areas/river-north"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      River North
                    </a>
                    <a
                      href="/areas/south-loop"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      South Loop
                    </a>
                    <a
                      href="/areas/old-town"
                      class="text-black text-sm font-semibold hover:underline"
                    >
                      Old Town
                    </a>
                  </div>
                </nav>
                <a
                  href=""
                  className="bg-primary font-semibold text-white rounded-md px-3 py-2"
                >
                  More Details About Locations
                </a>
              </div>
            )}
          </div>

          <a
            href="#footer"
            class="bg-primary border-1 text-white px-9 py-3 rounded-md font-semibold"
          >
            Contact
          </a>
          <div class="flex items-center gap-5">
            <a
              href="tel:(312) 555-0147"
              class="flex items-center gap-4 bg-white border shadow-2xl  text-black font-semibold px-4 py-3 rounded-lg"
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
