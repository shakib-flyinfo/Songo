import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { fieldBase } from "@/components/ui/Input";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string };

export default function Select({ error, className, children, ...rest }: Props) {
  const empty = rest.value === "";
  return (
    <div>
      <div className="relative">
        <select
          className={cn(
            fieldBase,
            "appearance-none pr-8",
            empty && "text-ink-500",
            error && "border-red-300",
            className
          )}
          aria-invalid={!!error}
          {...rest}
        >
          {children}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-500"
        />
      </div>
      {error && <p className="mt-1 text-[10px] text-red-500">{error}</p>}
    </div>
  );
}
