import Footer from "../../reusbaleUi/Footer";
import ServicesHero from "./components/ServicesHero";
import ServicesMain from "./components/ServicesMain";
export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <ServicesHero />
      <ServicesMain />
      <Footer />
    </div>
  );
}
