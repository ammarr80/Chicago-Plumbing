import { Menu } from "lucide-react";
import servicesHeroImage from "../pics/services-hero.png";

export default function ServicesHero() {
  return (
    <>
      <header className="max-w-[90%] mx-auto">
        <nav className="md:hidden flex items-center justify-between py-6 mb-3">
          <h2 className="text-2xl text-primary font-bold">Chicago Plumbing</h2>
          <Menu id="menu" />
        </nav>

        <h1 className="font-bold text-4xl lg:text-5xl mb-5">Our Services</h1>
        <p className="text-gray-600 leading-normal tracking-wide mb-8 max-w-[50ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laboriosam vitae autem modi? Dolore qui expedita reprehenderit
          voluptas.
        </p>

        <div className="py-2 lg:px-4 mx-auto xs:hidden lg:block">
          <img
            src={servicesHeroImage}
            className="rounded-md shadow-md w-full"
            alt=""
          />
        </div>
      </header>
    </>
  );
}
