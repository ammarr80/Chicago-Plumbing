import Footer from "./Footer";
import Hero from "./Hero";
import Main from "./Main";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
