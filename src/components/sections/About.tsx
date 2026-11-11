import ImageBox from "@/components/ui/ImageBox";
import PatternCorner from "@/components/ui/PatternCorner";
import { images } from "@/data/images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#FDFBF7] py-20 md:py-28">
      {/* ব্যাকগ্রাউন্ড প্যাটার্ন */}
      <PatternCorner className="right-0 top-0 h-28 w-28 text-copper-500/20 [--px:100%] [--py:0%] md:h-40 md:w-40" />
      <PatternCorner className="bottom-0 left-0 h-28 w-28 text-copper-500/20 [--px:0%] [--py:100%] md:h-44 md:w-44" />

      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 relative grid items-start gap-12 md:grid-cols-[1fr_1.05fr] md:gap-0">

        {/* ===== বাম দিকের টেক্সট ===== */}
        <div className="relative z-10">

          {/* ছোট লেবেল */}
          <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-copper-600">
            Our Heritage
          </span>

          {/* হেডিং (Serif, Italic এবং রিচ কালার) */}
          <h2 className="text-[42px] font-serif font-bold leading-[1.1] text-ink-900 md:text-[56px]">
            The Soul of <br />
            <span className="italic text-copper-600">Bengali Cuisine</span>
          </h2>

          {/* সাবটেক্সট */}
          <p className="mt-6 max-w-md text-[15px] font-medium leading-relaxed text-ink-600 md:text-[16px]">
            Locally sourced Sylhet tea, Padma river fish and fragrant spices,
            served in a warm space shaped by hand-woven cane work and abundant
            plants. Experience the true essence of our culinary heritage.
          </p>

          {/* লার্ন মোর লিংক */}
          <Link
            href="/our-story"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold tracking-wide text-copper-600 transition-colors hover:text-ink-900 group"
          >
            Discover Our Story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>

          {/* 
            ডেস্কটপে ডানের বড় ছবির নিচের কোণে ঢুকে যায় (ডিজাইনের মতো)
            এখানে শ্যাডো (shadow-xl) যোগ করা হয়েছে 
          */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:w-[118%]">
            <ImageBox
              src={images.about.chef}
              alt="Chef plating a dish"
              className="aspect-[4/3] rounded-2xl shadow-xl shadow-ink-900/10" // 👈 শ্যাডো যোগ করা হলো
              sizes="(min-width: 768px) 22vw, 45vw"
            />
            <div className="rounded-2xl bg-white p-2 shadow-1xl  ">
              <ImageBox
                src={images.about.plating}
                alt="Plated Shorshe Ilish"
                className="aspect-[4/3] rounded-xl"
                sizes="(min-width: 768px) 22vw, 45vw"
              />
            </div>
          </div>
        </div>

        {/* ===== ডান দিকের বড় ছবি ===== */}
        <div className="relative mt-8 md:mt-0">
          {/* ছবির পেছনে হালকা কপার গ্লো (Glow) */}
          <div className="absolute -inset-2 rounded-3xl bg-copper-100/40 blur-xl" />

          <ImageBox
            src={images.about.interior}
            alt="SHONGO dining interior"
            className="relative aspect-[4/3] rounded-3xl shadow-2xl shadow-ink-900/20 md:aspect-[1.3/1]" // 👈 শ্যাডো যোগ করা হলো
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

      </div>
    </section>
  );
}