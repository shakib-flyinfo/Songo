import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageBox from "@/components/ui/ImageBox";
import type { Dish } from "@/types";

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/5 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-copper-200 hover:shadow-xl">

      {/* ইমেজ সেকশন */}
      <div className="relative overflow-hidden rounded-xl">
        <ImageBox
          src={dish.image}
          alt={dish.name}
          className="aspect-square w-full transition-transform duration-700 group-hover:scale-105"
        />

        {/* কাস্টম ব্যাজ (Badge কম্পোনেন্টের বদলে span ব্যবহার করা হলো) */}
        {dish.tag && (
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900 shadow-sm backdrop-blur-md">
              {dish.tag}
            </span>
          </div>
        )}
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
        <h3 className="font-serif text-[18px] font-bold leading-tight text-ink-900 transition-colors group-hover:text-copper-600 md:text-[20px]">
          {dish.name}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink-600">
          {dish.description}
        </p>

        {/* ভিউ ডিটেইলস লিংক ও অ্যারো আইকন */}
        <div className="mt-4 flex items-center justify-between border-t border-ink-900/5 pt-3">
          <Link
            href={`/menu/${dish.id}`}
            className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-copper-600 transition-colors hover:text-ink-900"
          >
            View Details
          </Link>

          <span className="grid size-7 place-items-center rounded-full bg-copper-50 text-copper-600 transition-colors group-hover:bg-copper-600 group-hover:text-white">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}