import ServicesFAQs from "./ServicesFAQs";
import ServicesGrid from "./ServicesGrid";

export default function ServicesMain() {
  return (
    <main className="space-y-12">
      <ServicesGrid />
      <ServicesFAQs />
    </main>
  );
}
