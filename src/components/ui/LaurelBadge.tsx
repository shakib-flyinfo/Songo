import Image from "next/image";
import { images } from "@/data/images";

const LEAVES: [number, number, number][] = [
  [17, 40, -20],
  [11, 34, -40],
  [8, 27, -65],
  [8, 20, -90],
  [10, 13, -115],
  [14, 7, -140],
];

function Branch({ flip = false }: { flip?: boolean }) {
  const cls = flip ? "-scale-x-100" : "";

  // award-laurel.svg (বা নিজের ছবি) দেওয়া থাকলে সেটাই, ডান পাশে উল্টে
  if (images.decor.laurel) {
    return (
      <Image
        src={images.decor.laurel}
        alt=""
        width={26}
        height={48}
        unoptimized={images.decor.laurel.endsWith(".svg")}
        className={`h-12 w-auto ${cls}`}
      />
    );
  }

  return (
    <svg width="26" height="48" viewBox="0 0 26 48" fill="none" className={cls} aria-hidden>
      <path d="M20 46 C6 38 3 18 14 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {LEAVES.map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="2"
          ry="4.2"
          fill="currentColor"
          transform={`rotate(${r + 90} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function LaurelBadge({ lines }: { lines: string[] }) {
  return (
    <div className="inline-flex items-center gap-1 text-copper-500">
      <Branch />
      <div className="text-center text-[11px] leading-tight text-ink-700">
        <div className="text-[9px] tracking-widest text-copper-500">★★</div>
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
      <Branch flip />
    </div>
  );
}
