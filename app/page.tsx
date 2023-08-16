"use client";

import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Intstructor from "@/components/Intstructor";
import About from "@/components/About";
import Contact from "@/components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MartialsArt from "@/components/MartialsArt";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="overflow-x-hidden">
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
