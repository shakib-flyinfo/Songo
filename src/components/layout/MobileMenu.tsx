import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navLinks";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    // Full width slide-down menu
    <div
      id="mobile-menu"
      className={`absolute inset-x-0 top-[100%] z-40 origin-top border-b border-ink-900/10 bg-[#FDFBF7]/98 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${open
          ? "visible translate-y-0 opacity-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
          : "invisible -translate-y-2 opacity-0"
        }`}
    >
      {/* Inner container with padding so text doesn't touch edges */}
      <nav className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-4 md:px-8">
        {navLinks.map((l) => {
          const isActive =
            pathname === l.href ||
            (l.href !== "/" && pathname.startsWith(l.href));

          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className={`group flex items-center justify-between border-b border-ink-900/5 py-4 text-[16px] font-semibold tracking-wide transition-colors last:border-0 ${isActive ? "text-copper-600" : "text-ink-800 hover:text-ink-900"
                }`}
            >
              <span>{l.label}</span>
              {/* Small copper dot for active page */}
              {isActive && (
                <span className="size-2 rounded-full bg-copper-600" />
              )}
            </Link>
          );
        })}

        {/* Reserve Button - Fixed for Mobile */}
        <div className="mt-6 mb-2 pt-6 border-t border-ink-900/5">
          <Button
            href="/reserve"
            onClick={onClose}
            size="md"
            // `hidden md:inline-flex` সরিয়ে `w-full` দেওয়া হয়েছে যাতে মোবাইলে ফুল উইথ বাটন দেখা যায়
            className="w-full rounded-full bg-[#D29F71] py-4 text-[15px] font-bold tracking-wide text-white shadow-md transition-all hover:bg-[#C08E60] hover:shadow-lg"
          >
            Reserve a Table
          </Button>
        </div>
      </nav>
    </div>
  );
}