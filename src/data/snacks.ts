export const snacks = [
  {
    id: "86",
    number: "86",
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
    id: "87",
    number: "87",
    name: "Chicken Nuggets",
    description: "6 Stück + 1 Dip nach Wahl",
    allergens: ["a"],
    category: "Snacks & Beilagen",
    image: "/snacks/chicken-nuggets.png",
    sizes: [{ size: "", price: "6,00 €" }],
  },

  // {
  //   id: "88",
  //   number: "88",
  //   name: "Chili Cheese Nuggets",
  //   description: "6 Stück + 1 Dip nach Wahl",
  //   allergens: ["a", "l"],
  //   category: "Snacks & Beilagen",
  //   image: "/snacks/chili-nuggets.png",
  //   sizes: [{ size: "", price: "6,50 €" }],
  // },

  {
    id: "89",
    number: "89",
    name: "Chicken Nuggets",
    description: "6 Stück + Pommes + 1 Dip nach Wahl",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/chicken-nuggets-pommes.png",
    sizes: [{ size: "", price: "7,50 €" }],
  },
  {
    id: "90",
    number: "90",
    name: "Hummus",
    description: "Hummus mit Pommes oder gemischtem Salat",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/hummus.png",
    sizes: [{ size: "", price: "6,50 €" }],
  },
];

export const snackSauces = [
  {
    name: "Hausgemachte Kräuterbutter",
    price: "1,50 €",
    allergens: ["L"],
  },

  {
    name: "Aioli",
    price: "1,50 €",
    allergens: ["H"],
  },

  {
    name: "Mayonnaise, Ketchup",
    price: "0,50 €",
    allergens: ["H"],
  },
];
