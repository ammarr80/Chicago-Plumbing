import LocationsFAQs from "./LocationsFAQs";
import LocationsGrid from "./LocationsGrid";

export default function ServicesMain() {
  return (
    <main className="space-y-12">
      <LocationsGrid />
      <LocationsFAQs />
    </main>
  );
}
