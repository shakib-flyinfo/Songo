"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-ink-900/10 bg-[#FDFBF7]/95 shadow-sm backdrop-blur-md"
        : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent" // ইমেজের ওপরে কালো গ্রেডিয়েন্ট
        }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 md:py-5">

        {/* Brand */}
        <Link href="/" aria-label="SHONGO home" className="shrink-0 transition-transform hover:scale-105">
          <div className={`origin-left transition-all duration-300 ${!scrolled && "brightness-0 invert drop-shadow-md"}`}>
            <Logo />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((l) => {
            const isActive =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative text-[15px] font-semibold tracking-wide transition-all duration-300 ${scrolled
                  ? isActive
                    ? "text-ink-900"
                    : "text-ink-700 hover:text-ink-900"
                  : isActive
                    ? "text-white drop-shadow-md"
                    : "text-white/90 hover:text-white drop-shadow-md"
                  }`}
              >
                {l.label}

                {/* Underline */}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-300 ${isActive
                    ? "w-full bg-copper-500"
                    : "w-0 bg-copper-500 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Reserve Button - Solid Copper Color */}
          <Button
            href="/reserve"
            size="md"
            className={`hidden rounded-full px-6 py-2.5 text-[13.5px] font-bold tracking-wide transition-all md:inline-flex ${scrolled
              ? "bg-[#D29F71] text-white shadow-md hover:-translate-y-0.5 hover:bg-[#C08E60] hover:shadow-lg"
              : "bg-[#D29F71] text-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#C08E60]"
              }`}
          >
            Reserve a Table
          </Button>

          {/* Mobile Toggle */}
          <button
            className={`grid size-11 place-items-center rounded-lg transition-colors md:hidden ${scrolled
              ? "text-ink-900 hover:bg-ink-900/5"
              : "text-white drop-shadow-md hover:bg-white/10"
              }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}