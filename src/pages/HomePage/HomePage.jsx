import Footer from "../../reusbaleUi/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
