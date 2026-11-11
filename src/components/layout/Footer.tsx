import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin,  ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteInfo } from "@/data/siteInfo";

const socialIcons = { Facebook, Instagram, Twitter, YouTube: Youtube } as const;

export default function Footer() {
  return (
    // Figma-র মতো হালকা ওয়ার্ম গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড
    <footer className="relative bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-[#F2E8DB] pt-16 pb-8 text-ink-900">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">

        {/* ===== Logo (Centered) ===== */}
        <div className="flex justify-center pb-12">
          <Logo />
        </div>

        {/* ===== Main Columns ===== */}
        <div className="grid gap-10 border-t border-ink-900/10 pt-12 text-[13px] md:grid-cols-[1.2fr_0.8fr_1.5fr] md:gap-16">

          {/* 1. Location & Hours */}
          <div>
            <h4 className="mb-5 font-sans text-[13px] font-semibold text-ink-900">
              Location &amp; Hours
            </h4>
            <ul className="space-y-4">
              {siteInfo.locations.map((l) => (
                <li key={l.name} className="grid grid-cols-[1.5fr_1fr] items-center gap-4">
                  <span className="flex items-center gap-2 font-medium text-ink-800">
                    <MapPin size={14} className="text-ink-900" />
                    {l.name}
                  </span>
                  <span className="text-ink-600">{l.hours}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 pt-2 font-medium text-ink-800">
                <span aria-hidden className="size-2.5 rounded-full bg-ink-900" />
                {siteInfo.venue}
              </li>
            </ul>
          </div>

          {/* 2. Links */}
          <div>
            <h4 className="mb-5 font-sans text-[13px] font-semibold text-ink-900">
              Links
            </h4>
            <ul className="space-y-3.5">
              {siteInfo.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-ink-600 transition-colors hover:text-copper-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Newsletter & Social */}
          <div>
            <h4 className="mb-5 font-sans text-[13px] font-semibold text-ink-900">
              Subscribe for Culinary Events
            </h4>

            {/* Custom Newsletter Input matching Figma */}
            <form className="flex w-full max-w-sm items-center overflow-hidden rounded-full border border-ink-900/20 bg-white/60 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent px-4 py-2.5 text-[12px] text-ink-900 outline-none placeholder:text-ink-400"
                required
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center rounded-full bg-copper-600 p-2.5 text-white transition-colors hover:bg-copper-700 m-1"
                aria-label="Subscribe"
              >
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {siteInfo.social.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid size-8 place-items-center rounded-full bg-ink-900 text-white transition-colors hover:bg-copper-600"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-16 text-center text-[11px] text-ink-500">
          <p>{siteInfo.copyright || "Copyright 2026 - Reserved - Privacy Policy"}</p>
        </div>

      </div>
    </footer>
  );
}