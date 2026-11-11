"use client";

import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/types";

type Props = {
  categories: MenuCategory[];
  active: string;
  onChange: (id: string) => void;
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
      {categories.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c.id)}
          className={cn(
            "shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300",
            active === c.id
              ? "border-[#D29F71] bg-[#D29F71] text-white shadow-md shadow-[#D29F71]/30" // অ্যাক্টিভ স্টেট (সলিড কপার)
              : "border-ink-900/10 bg-white text-ink-700 hover:border-copper-300 hover:bg-copper-50 hover:text-copper-700" // ইনঅ্যাক্টিভ স্টেট
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}