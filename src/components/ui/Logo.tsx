import Image from "next/image";
import { images } from "@/data/images";

const unopt = (src: string) => src.endsWith(".svg");

export default function Logo({ className = "" }: { className?: string }) {
  const { full, mark } = images.logo;

  // ১) পুরো লোগোর ছবি দেওয়া থাকলে শুধু সেটাই
  if (full) {
    return (
      <Image
        src={full}
        alt="SHONGO — The Art of Bengali Gastronomy"
        width={180}
        height={44}
        unoptimized={unopt(full)}
        className={`h-9 w-auto md:h-11 ${className}`}
        priority
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark ? (
        <Image
          src={mark}
          alt=""
          width={30}
          height={34}
          unoptimized={unopt(mark)}
          className="h-8 w-auto"
        />
      ) : (
        <svg
          width="30"
          height="34"
          viewBox="0 0 30 34"
          fill="none"
          stroke="var(--color-copper-500)"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M21 8c-1.5-3.5-6-4.5-9-2.5S8 12 12 15s9 3 9 8-5 8-10 5" />
          <path d="M24 3c3 3 3 9 0 12M6 19c-3 3-3 9 0 12" opacity="0.6" />
        </svg>
      )}
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[22px] tracking-wide text-ink-900">SHONGO</span>
        <span className="mt-1 text-[8px] tracking-wide text-ink-500">
          The Art of Bengali Gastronomy
        </span>
      </span>
    </span>
  );
}
