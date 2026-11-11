"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { images } from "@/data/images";

// সব ছবি একই সাইজের বক্সে থাকবে
const galleryImages = [
    { src: images.VisualGallery.gallery, alt: "Signature Bengali Thali" },
    { src: images.VisualGallery.gallery1, alt: "Savoring the Flavors" },
    { src: images.VisualGallery.gallery2, alt: "Restaurant Interior" },
    { src: images.VisualGallery.gallery3, alt: "Chef's Special Platter" },
    { src: images.VisualGallery.gallery4, alt: "Traditional Spices" },
    { src: images.VisualGallery.gallery5, alt: "Elegant Dining Setup" },
    { src: images.VisualGallery.gallery6, alt: "Close-up of Authentic Dish" },
    { src: images.VisualGallery.gallery7, alt: "Warm Hospitality" },
];

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[#FDFBF7] pb-28 pt-32 md:pt-40">
            <div className="mx-auto max-w-[1440px] px-5 md:px-8">

                {/* ===== Header ===== */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.25em] text-copper-600">
                        Our Moments
                    </span>
                    <h1 className="text-[44px] font-serif font-bold leading-[1.1] text-ink-900 md:text-[64px]">
                        Visual <span className="italic text-copper-600">Gallery</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-[16px] font-medium leading-relaxed text-ink-600 md:text-[18px]">
                        A glimpse into our culinary world, the vibrant ambiance of SHONGO, and the beautiful memories created around the table.
                    </p>
                </div>

                {/* ===== Perfect Square Grid Gallery ===== */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedImg(img.src)}
                            // aspect-square নিশ্চিত করবে যেন সব ছবি একদম সমান সাইজের বর্গাকার বক্সে থাকে
                            className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-ink-100 shadow-[0_8px_20px_rgb(0,0,0,0.08)] ring-1 ring-ink-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:ring-copper-300"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />

                            {/* Hover Overlay (ডার্ক গ্রেডিয়েন্ট) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Hover Content (Zoom Icon + Text) */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                <div className="grid size-12 place-items-center rounded-full bg-white/20 backdrop-blur-md">
                                    <ZoomIn className="text-white" size={24} />
                                </div>
                                <p className="px-4 text-center font-serif text-[18px] font-bold text-white drop-shadow-md">
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* ===== Full Screen Lightbox Modal ===== */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:rotate-90 hover:scale-110 duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImg(null);
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div
                        className="relative flex w-full max-w-6xl items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImg}
                            alt="Selected Gallery Image"
                            width={1600}
                            height={1200}
                            className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain shadow-2xl animate-in zoom-in-95 duration-300"
                        />
                    </div>
                </div>
            )}

        </main>
    );
}