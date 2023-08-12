import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Intstructor from "@/components/Intstructor";
import MartialsArt from "@/components/Martialsart";
import About from "@/components/About";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <MartialsArt />
      <Gallery />
      <Intstructor />
      <Faq />
      <About />
    </main>
  );
};

export default HomePage;
