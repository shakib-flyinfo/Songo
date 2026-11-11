import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** src না থাকলে সাময়িক গ্রেডিয়েন্ট প্লেসহোল্ডার দেখায়; ছবি এলে শুধু src দিলেই হবে। */
export default function ImageBox({ src, alt, className, sizes, priority }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-copper-200 to-copper-100",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 768px) 25vw, 50vw"}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-[11px] text-copper-700/70">
          {alt}
        </span>
      )}
    </div>
  );
}
