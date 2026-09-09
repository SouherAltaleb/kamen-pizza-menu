import type { MenuItem } from "../types/menu";

export const burger: MenuItem[] = [
  {
    id: "84",
    number: "85",
    name: "Hamburger",
    description: "Rindfleisch-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "C", "G"],
    category: "Burger",
    image: "/burger/hamburger.png",
    sizes: [
      { size: "Einzeln", price: "6,50 €" },
      { size: "Mit Pommes", price: "9,50 €" },
    ],
  },
  {
    id: "85",
    number: "86",
    name: "Cheeseburger",
    description:
      "Rindfleisch-Patty, Käse, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "C", "G", "2", "3"],
    category: "Burger",
    image: "/burger/cheeseburger.png",
    sizes: [
      { size: "Einzeln", price: "7,00 €" },
      { size: "Mit Pommes", price: "10,00 €" },
    ],
  },
  {
    id: "86",
    number: "87",
    name: "Chili Cheese Burger",
    description: "mit Jalapeños und Paprika",
    allergens: ["A", "C", "G", "2", "3"],
    category: "Burger",
    image: "/burger/chili-cheese-burger.png",
    sizes: [
      { size: "Einzeln", price: "7,00 €" },
      { size: "Mit Pommes", price: "10,00 €" },
    ],
  },
  {
    id: "87",
    number: "88",
    name: "Chicken Burger",
    description: "Hähnchen-Patty, Salat, Tomaten, Zwiebeln und Burgersauce",
    allergens: ["A", "C", "G"],
    category: "Burger",
    image: "/burger/chicken-burger.png",
    sizes: [
      { size: "Einzeln", price: "6,50 €" },
      { size: "Mit Pommes", price: "9,50 €" },
    ],
  },
];
