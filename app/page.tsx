"use client";

import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Intstructor from "@/components/Intstructor";
import MartialsArt from "@/components/Martialsart";
import About from "@/components/About";
import Contact from "@/components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Hero />
      <MartialsArt />
      <Gallery />
      <Intstructor />
      <Faq />
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;
