import Image from "next/image";
import { images } from "@/data/images";

export default function OurStory() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] pb-28 pt-32 md:pt-40">
            <div className="mx-auto max-w-[1200px] px-5 md:px-8">

                {/* ===== Header Section ===== */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.25em] text-copper-600">
                        Our Journey
                    </span>
                    <h1 className="text-[44px] font-serif font-bold leading-[1.1] text-ink-900 md:text-[64px]">
                        The Soul of <br className="hidden md:block" />
                        <span className="italic text-copper-600">Bengali Cuisine</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-[16px] font-medium leading-relaxed text-ink-600 md:text-[18px]">
                        Experience the true taste of Bengali cuisine, where every dish is thoughtfully prepared by our skilled chefs using fresh ingredients, authentic recipes, and a passion for perfection. From the warmth of our hospitality to the care in every detail, we create a dining experience that feels special, memorable, and truly welcoming.
                    </p>
                </div>

                {/* ===== Images Section (Premium Overlap Style) ===== */}
                <div className="mt-16 flex flex-col items-center justify-center gap-8 md:mt-24 md:flex-row md:items-start md:gap-6 lg:gap-10">

                    {/* বাম দিকের ছবি */}
                    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl shadow-ink-900/10 md:mt-12 md:w-1/2">
                        <div className="absolute inset-0 z-10 rounded-[2rem] border-[8px] border-white/50" />

                        <Image
                            src={images.about.chef} // শেফের ছবি
                            alt="Chef preparing food"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* ডান দিকের ছবি (হালকা ওভারল্যাপ এবং ফ্রেমসহ) */}
                    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl md:w-1/2 ">
                        {/* সাদা ফ্রেম ইফেক্ট */}
                        <div className="absolute inset-0 z-10 rounded-[2rem] border-[8px] border-white/50" />
                        <Image
                            src={images.about.interior} // ইন্টেরিয়রের ছবি
                            alt="Restaurant interior"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* ===== Text / Philosophy Section ===== */}
                <div className="relative mx-auto mt-24 max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-ink-900/5 md:p-16 border border-ink-900/5">


                    <h2 className="mt-4 text-[32px] font-serif font-bold text-ink-900 md:text-[40px]">
                        Crafted with <span className="italic text-copper-600">Passion</span>
                    </h2>

                    <p className="mt-6 text-[15px] font-medium leading-relaxed text-ink-600 md:text-[17px]">
                        Every dish we serve is a testament to our heritage. We blend
                        time-honored family recipes with contemporary culinary techniques to
                        create an experience that is both nostalgic and refreshingly new.
                        <br className="hidden md:block" />
                        <br className="hidden md:block" />
                        Our ingredients are sourced locally, honoring the farmers and
                        artisans who make our journey possible.
                    </p>
                </div>

            </div>
        </main>
    );
}