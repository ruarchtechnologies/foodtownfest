import { Navbar }       from "@/components/layout/Navbar";
import { Hero }         from "@/components/sections/Hero";
import { About }        from "@/components/sections/About";
import { FoodShowcase } from "@/components/sections/FoodShowcase";
import { Performers }   from "@/components/sections/Performers";
import { Schedule }     from "@/components/sections/Schedule";
import { Vendors }      from "@/components/sections/Vendors";
import { Gallery }      from "@/components/sections/Gallery";
import { Footer }       from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FoodShowcase />
        <Performers />
        <Schedule />
        <Vendors />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
