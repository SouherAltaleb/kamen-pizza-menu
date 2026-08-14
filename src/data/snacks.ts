export const snacks = [
  {
    id: "72",
    number: "72",
    name: "Pommes",
    description: "Knusprige Pommes",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/snacks72.png",
    sizes: [{ size: "Portion", price: "3,50 €" }],
  },

  {
    id: "73",
    number: "73",
    name: "Chicken Nuggets",
    description: "6 Stück",
    allergens: ["a"],
    category: "Snacks & Beilagen",
    image: "/snacks/snacks73.png",
    sizes: [{ size: "6 Stk.", price: "4,50 €" }],
  },

  {
    id: "74",
    number: "74",
    name: "Chili Cheese Nuggets",
    description: "6 Stück",
    allergens: ["a", "l"],
    category: "Snacks & Beilagen",
    image: "/snacks/snacks74.png",
    sizes: [{ size: "6 Stk.", price: "5,00 €" }],
  },
  {
    id: "71",
    number: "71",
    name: "Hummus",
    description: "Hummus mit Pommes oder gemischtem Salat",
    allergens: [],
    category: "Snacks & Beilagen",
    image: "/snacks/hummus.png",
    sizes: [{ size: "Portion", price: "8,50 €" }],
  },
  {
    id: "75",
    number: "75",
    name: "Gefüllte Pizzabrötchen",
    description:
      "8 Stück mit Käse. Extra Zutaten: Pizzabelag aus Truthahnfleisch, Rindersalami, Thunfisch, Sucuk, Hähnchenbrust, Champignons, Spinat und mehr",
    allergens: ["a", "l"],
    category: "Snacks & Beilagen",
    image: "/snacks/snacks75.png",
    sizes: [
      { size: "8 Stk.", price: "6,50 €" },
      { size: "Extra Zutaten", price: "2,50 €" },
    ],
  },

  {
    id: "76",
    number: "76",
    name: "Portion Pizzabrötchen",
    description: "8 Stück mit Kräuterbutter",
    allergens: ["a", "l"],
    category: "Snacks & Beilagen",
    image: "/snacks/snacks76.png",
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
    name: "Barbecue , Sweet & Sour, Curry-Mango",
    price: "0,50 €",
    allergens: [],
  },

  {
    name: "Mayonnaise, Ketchup",
    price: "0,50 €",
    allergens: ["H"],
  },
];
