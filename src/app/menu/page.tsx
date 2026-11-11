"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/data/images";

const categories = [
    "Signature & Platters",
    "Biryani & Pulao",
    "Main Courses",
    "Desserts",
    "Drinks & Beverages",
    "Snacks & Street Food",
];

const menuItems = [
    // ===== Signature & Platters =====
    { name: "Bhorta Platter", category: "Signature & Platters", desc: "Assorted traditional mashed vegetables served with dry fish.", price: "৳450", tag: "Chef's Special", image: images.menu.bhortaPlatter },
    { name: "Bhorta Starters", category: "Signature & Platters", desc: "A selection of authentic Bengali bhortas to start your meal.", price: "৳350", tag: "", image: images.menu.bhortaStarters },
    { name: "Begun Bhorta", category: "Signature & Platters", desc: "A selection of authentic Bengali bhortas to start your meal.", price: "৳50", tag: "Bengoli Tredition", image: images.menu.begunBhorta },
    { name: "Shutki Bhorta", category: "Signature & Platters", desc: "A selection of authentic Bengali bhortas to start your meal.", price: "৳50", tag: "Bengoli Tredition", image: images.menu.shutkiBhorta },

    // ===== Biryani & Pulao =====
    { name: "Kacchi Biryani", category: "Biryani & Pulao", desc: "Mutton, basmati rice, saffron, ghee", price: "৳480", tag: "Chef's Signature", image: images.menu.kacchiBiryani },
    { name: "Beef Biryani", category: "Biryani & Pulao", desc: "Tender beef chunks layered with aromatic basmati rice.", price: "৳450", tag: "", image: images.menu.beefBiryani },
    { name: "Chicken Biryani", category: "Biryani & Pulao", desc: "Classic chicken biryani cooked with rich spices.", price: "৳380", tag: "", image: images.menu.chickenBiryani },
    { name: "Chingri Biryani", category: "Biryani & Pulao", desc: "Prawn biryani cooked with fragrant spices and ghee.", price: "৳520", tag: "Premium", image: images.menu.chingriBiryani },
    { name: "Akhni Pulao", category: "Biryani & Pulao", desc: "Fragrant basmati rice cooked with rich spices and ghee.", price: "৳320", tag: "", image: images.menu.akhniPulao },
    { name: "Foto Pulao", category: "Biryani & Pulao", desc: "Fragrant sweet pulao with nuts and raisins.", price: "৳300", tag: "", image: images.menu.fotoPulao },
    { name: "Ilish Polao", category: "Biryani & Pulao", desc: "Hilsa fish cooked with aromatic pulao rice.", price: "৳650", tag: "Seasonal", image: images.menu.ilishPolao },
    { name: "Morog Polao", category: "Biryani & Pulao", desc: "Rich and comforting chicken pulao.", price: "৳380", tag: "", image: images.menu.morogPolao },
    { name: "Tehari", category: "Biryani & Pulao", desc: "Spicy beef tehari, a Dhaka street food classic.", price: "৳280", tag: "", image: images.menu.tehari },

    // ===== Main Courses =====
    { name: "Shorshe Ilish", category: "Main Courses", desc: "Hilsa fish, mustard gravy, green chili", price: "৳550", tag: "Local Favorite", image: images.menu.shorsheIlish },
    { name: "Beef Rezala", category: "Main Courses", desc: "Slow-cooked beef in rich yogurt and spice gravy", price: "৳620", tag: "Popular", image: images.menu.beefRezala },
    { name: "Beef Bhuna", category: "Main Courses", desc: "Slow-cooked beef with thick, aromatic spices.", price: "৳580", tag: "", image: images.menu.beefBhuna },
    { name: "Chicken Roast", category: "Main Courses", desc: "Traditional slow-roasted chicken with aromatic spices", price: "৳450", tag: "", image: images.menu.chickenRoast },
    { name: "Chingri Malaikari", category: "Main Courses", desc: "Prawns cooked in rich coconut milk and spices.", price: "৳680", tag: "Premium", image: images.menu.chingriMalaikari },
    { name: "Deshi Murgir Jhol", category: "Main Courses", desc: "Traditional free-range chicken curry with light spices.", price: "৳480", tag: "", image: images.menu.deshiMurgirJhol },
    { name: "Lau Chingri", category: "Main Courses", desc: "Bottle gourd cooked with prawns and mild spices.", price: "৳380", tag: "", image: images.menu.lauChingri },
    { name: "Mutton Kosha", category: "Main Courses", desc: "Rich and spicy slow-cooked mutton curry.", price: "৳650", tag: "Chef's Special", image: images.menu.muttonKosha },
    { name: "Pabdha Macher Jhal", category: "Main Courses", desc: "Spicy river fish curry from the Padma.", price: "৳450", tag: "", image: images.menu.pabdhaMacherJhal },
    { name: "Rui Kalia", category: "Main Courses", desc: "Traditional Rohu fish curry cooked with rich spices.", price: "৳400", tag: "", image: images.menu.ruiKalia },
    { name: "Bhuna Khichuri", category: "Main Courses", desc: "Aromatic rice and lentil dish cooked with ghee.", price: "৳280", tag: "", image: images.menu.bhunaKhichuri },

    // ===== Desserts =====
    { name: "Rasmalai", category: "Desserts", desc: "Soft paneer discs in sweetened, saffron-infused milk", price: "৳220", tag: "Sweet", image: images.menu.rasmalai },
    { name: "Mishti Doi", category: "Desserts", desc: "Traditional sweetened fermented yogurt", price: "৳180", tag: "", image: images.menu.mishtiDoi },
    { name: "Chomchom", category: "Desserts", desc: "Traditional sweet from Porabari.", price: "৳200", tag: "", image: images.menu.chomchom },
    { name: "Jilapi", category: "Desserts", desc: "Crispy, syrup-soaked spiral sweet.", price: "৳150", tag: "", image: images.menu.jilapi },
    { name: "Kalojam", category: "Desserts", desc: "Deep-fried dark sweet dumplings in syrup.", price: "৳180", tag: "", image: images.menu.kalojam },
    { name: "Narkel Naru", category: "Desserts", desc: "Sweet coconut balls.", price: "৳120", tag: "", image: images.menu.narkelNaru },
    { name: "Pati Shapta", category: "Desserts", desc: "Thin crepe rolled with sweetened coconut and milk.", price: "৳200", tag: "", image: images.menu.patiShapta },
    { name: "Payesh", category: "Desserts", desc: "Traditional Bengali rice pudding.", price: "৳160", tag: "", image: images.menu.payesh },
    { name: "Rasgulla", category: "Desserts", desc: "Spongy, syrupy cheese balls.", price: "৳150", tag: "", image: images.menu.rasgulla },
    { name: "Sandesh", category: "Desserts", desc: "Delicate sweet made from fresh paneer.", price: "৳180", tag: "", image: images.menu.sandesh },

    // ===== Drinks & Beverages =====
    { name: "Sylheti Seven Layer Tea", category: "Drinks & Beverages", desc: "Authentic multi-layered tea from Sylhet.", price: "৳180", tag: "Signature Drink", image: images.menu.tea },
    { name: "Borhani", category: "Drinks & Beverages", desc: "Traditional spiced yogurt drink.", price: "৳120", tag: "", image: images.menu.borhani },
    { name: "Lebu Pani", category: "Drinks & Beverages", desc: "Refreshing lemonade with mint.", price: "৳100", tag: "", image: images.menu.lebuPani },
    { name: "Cappuccino", category: "Drinks & Beverages", desc: "Classic espresso with steamed milk foam.", price: "৳220", tag: "", image: images.menu.cappuccino },
    { name: "Cold Coffee", category: "Drinks & Beverages", desc: "Chilled coffee blended with milk and ice.", price: "৳240", tag: "", image: images.menu.coldCoffee },
    { name: "Daab Sharbat", category: "Drinks & Beverages", desc: "Refreshing tender coconut water drink.", price: "৳150", tag: "", image: images.menu.daabSharbat },
    { name: "Espresso", category: "Drinks & Beverages", desc: "Strong and rich single shot of coffee.", price: "৳180", tag: "", image: images.menu.espresso },
    { name: "Iced Latte", category: "Drinks & Beverages", desc: "Chilled espresso with milk over ice.", price: "৳250", tag: "", image: images.menu.icedLatte },
    { name: "Mango Lassi", category: "Drinks & Beverages", desc: "Sweet and creamy yogurt drink with mango.", price: "৳200", tag: "", image: images.menu.mangoLassi },
    { name: "Matka Cha", category: "Drinks & Beverages", desc: "Traditional milk tea served in a clay cup.", price: "৳80", tag: "", image: images.menu.matkaCha },

    // ===== Snacks & Street Food =====
    { name: "Chotpoti", category: "Snacks & Street Food", desc: "Chickpeas, tamarind, boiled egg, spices", price: "৳250", tag: "Street Food", image: images.menu.chotpoti },
    { name: "Fuchka", category: "Snacks & Street Food", desc: "Crispy hollow dough balls filled with spicy potato mix.", price: "৳150", tag: "", image: images.menu.fuchka },
    { name: "Jhal Muri", category: "Snacks & Street Food", desc: "Spicy puffed rice mix with mustard oil.", price: "৳100", tag: "", image: images.menu.jhalMuri },
    { name: "Piyaju", category: "Snacks & Street Food", desc: "Crispy lentil fritters.", price: "৳120", tag: "", image: images.menu.piyaju },
    { name: "Singara", category: "Snacks & Street Food", desc: "Deep-fried pastry with savory potato filling.", price: "৳100", tag: "", image: images.menu.singara },
    { name: "Beguni", category: "Snacks & Street Food", desc: "Deep-fried pastry with savory potato filling.", price: "৳100", tag: "", image: images.menu.beguni },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredItems = menuItems.filter(
        (item) => item.category === activeCategory
    );

    return (
        <main className="min-h-screen bg-[#FDFBF7] pb-28 pt-32 md:pt-40">
            <div className="mx-auto max-w-[1240px] px-5 md:px-8">

                {/* ===== Header ===== */}
                <div className="text-center">
                    <span className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.25em] text-copper-600">
                        Discover Flavors
                    </span>
                    <h1 className="text-[44px] font-serif font-bold text-ink-900 md:text-[56px]">
                        The Menu Categories
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium text-ink-600 md:text-[16px]">
                        Explore our curated selection of authentic Bengali dishes, crafted with passion and served with warmth.
                    </p>
                </div>

                {/* ===== Category Tabs ===== */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full px-6 py-3 text-[14px] font-bold tracking-wide transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#D29F71] text-white shadow-lg shadow-[#D29F71]/40"
                                    : "bg-white text-ink-700 border border-ink-900/10 hover:border-copper-300 hover:bg-copper-50 hover:text-copper-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ===== Menu Grid ===== */}
                <div className="mt-16">
                    {filteredItems.length === 0 ? (
                        <p className="py-10 text-center text-lg text-ink-500">
                            No items available in this category right now.
                        </p>
                    ) : (
                        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredItems.map((item, i) => (
                                <div key={i} className="group flex flex-col cursor-pointer">

                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-2xl bg-ink-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_40px_rgb(0,0,0,0.15)]">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Image Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                        {/* Tag Badge */}
                                        {item.tag && (
                                            <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-widest text-copper-700 shadow-md backdrop-blur-md">
                                                {item.tag}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content Container */}
                                    <div className="mt-6 flex flex-1 flex-col items-start gap-1">
                                        <div className="flex w-full items-start justify-between gap-4">
                                            <h3 className="font-serif text-[22px] font-bold leading-tight text-ink-900 transition-colors group-hover:text-copper-600">
                                                {item.name}
                                            </h3>
                                            <span className="shrink-0 font-serif text-[20px] font-bold text-[#D29F71]">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-ink-600">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}