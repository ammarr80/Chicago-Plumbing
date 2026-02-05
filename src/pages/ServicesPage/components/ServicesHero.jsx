import { Mail, Menu } from "lucide-react";
import servicesHeroImage from "../pics/services-hero.jpg";
import PrimaryButton from "../../../reusbaleUi/PrimaryButton";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <>
      <header className="max-w-[90%] mx-auto">
        <nav className="md:hidden flex items-center justify-between py-6 mb-3">
          <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
          <Menu id="menu" />
        </nav>
        <nav className="hidden max-lg:md:flex items-center justify-between py-6 mb-3">
          <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
          <ul className="flex items-center justify-between w-1/2">
            <Link to="/">
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
          <ul className="flex items-center justify-between w-[50%] font-semibold">
            <li>
              <Link to="/" className="font-semibold ">
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

            <li className="bg-primary text-white flex items-center py-4 px-4 rounded-lg gap-2">
              <Mail className="" />
              <a href="" className="font-semibold ">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center lg:items-start">
          <div className="py-0 space-y-8">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5">
              Services Chicago Plumbing Offers
            </h1>
            <p className="text-gray-600 leading-normal tracking-wide mb-10 max-w-[50ch]">
              Expert plumbing for leaks, clogs, and repairs of all kinds. We
              respond quickly, provide transparent pricing, and complete every
              job correctly the first time. Call today for fast, same-day
              service in Chicago.
            </p>
            <PrimaryButton />
          </div>
          <div className="py-0 lg:px-4 mx-auto">
            <img
              src={servicesHeroImage}
              className="rounded-md shadow-md rounded-full w-full mx-auto max-w-lg"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
}
