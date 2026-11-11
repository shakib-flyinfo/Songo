import Link from "next/link";
import type { MenuItem } from "@/types";

/** মোবাইলের টেক্সট-লিস্ট কার্ড (ডিজাইনের মতো, ছবি ছাড়া) */
export default function MenuListItem({ item }: { item: MenuItem }) {
  return (
    <article className="rounded-xl border border-line bg-cream-50 p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[13px] leading-snug text-ink-900">{item.name}</h3>
        {item.price && (
          <span className="shrink-0 text-[11px] text-copper-600">৳{item.price}</span>
        )}
      </div>
      <p className="mt-1.5 line-clamp-3 text-[10px] leading-relaxed text-ink-500">
        {item.description}
      </p>
      <Link href="#menu" className="mt-2 inline-block text-[10px] text-copper-600">
        View Details
      </Link>
    </article>
  );
}
