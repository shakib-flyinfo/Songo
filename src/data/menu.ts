import type { MenuCategory, MenuItem } from "@/types";
import { images } from "@/data/images";

export const menuCategories: MenuCategory[] = [
  { id: "starters", label: "Bhorta & Starters" },
  { id: "mains", label: "Main Courses" },
  { id: "biryani", label: "Biryani & Pulao" },
  { id: "desserts", label: "Traditional Desserts" },
  { id: "drinks", label: "Botanical Drinks" },
];

const desc = "Seasoned with mustard oil, fresh herbs and hand-ground spices.";

export const menuItems: MenuItem[] = [
  { id: "s1", categoryId: "starters", name: "Bhorta & Starters", description: desc, price: 650, image: images.menu.bhortaStarters, tag: "Chef's Signature" },
  { id: "s2", categoryId: "starters", name: "Shorshe Ilish", description: desc, price: 1450, image: images.menu.shorsheIlish, tag: "Chef's Signature" },
  { id: "s3", categoryId: "starters", name: "Bhorta Platter", description: desc, price: 850, image: images.menu.bhortaPlatter, tag: "Chef's Signature" },
  { id: "s4", categoryId: "starters", name: "Chingri Malaikari", description: desc, price: 1650, image: images.menu.chingriMalaikari, tag: "Local Favorite" },
  { id: "s5", categoryId: "starters", name: "Chotpoti", description: desc, price: 350, image: images.menu.chotpoti, tag: "Fragrant & Rich" },
  { id: "s6", categoryId: "starters", name: "Mishti Doi", description: desc, price: 250, image: images.menu.mishtiDoi, tag: "Sweet Finish" },

  { id: "m1", categoryId: "mains", name: "Beef Rezala", description: desc, price: 950, image: images.menu.beefRezala },
  { id: "m2", categoryId: "mains", name: "Chicken Roast", description: desc, price: 780, image: images.menu.chickenRoast },
  { id: "m3", categoryId: "mains", name: "Rui Kalia", description: desc, price: 890, image: images.menu.ruiKalia },

  { id: "b1", categoryId: "biryani", name: "Kacchi Biryani", description: desc, price: 650, image: images.menu.kacchiBiryani, tag: "Local Favorite" },
  { id: "b2", categoryId: "biryani", name: "Foto Pulao", description: desc, price: 520, image: images.menu.fotoPulao },
  { id: "b3", categoryId: "biryani", name: "Tehari", description: desc, price: 480, image: images.menu.tehari },

  { id: "d1", categoryId: "desserts", name: "Mishti Doi", description: desc, price: 250, image: images.menu.mishtiDoi },
  { id: "d2", categoryId: "desserts", name: "Rasmalai", description: desc, price: 300, image: images.menu.rasmalai },
  { id: "d3", categoryId: "desserts", name: "Payesh", description: desc, price: 280, image: images.menu.payesh },

  { id: "k1", categoryId: "drinks", name: "Sylheti Seven-Layer Tea", description: desc, price: 320, image: images.menu.tea },
  { id: "k2", categoryId: "drinks", name: "Borhani", description: desc, price: 220, image: images.menu.borhani },
  { id: "k3", categoryId: "drinks", name: "Lebu Pani", description: desc, price: 180, image: images.menu.lebuPani },
];
