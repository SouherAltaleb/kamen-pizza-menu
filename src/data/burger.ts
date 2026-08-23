import type { MenuItem } from "../types/menu";

export const burger: MenuItem[] = [
  {
    id: "80",
    number: "80",
    name: "Hamburger",
    description: "Rindfleisch-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "U"],
    category: "Burger",
    image: "/burger/hamburger.png",
    sizes: [
      { size: "Einzeln", price: "6,50 €" },
      { size: "Mit Pommes", price: "9,50 €" },
    ],
  },
  {
    id: "81",
    number: "81",
    name: "Cheeseburger",
    description:
      "Rindfleisch-Patty, Käse, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "L", "U"],
    category: "Burger",
    image: "/burger/cheeseburger.png",
    sizes: [
      { size: "Einzeln", price: "7,00 €" },
      { size: "Mit Pommes", price: "10,00 €" },
    ],
  },
  {
    id: "83",
    number: "83",
    name: "Chili Cheese Burger",
    description: "mit Jalapenos und Paprika",
    allergens: ["A", "H", "U"],
    category: "Burger",
    image: "/burger/chili-cheese-burger.png",
    sizes: [
      { size: "Einzeln", price: "7,00 €" },
      { size: "Mit Pommes", price: "10,00 €" },
    ],
  },
  {
    id: "82",
    number: "82",
    name: "Chicken Burger",
    description: "Hähnchen-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "H", "U"],
    category: "Burger",
    image: "/burger/chicken-burger.png",
    sizes: [
      { size: "Einzeln", price: "6,50 €" },
      { size: "Mit Pommes", price: "9,50 €" },
    ],
  },
];
