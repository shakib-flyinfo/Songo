import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureShowcase from "@/components/sections/SignatureShowcase";
import MenuCategories from "@/components/sections/MenuCategories";
import Reservation from "@/components/sections/Reservation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SignatureShowcase />
      <MenuCategories />
      <Reservation />
    </>
  );
}
