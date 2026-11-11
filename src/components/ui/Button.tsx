import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Button({
  href,
  variant = "solid",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200",
    size === "md" ? "px-6 py-2.5 text-sm" : "px-4 py-2 text-[13px]",
    variant === "solid"
      ? "bg-copper-500 text-white hover:bg-copper-600"
      : "border border-copper-400 text-copper-600 hover:bg-copper-50",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
