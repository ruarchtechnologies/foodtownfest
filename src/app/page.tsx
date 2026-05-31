import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import AdventureRoadmap from "@/components/sections/AdventureRoadmap";
import { About } from "@/components/sections/About";
import { Schedule } from "@/components/sections/Schedule";
import { Tickets } from "@/components/sections/Tickets";
import { Brands } from "@/components/sections/Brands";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AdventureRoadmap />
        <About />
        {/* <Schedule /> */}
        <Brands />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
