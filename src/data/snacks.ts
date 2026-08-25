export const snacks = [
  {
    id: "88",
    number: "88",
    name: "Pommes",
    description: "",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/pommes.png",
    sizes: [
      { size: "Klein", price: "3,00 €" },
      { size: "Groß", price: "4,00 €" },
    ],
  },
  {
    id: "89",
    number: "89",
    name: "Chicken Nuggets",
    description: "6 Stück + 1 Dip nach Wahl",
    allergens: ["A", "F", "L"],
    category: "Snacks & Beilagen",
    image: "/snacks/chicken-nuggets.png",
    sizes: [{ size: "", price: "6,00 €" }],
  },
  {
    id: "90",
    number: "90",
    name: "Chicken Nuggets",
    description: "6 Stück + Pommes + 1 Dip nach Wahl",
    allergens: ["A", "F", "L"],
    category: "Snacks & Beilagen",
    image: "/snacks/chicken-nuggets-pommes.png",
    sizes: [{ size: "", price: "7,50 €" }],
  },
  {
    id: "91",
    number: "91",
    name: "Hummus (Vegan)",
    description: "Gemahlene Kichererbsen mit Sesamsauce verrührt",
    allergens: ["K"],
    category: "Snacks & Beilagen",
    image: "/snacks/hummus.png",
    sizes: [{ size: "", price: "4,00 €" }],
  },
];

export const snackSauces = [
  {
    name: "Hausgemachte Kräuterbutter",
    price: "1,50 €",
    allergens: ["G"],
  },
  {
    name: "Aioli",
    price: "1,50 €",
    allergens: ["C", "G", "1"],
  },
  {
    name: "Mayonnaise, Ketchup",
    price: "0,50 €",
    allergens: ["C", "I", "1", "4", "12"],
  },
];
