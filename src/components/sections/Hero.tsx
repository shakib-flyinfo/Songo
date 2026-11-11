"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import LaurelBadge from "@/components/ui/LaurelBadge";
import { images } from "@/data/images";

const heroSlides = [
  {
    title: ["A Modern Feast", "of Bengal"],
    subtitle: "Savor the rich heritage of Bangladeshi hospitality through contemporary, chef-crafted recipes.",
    image: images.hero.scene,
    alt: "Shorshe Ilish served in a traditional copper bowl",
  },
  {
    title: ["Timeless Flavors,", "Reimagined"],
    subtitle: "Where age-old family recipes meet a fresh, modern dining experience rooted in tradition.",
    image: images.hero.scene1,
    alt: "Warm and elegant interior of our restaurant with hanging wicker lights",
  },
  {
    title: ["Crafted with", "Soul & Spice"],
    subtitle: "Every dish tells a story of heritage, spice, and the warmth of Bengali hospitality.",
    image: images.hero.scene2,
    alt: "A happy Bengali family enjoying a traditional meal together",
  },
  {
    title: ["A Culinary Journey", "Through Bengal"],
    subtitle: "Embark on a gastronomic adventure that celebrates the rich flavors and traditions of Bengal.",
    image: images.hero.scene3,
    alt: "An expansive spread of authentic Bengali dishes in copperware",
  },
  {
    title: ["Where Tradition Meets", "Innovation"],
    subtitle: "Experience the perfect blend of classic Bengali recipes and modern culinary techniques.",
    image: images.hero.scene4,
    alt: "Spacious modern restaurant interior with wooden accents and greenery",
  },
  {
    title: ["Savor the Essence", "of Bengal"],
    subtitle: "Indulge in the authentic tastes of Bengal, crafted with passion and served with elegance.",
    image: images.hero.scene5,
    alt: "Our dedicated chef carefully plating a dish in a professional kitchen",
  },
  {
    title: ["A Feast for the Senses", "in Bengal"],
    subtitle: "Delight in a sensory experience that captures the vibrant flavors and aromas of Bengali cuisine.",
    image: images.hero.scene6,
    alt: "Friends and family sharing a grand Bengali feast on a wooden table",
  },
  {
    title: ["Bengal on a Plate", "Reimagined"],
    subtitle: "Discover the art of Bengali cooking, where every plate is a masterpiece of flavor and tradition.",
    image: images.hero.scene7,
    alt: "Exterior view of the restaurant at dusk with warm glowing lights",
  }
];

const ROTATE_MS = 3500;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = heroSlides[active];

  return (
    <section className="relative w-full pt-0">
      <div className="relative isolate flex min-h-[90svh] w-full flex-col justify-center overflow-hidden md:min-h-[100vh] md:flex-row md:items-center">

        {/* ===== Background Image Slider ===== */}
        <div className="absolute inset-0 -z-10">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-center md:object-[70%_center]"
              />
            </div>
          ))}


          <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />
        </div>

        {/* ===== Content Area ===== */}
        <div className="mx-auto flex w-full max-w-[1440px] items-center px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
          <div className="max-w-2xl">


            <div key={active} className="animate-hero-fade">

              {/* Heading */}
              <h1 className="text-[46px] font-serif font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-[56px] md:text-[72px]">
                {current.title[0]}
                <br />
                <span className="text-copper-300 italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {current.title[1]}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-lg text-[16px] font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-[18px]">
                {current.subtitle}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/reserve"
                className="rounded-full bg-[#D29F71] px-8 py-3 text-[15px] font-bold text-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 hover:bg-[#C08E60] hover:shadow-lg"
              >
                Book a Table
              </Button>
              <Button
                href="/menu"
                variant="outline"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-[15px] font-bold text-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-[2px] transition-all hover:-translate-y-1 hover:bg-white hover:text-ink-900"
              >
                Explore Our Menu
              </Button>
            </div>

            {/* Laurel Badge */}
            <div className="mt-10 opacity-90 drop-shadow-lg">
              <LaurelBadge lines={["Best Heritage", "Cuisine 2026"]} />
            </div>

            {/* Progress dots */}
            <div className="mt-8 flex gap-2.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === active
                    ? "w-10 bg-[#D29F71]"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}