export const snacks = [
  {
    id: "86",
    number: "86",
    name: "Pommes",
    description: "Knusprige Pommes",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/pommes.png",
    sizes: [{ size: "Portion", price: "3,50 €" }],
  },

  {
    id: "87",
    number: "87",
    name: "Chicken Nuggets",
    description: "6 Stück",
    allergens: ["a"],
    category: "Snacks & Beilagen",
    image: "/snacks/chicken-nuggets.png",
    sizes: [{ size: "6 Stk.", price: "4,50 €" }],
  },

  {
    id: "88",
    number: "88",
    name: "Chili Cheese Nuggets",
    description: "6 Stück",
    allergens: ["a", "l"],
    category: "Snacks & Beilagen",
    image: "/snacks/chili-nuggets.png",
    sizes: [{ size: "6 Stk.", price: "5,00 €" }],
  },

  {
    id: "89",
    number: "89",
    name: "Hummus",
    description: "Hummus mit Pommes oder gemischtem Salat",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/hummus.png",
    sizes: [{ size: "Portion", price: "8,50 €" }],
  },

  {
    id: "90",
    number: "90",
    name: "Gefüllte Pizzabrötchen",
    description:
      "8 Stück mit Käse. Extra Zutaten: Pizzabelag aus Truthahnfleisch, Rindersalami, Thunfisch, Sucuk, Hähnchenbrust, Champignons, Spinat und mehr",
    allergens: ["a", "l"],
    category: "Snacks & Beilagen",
    image: "/snacks/gefuellte-pizzabroetchen.png",
    sizes: [
      { size: "8 Stk.", price: "6,50 €" },
      { size: "Extra Zutaten", price: "2,50 €" },
    ],
  },

  {
    id: "91",
    number: "91",
    name: "Portion Pizzabrötchen",
    description: "8 Stück mit Kräuterbutter",
    allergens: ["a", "l"],
    category: "Snacks & Beilagen",
    image: "/snacks/portion-pizzabroetchen.png",
    sizes: [{ size: "8 Stk.", price: "5,00 €" }],
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
