"use client";

import { useRef, useState } from "react";
import { Calendar } from "lucide-react";
import ImageBox from "@/components/ui/ImageBox";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];
const GUEST_CHIPS = ["1", "2", "10", "10+"];
const OCCASIONS = ["Birthday", "Anniversary", "Business Dinner", "Family Gathering", "Other"];

/** ফোকাস করলে date/time পিকার, না হলে "Date"/"Time" প্লেসহোল্ডার */
function PickerInput({
  type,
  ...props
}: { type: "date" | "time" } & React.ComponentProps<typeof Input>) {
  const [active, setActive] = useState(false);
  return (
    <Input
      {...props}
      type={active ? type : "text"}
      onFocus={() => setActive(true)}
      onBlur={(e) => {
        if (!e.target.value) setActive(false);
      }}
    />
  );
}

export default function Reservation() {
  const formRef = useRef<HTMLFormElement>(null);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const date = String(fd.get("date") ?? "");
    const time = String(fd.get("time") ?? "");

    const errs: Record<string, string> = {};
    if (!date) errs.date = "Please select a date";
    if (!time) errs.time = "Please select a time";
    if (!guests) errs.guests = "Select guests";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    try {
      // ডেমো এপিআই (আপনার আসল এপিআই এখানে বসাবেন)
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, time, guests, occasion }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      formRef.current?.reset();
      setGuests("");
      setOccasion("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="reserve" className="bg-[#FDFBF7] pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl shadow-ink-900/5 md:grid-cols-[1fr_1.1fr]">

          {/* ===== Form Section ===== */}
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col justify-center gap-4 p-6 sm:p-10 md:p-12 lg:p-16"
          >
            <div className="mb-2 text-center md:text-left">
              <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-copper-600">
                Reservation
              </span>
              <h2 className="text-[36px] font-serif font-bold leading-[1.1] text-ink-900 md:text-[44px]">
                Experience <br />
                <span className="italic text-copper-600">SHONGO</span>
              </h2>
              <p className="mt-3 text-[14px] text-ink-600">
                Book your table for an unforgettable culinary journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <PickerInput
                type="date"
                name="date"
                placeholder="Date"
                aria-label="Date"
                icon={<Calendar size={16} />}
                error={errors.date}
              />
              <PickerInput
                type="time"
                name="time"
                placeholder="Time"
                aria-label="Time"
                error={errors.time}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Select
                aria-label="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                error={errors.guests}
              >
                <option value="" disabled>
                  Guests
                </option>
                {GUEST_OPTIONS.map((g) => (
                  <option key={g} value={g}>
                    {g} {g === "1" ? "Person" : "People"}
                  </option>
                ))}
              </Select>

              <div
                role="group"
                aria-label="Quick guest count"
                className="flex h-[46px] items-center justify-around rounded-xl border border-ink-900/10 bg-[#FDFBF7] px-2 text-[13px] font-medium text-ink-700"
              >
                {GUEST_CHIPS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    aria-pressed={guests === g}
                    onClick={() => setGuests(g)}
                    className={cn(
                      "rounded-lg px-3 py-1.5 transition-all duration-300",
                      guests === g
                        ? "bg-[#D29F71] text-white shadow-sm"
                        : "hover:bg-copper-50 hover:text-copper-700"
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <Select
              aria-label="Occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="h-[46px] rounded-xl"
            >
              <option value="" disabled>
                Select Occasion (Optional)
              </option>
              {OCCASIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Select>

            <Button
              type="submit"
              className="mt-4 w-full rounded-full bg-[#D29F71] py-4 text-[15px] font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#C08E60] hover:shadow-xl disabled:opacity-70"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending Request..." : "Request a Table"}
            </Button>

            <p role="status" aria-live="polite" className="min-h-[20px] text-center text-[13px] font-medium">
              {status === "success" && (
                <span className="text-green-600">
                  Thank you! We&apos;ll confirm your table shortly.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-500">Something went wrong. Please try again.</span>
              )}
            </p>
          </form>

          {/* ===== Image Section ===== */}
          <div className="relative h-full min-h-[350px] w-full overflow-hidden md:min-h-[500px]">
            <ImageBox
              src={images.reservation.family}
              alt="Family dining at SHONGO"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            {/* ছবির ওপর একটি সুন্দর গ্লাস-টেক্সট */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-2xl italic text-white drop-shadow-md md:text-3xl">
                {'"Where every meal becomes a memory."'}
              </p>
              <span className="mt-2 block text-[12px] font-semibold uppercase tracking-widest text-white/80">
                — SHONGO Dining
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}