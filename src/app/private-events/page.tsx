import Image from "next/image";
import Button from "@/components/ui/Button";
import { images } from "@/data/images";
import { CalendarDays, UtensilsCrossed, Sparkles } from "lucide-react"; // সুন্দর আইকন

export default function PrivateEvents() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] pb-28 pt-32 md:pt-40">
            <div className="mx-auto max-w-[1240px] px-5 md:px-8">

                {/* ===== Hero Section for Events ===== */}
                <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">

                    {/* বাম দিকের টেক্সট */}
                    <div>
                        <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.25em] text-copper-600">
                            Exclusive Gatherings
                        </span>
                        <h1 className="text-[44px] font-serif font-bold leading-[1.1] text-ink-900 md:text-[54px]">
                            Host Your <br />
                            <span className="italic text-copper-600">Special Moments</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-[16px] font-medium leading-relaxed text-ink-600 md:text-[17px]">
                            From intimate anniversaries to corporate dinners, our private dining
                            spaces offer a bespoke experience tailored to your needs.
                            Enjoy a curated menu by our head chef in an elegant,
                            heritage-inspired setting.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Button
                                href="#contact"
                                className="rounded-full bg-[#D29F71] px-8 py-3.5 text-[15px] font-bold tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#C08E60] hover:shadow-xl"
                            >
                                Enquire Now
                            </Button>
                        </div>
                    </div>

                    {/* ডান দিকের ছবি */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/10 md:aspect-[4/5]">
                        {/* ছবির ওপর একটি হালকা ডার্ক গ্রেডিয়েন্ট */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <Image
                            src={images.hero.scene1}
                            alt="Private dining setup"
                            fill
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* ===== Features / Amenities Section ===== */}
                <div className="mt-24 md:mt-32">
                    <div className="mb-12 text-center">
                        <h2 className="text-[32px] font-serif font-bold text-ink-900 md:text-[40px]">
                            What We <span className="italic text-copper-600">Offer</span>
                        </h2>
                        <p className="mt-3 text-[15px] text-ink-600">
                            Everything you need for a flawless and memorable event.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                        {[
                            {
                                title: "Custom Menus",
                                desc: "Tailored tasting menus for your specific preferences and dietary needs.",
                                icon: UtensilsCrossed
                            },
                            {
                                title: "Exclusive Spaces",
                                desc: "Private rooms designed to ensure intimacy and dedicated service.",
                                icon: Sparkles
                            },
                            {
                                title: "Event Coordination",
                                desc: "Our team handles every detail from decor to timings.",
                                icon: CalendarDays
                            },
                        ].map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={i}
                                    // কার্ডে হোভার এফেক্ট এবং সুন্দর বর্ডার/শ্যাডো
                                    className="group relative overflow-hidden rounded-3xl border border-ink-900/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-copper-200 hover:shadow-xl md:p-10"
                                >
                                    {/* আইকন কন্টেইনার */}
                                    <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-copper-50 text-copper-600 transition-colors group-hover:bg-copper-600 group-hover:text-white">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="font-serif text-[22px] font-bold text-ink-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                                        {feature.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </main>
    );
}