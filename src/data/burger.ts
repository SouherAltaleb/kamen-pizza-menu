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
    sizes: [{ size: "Burger", price: "—" }],
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
    sizes: [{ size: "Burger", price: "—" }],
  },

  {
    id: "80",
    number: "80",
    name: "Chicken Burger",
    description: "Hähnchen-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "U"],
    category: "Burger & Falafel",
    image: "/burger/chicken-burger.png",
    sizes: [{ size: "Burger", price: "—" }],
  },

  {
    id: "81",
    number: "81",
    name: "Crispy Chicken Burger",
    description: "Crispy-Hähnchen, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "U"],
    category: "Burger & Falafel",
    image: "/burger/crispy-chicken.png",
    sizes: [{ size: "Burger", price: "—" }],
  },

  {
    id: "82",
    number: "82",
    name: "Falafel Burger",
    description: "Falafel, Salat, Tomaten, Zwiebeln und Sauce",
    allergens: ["A", "H", "V"],
    category: "Burger & Falafel",
    image: "/burger/falafel-burger.png",
    sizes: [{ size: "Burger", price: "—" }],
  },

  {
    id: "83",
    number: "83",
    name: "Falafel Teller",
    description: "Falafel, Salat, Tomaten, Zwiebeln und Sauce",
    allergens: ["A", "H", "V"],
    category: "Burger & Falafel",
    image: "/burger/falafel-teller.png",
    sizes: [{ size: "Teller", price: "—" }],
  },
];
