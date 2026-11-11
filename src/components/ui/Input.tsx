import { cn } from "@/lib/utils";

export const fieldBase =
  "w-full rounded-lg border border-line bg-cream-50 px-3 py-2.5 text-[12px] text-ink-700 outline-none transition-colors placeholder:text-ink-500 focus:border-copper-400";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  error?: string;
};

export default function Input({ icon, error, className, ...rest }: Props) {
  return (
    <div>
      <div className="relative">
        <input
          className={cn(fieldBase, icon && "pr-9", error && "border-red-300", className)}
          aria-invalid={!!error}
          {...rest}
        />
        {icon && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-500">
            {icon}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-[10px] text-red-500">{error}</p>}
    </div>
  );
}
