"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { images } from "@/data/images";

export default function ReservePage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-24 md:py-32">

            {/* ===== Full Screen Background Image ===== */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={images.about.interior} // আপনার রেস্টুরেন্টের ইমেজ
                    alt="Restaurant dining table setup"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* শক্ত ওয়ার্ম ওভারলে যাতে সাদা টেক্সট ফুটে ওঠে */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1512]/95 via-black/40 to-black/30" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[900px] px-5 md:px-8">

                {/* ===== Header (টেক্সট কালার ফিক্স এবং সাইজ বড় করা হয়েছে) ===== */}
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[0.25em] text-[#D29F71] drop-shadow-md">
                        Exclusive Dining
                    </span>

                    {/* 
            এখানে text-white এবং !text-white! ব্যবহার করা হয়েছে যাতে কোনোভাবেই কালো না হয়।
            ফন্ট সাইজ 6xl থেকে 7xl করা হয়েছে। 
          */}
                    <h1 className="!text-white font-serif text-5xl font-bold tracking-tight drop-shadow-2xl md:text-6xl lg:text-[80px]">
                        Reserve a Table
                    </h1>

                    <p className="!text-white/90 mx-auto mt-6 max-w-lg text-[16px] font-medium leading-relaxed drop-shadow-md md:text-[18px]">
                        Book your culinary experience at SHONGO. We look forward to hosting you for an unforgettable evening.
                    </p>
                </div>

                {/* ===== Form Container (Glassmorphism) ===== */}
                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-12">
                    {submitted ? (
                        <div className="py-16 text-center animate-hero-fade">
                            <h2 className="font-serif text-4xl font-bold text-[#D29F71]">Reservation Confirmed!</h2>
                            <p className="mt-4 text-[16px] text-white/90">Thank you for booking with us. We will send a confirmation email shortly.</p>
                            <Button
                                href="/"
                                className="mt-8 rounded-full bg-[#D29F71] px-10 py-4 text-[15px] font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-[#C08E60] hover:shadow-lg"
                            >
                                Back to Home
                            </Button>
                        </div>
                    ) : (
                        <form
                            className="grid gap-6 md:gap-8 md:grid-cols-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setSubmitted(true);
                            }}
                        >
                            {/* Name */}
                            <div className="flex flex-col gap-3">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-[#D29F71]">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-[16px] font-medium text-white outline-none placeholder:text-white/40 focus:border-[#D29F71] focus:bg-black/50 focus:ring-1 focus:ring-[#D29F71] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-3">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-[#D29F71]">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-[16px] font-medium text-white outline-none placeholder:text-white/40 focus:border-[#D29F71] focus:bg-black/50 focus:ring-1 focus:ring-[#D29F71] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Date */}
                            <div className="flex flex-col gap-3">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-[#D29F71]">Date</label>
                                <input
                                    required
                                    type="date"
                                    className="rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-[16px] font-medium text-white outline-none focus:border-[#D29F71] focus:bg-black/50 focus:ring-1 focus:ring-[#D29F71] transition-all [color-scheme:dark]"
                                />
                            </div>

                            {/* Time */}
                            <div className="flex flex-col gap-3">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-[#D29F71]">Time</label>
                                <input
                                    required
                                    type="time"
                                    className="rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-[16px] font-medium text-white outline-none focus:border-[#D29F71] focus:bg-black/50 focus:ring-1 focus:ring-[#D29F71] transition-all [color-scheme:dark]"
                                />
                            </div>

                            {/* Guests */}
                            <div className="flex flex-col gap-3 md:col-span-2">
                                <label className="text-[12px] font-bold uppercase tracking-widest text-[#D29F71]">Number of Guests</label>
                                <select className="rounded-xl border border-white/20 bg-black/30 px-5 py-4 text-[16px] font-medium text-white outline-none focus:border-[#D29F71] focus:bg-black/50 focus:ring-1 focus:ring-[#D29F71] transition-all appearance-none cursor-pointer">
                                    <option className="text-black bg-white">1 Person</option>
                                    <option className="text-black bg-white">2 People</option>
                                    <option className="text-black bg-white">3 People</option>
                                    <option className="text-black bg-white">4 People</option>
                                    <option className="text-black bg-white">5+ People</option>
                                </select>
                            </div>

                            <div className="mt-6 md:col-span-2">
                                <Button
                                    type="submit"
                                    className="w-full rounded-full bg-[#D29F71] py-4 text-[16px] font-bold uppercase tracking-widest text-white shadow-[0_4px_20px_rgba(210,159,113,0.4)] transition-all hover:-translate-y-1 hover:bg-[#C08E60] hover:shadow-[0_6px_25px_rgba(210,159,113,0.6)]"
                                >
                                    Confirm Reservation
                                </Button>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </main>
    );
}