import PrimaryButton from "../reusbaleUi/PrimaryButton";
import HeroImage from "../pics/hero.jpg";

import Info from "./Info";

import { Mail, Menu, Printer } from "lucide-react";

export default function Hero() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 py-4 mb-8 items-center lg:items-start
      ">
        <div className="md:mb-14 mb-4">
          <h1 className="font-bold text-4xl lg:text-5xl mb-5">
            24/7 Emergency Plumbing in Chicago
          </h1>
          <p className="text-gray-600 leading-normal tracking-wide mb-8 max-w-[50ch]">
            Fast, reliable plumbing for leaks, clogs, water heaters, and urgent
            repairs. We arrive on time, give clear pricing upfront, and get the
            job done right the first time. Call now for same-day service.
          </p>
          <PrimaryButton />
        </div>
        <div className="py-2 hidden md:block">
          <img
            src={HeroImage}
            className="rounded-md shadow-md w-full h-full"
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
