export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price?: number;
  image?: string;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
