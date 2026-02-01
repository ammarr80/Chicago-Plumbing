import Stats from "./Stats";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import ServiceAreas from "./ServiceAreas";
import Reviews from "./Reviews";
import FAQs from "./FAQs";

export default function Main() {
  return (
    <main className="space-y-26">
      <Stats />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Reviews />
      <FAQs />
    </main>
  );
}
