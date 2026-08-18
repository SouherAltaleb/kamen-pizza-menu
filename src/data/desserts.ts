import type { MenuItem } from "../types/menu";

export const desserts: MenuItem[] = [
  {
    id: "93",
    number: "93",
    name: "Tiramisu",
    description: "Italienisches Dessert, hausgemacht ohne Alkohol",
    allergens: ["A", "L"],
    category: "Dessert",
    image: "/dessert/tiramisu.png",
    sizes: [{ size: "Portion", price: "4,50 €" }],
  },

  {
    id: "94",
    number: "94",
    name: "Ben & Jerry's Chocolate Fudge Brownie",
    description: "Schokoladeneiscreme mit Schokogebäckstücken",
    allergens: ["L"],
    category: "Dessert",
    image: "/dessert/chocolate-fudge-brownie.png",
    sizes: [
      { size: "Klein", price: "4,00 €" },
      { size: "Groß", price: "8,00 €" },
    ],
  },

  {
    id: "95",
    number: "95",
    name: "Ben & Jerry's Cookie Dough",
    description:
      "Vanilleeiscreme mit Schokoladenkeksstücken und Knusperstücken",
    allergens: ["A", "L"],
    category: "Dessert",
    image: "/dessert/chocolate-fudge-brownie.png",
    sizes: [
      { size: "Klein", price: "4,00 €" },
      { size: "Groß", price: "8,00 €" },
    ],
  },

  {
    id: "96",
    number: "96",
    name: "Ben & Jerry's Strawberry Cheesecake",
    description:
      "Erdbeer-Käsekuchen-Eiscreme mit Erdbeerstückchen und Keksstücken",
    allergens: ["A", "L"],
    category: "Dessert",
    image: "/dessert/chocolate-fudge-brownie.png",
    sizes: [
      { size: "Klein", price: "4,00 €" },
      { size: "Groß", price: "8,00 €" },
    ],
  },

  {
    id: "97",
    number: "97",
    name: "Ben & Jerry's Peanut Butter",
    description:
      "Erdnussbutter-Eiscreme mit Erdnussbutter-Strudeln und Schokoladenstückchen",
    allergens: ["A", "J", "L"],
    category: "Dessert",
    image: "/dessert/chocolate-fudge-brownie.png",
    sizes: [
      { size: "Klein", price: "4,00 €" },
      { size: "Groß", price: "8,00 €" },
    ],
  },
];
