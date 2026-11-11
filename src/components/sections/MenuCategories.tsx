"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryTabs from "@/components/ui/CategoryTabs";
import MenuItemCard from "@/components/ui/MenuItemCard";
import MenuListItem from "@/components/ui/MenuListItem";
import PatternCorner from "@/components/ui/PatternCorner";
import { menuCategories, menuItems } from "@/data/menu";

export default function MenuCategories() {
  const [active, setActive] = useState(menuCategories[0].id);
  const items = menuItems.filter((i) => i.categoryId === active);

  return (
    // ব্যাকগ্রাউন্ড হালকা ক্রিম করা হয়েছে এবং প্যাডিং বাড়ানো হয়েছে
    <section id="menu" className="relative overflow-hidden bg-[#FDFBF7] py-20 md:py-28">
      {/* কোণার প্যাটার্ন */}
      <PatternCorner className="right-0 top-0 h-32 w-32 text-copper-500/20 [--px:100%] [--py:0%] md:h-44 md:w-44" />
      <PatternCorner className="bottom-0 left-0 h-32 w-32 text-copper-500/20 [--px:0%] [--py:100%] md:h-44 md:w-44" />

      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 relative">

        {/* সেকশন হেডিং */}
        <div className="text-center md:text-left">
          <SectionHeading
            title="The Menu Categories"
            subtitle="Seamless Filter"
          />
        </div>

        {/* ক্যাটাগরি ট্যাব ফিল্টার */}
        <div className="mt-8 flex justify-center md:justify-center">
          <CategoryTabs
            categories={menuCategories}
            active={active}
            onChange={setActive}
          />
        </div>

        {/* মোবাইল: ২ কলামের টেক্সট লিস্ট */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">
          {items.map((item) => (
            <MenuListItem key={item.id} item={item} />
          ))}
        </div>

        {/* ট্যাবলেট/ডেস্কটপ: ছবি সহ কার্ড */}
        <div className="mt-12 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}