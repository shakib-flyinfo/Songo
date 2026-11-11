import type { Dish } from "@/types";
import { images } from "@/data/images";

// ছবি বদলাতে চাইলে src/data/images.ts এ লিংক বদলাও
export const signatureDishes: Dish[] = [
  {
    id: "kacchi-biryani",
    name: "Kacchi Biryani",
    description:
      "Slow-cooked heritage biryani with tender mutton, aged basmati and a saffron-ghee finish.",
    image: images.menu.kacchiBiryani,
    tag: "Local Favorite",
  },
  {
    id: "shorshe-ilish",
    name: "Shorshe Ilish",
    description:
      "Padma hilsa in a bold mustard and green chili gravy, steamed in banana leaf.",
    image: images.menu.shorsheIlish,
    tag: "Chef's Signature",
  },
  {
    id: "bhorta-platter",
    name: "Bhorta Platter",
    description:
      "A rustic sampler of hand-mashed bhortas, seasoned with mustard oil and fresh herbs.",
    image: images.menu.bhortaPlatter,
    tag: "Chef's Signature",
  },
  {
    id: "chotpoti",
    name: "Chotpoti",
    description:
      "Tangy street-style chickpea medley with tamarind, egg and crisp toppings.",
    image: images.menu.chotpoti,
    tag: "Fragrant & Rich",
  },
];
