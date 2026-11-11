import Image from "next/image";
import { Plus, Image as ImageIcon } from "lucide-react";

interface MenuItem {
  image?: string;
  name: string;
  description?: string;
  price?: string | number;
  tag?: string;
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  // ছবির লিংক আছে কি না চেক করা হচ্ছে
  const imageSrc = item.image?.trim() || undefined;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/5 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-copper-200">

      {/* ইমেজ সেকশন */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-100">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // ছবি না থাকলে প্লেসহোল্ডার আইকন দেখাবে
          <div className="flex h-full w-full items-center justify-center bg-copper-50 text-copper-300">
            <ImageIcon size={32} />
          </div>
        )}

        {/* Tag Badge */}
        {item.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-white/95 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-copper-700 shadow-sm backdrop-blur-md">
            {item.tag}
          </span>
        )}
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-[20px] font-bold leading-tight text-ink-900 transition-colors group-hover:text-copper-600">
            {item.name}
          </h3>
          {item.price && (
            <span className="shrink-0 text-[16px] font-bold text-copper-600">
              ৳{item.price}
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-ink-600">
          {item.description}
        </p>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-copper-300 bg-copper-50 py-2.5 text-[13px] font-bold tracking-wide text-copper-700 transition-all duration-300 hover:bg-copper-600 hover:text-white hover:shadow-md">
          <Plus size={15} /> Add to Order
        </button>
      </div>
    </div>
  );
}