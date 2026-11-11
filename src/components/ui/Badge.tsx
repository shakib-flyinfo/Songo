export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-cream-50/90 px-2.5 py-1 text-[10px] font-medium text-copper-700 shadow-sm backdrop-blur-sm">
      {children}
    </span>
  );
}
