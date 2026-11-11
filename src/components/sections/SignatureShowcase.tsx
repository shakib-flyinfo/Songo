import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";
import { signatureDishes } from "@/data/dishes";

export default function SignatureShowcase() {
  return (
    // ব্যাকগ্রাউন্ড হালকা ক্রিম এবং প্যাডিং বাড়ানো হয়েছে
    <section id="showcase" className="relative overflow-hidden bg-[#FDFBF7] pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8">

        {/* সেকশন হেডিং */}
        <div className="text-center">
          <SectionHeading
            title="Signature Culinary Showcase"
            subtitle="Curated Selection"
          />
        </div>

        {/* কার্ড গ্রিড - গ্যাপ বাড়ানো হয়েছে যাতে দেখতে ক্লিন লাগে */}
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

      </div>
    </section>
  );
}