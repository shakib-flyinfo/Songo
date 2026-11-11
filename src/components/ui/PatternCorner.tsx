import { images } from "@/data/images";

const fade =
  "radial-gradient(circle at var(--px,100%) var(--py,0%), black 0%, transparent 75%)";

export default function PatternCorner({ className = "" }: { className?: string }) {
  // নিজের প্যাটার্ন ছবি দেওয়া থাকলে সেটা ব্যবহার হবে
  if (images.decor.pattern) {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute ${className}`}
        style={{
          backgroundImage: `url(${images.decor.pattern})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maskImage: fade,
          WebkitMaskImage: fade,
        }}
      />
    );
  }

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute text-copper-400 ${className}`}
      width="160"
      height="160"
      viewBox="0 0 160 160"
      style={{
        maskImage: "radial-gradient(circle at var(--px,100%) var(--py,0%), black 0%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(circle at var(--px,100%) var(--py,0%), black 0%, transparent 75%)",
      }}
    >
      <defs>
        <pattern id="jali" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10 1 L19 10 L10 19 L1 10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M10 6 L14 10 L10 14 L6 10 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="160" height="160" fill="url(#jali)" opacity="0.55" />
    </svg>
  );
}
