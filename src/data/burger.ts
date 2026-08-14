import type { MenuItem } from "../types/menu";

export const burger: MenuItem[] = [
  {
    id: "78",
    number: "78",
    name: "Hamburger",
    description: "Rindfleisch-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "U"],
    category: "Burger & Falafel",
    image: "/burger/hamburger.png",
    sizes: [{ size: "Burger", price: "6,00 €" }],
  },

  {
    id: "79",
    number: "79",
    name: "Cheeseburger",
    description:
      "Rindfleisch-Patty, Käse, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "L", "U"],
    category: "Burger & Falafel",
    image: "/burger/cheeseburger.png",
    sizes: [{ size: "Burger", price: "7,00 €" }],
  },

  {
    id: "80",
    number: "80",
    name: "Chicken Burger",
    description: "Hähnchen-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "U"],
    category: "Burger & Falafel",
    image: "/burger/chicken-burger.png",
    sizes: [{ size: "Burger", price: "6,00 €" }],
  },

  {
    id: "81",
    number: "81",
    name: "Chili Cheese Burger",
    description: "mit Jalapenos und Paprika",
    allergens: ["A", "H", "U"],
    category: "Burger & Falafel",
    image: "/burger/crispy-chicken.png",
    sizes: [{ size: "Burger", price: "—" }],
  },

  {
    id: "82",
    number: "82",
    name: "Falafel Tasche",
    description: "Falafel, Salat, Tomaten, Zwiebeln und Sauce",
    allergens: ["A", "H", "V"],
    category: "Burger & Falafel",
    image: "/burger/falafel-tasche.png",
    sizes: [{ size: "Burger", price: "6,50 €" }],
  },

  {
    id: "83",
    number: "83",
    name: "Falafel Teller",
    description: "Falafel, Salat, Tomaten, Zwiebeln und Humus-Sauce",
    allergens: ["A", "H", "V"],
    category: "Burger & Falafel",
    image: "/burger/falafel-teller.png",
    sizes: [{ size: "Teller", price: "—" }],
  },
];
