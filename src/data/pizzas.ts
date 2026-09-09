export const pizzas = [
  {
    id: "01",
    number: "01",
    name: "Margherita",
    description: "Tomatensauce, Käse",
    allergens: ["A", "G"],
    category: "Klassisch",
    image: "/pizza/pizza1.png",
    sizes: [
      { size: "28 cm", price: "7,50 €" },
      { size: "32 cm", price: "8,00 €" },
    ],
  },

  {
    id: "02",
    number: "02",
    name: "Spinat",
    description: "Spinat und Knoblauch",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza2.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: "03",
    number: "03",
    name: "Brokkoli",
    description: "Brokkoli, Hirtenkäse, Knoblauch",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza3.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: "04",
    number: "04",
    name: "Funghi",
    description: "Frische Champignons",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza4.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: "05",
    number: "05",
    name: "Cipolla",
    description: "Zwiebeln",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza5.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: "06",
    number: "06",
    name: "Paprika",
    description: "Frische Paprika und Zwiebeln",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza6.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "07",
    number: "07",
    name: "Artischocken",
    description: "Artischocken",
    allergens: ["G"],
    category: "Vegetarisch",
    image: "/pizza/pizza7.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "08",
    number: "08",
    name: "Genovese",
    description:
      "Frische Tomaten, Mozzarella, Pesto, geriebene Walnüsse, Rucola (ohne Tomatensauce)",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza8.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "09",
    number: "09",
    name: "Campania",
    description: "Champignons, schwarze Oliven und Mais",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza9.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "10",
    number: "10",
    name: "Vegetaria",
    description: "Spinat, Brokkoli, frische Paprika und Champignons",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza10.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "10a",
    number: "10a",
    name: "Veggi Vegan",
    description: "Champignons, Brokkoli, Paprika, Spinat, veganer Käse",
    allergens: ["A"],
    category: "Vegetarisch",
    image: "/pizza/pizza10.png",
    sizes: [
      { size: "28 cm", price: "10,50 €" },
      { size: "32 cm", price: "11,50 €" },
    ],
  },

  {
    id: "10b",
    number: "10b",
    name: "Nostalgia",
    description: "Milde Peperoni, Hirtenkäse, schwarze Oliven, Knoblauch",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza10b.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "11",
    number: "11",
    name: "Herzform-Pizza",
    description: "Herzform-Pizza mit Käserand und zwei Zutaten nach Wunsch",
    allergens: ["A", "G", "C", "D", "7"],
    category: "Spezial",
    image: "/pizza/pizza11.png",
    sizes: [{ size: "32 cm", price: "11,50 €" }],
  },

  {
    id: "12",
    number: "12",
    name: "4 Formaggi",
    description: "4 verschiedene Käsesorten",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza12.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "13",
    number: "13",
    name: "Rindersalami",
    description: "Rindersalami",
    allergens: ["A", "G", "2", "4"],
    category: "Fleisch",
    image: "/pizza/pizza13.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: "14",
    number: "14",
    name: "Prosciutto",
    description: "Pizzabelag aus Truthahnfleisch",
    allergens: ["A", "G", "2", "4"],
    category: "Fleisch",
    image: "/pizza/pizza14.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: "15",
    number: "15",
    name: "Dönerpizza",
    description: "Dönerfleisch, Zwiebeln und Sauce Hollandaise",
    allergens: ["A", "G", "C", "J"],
    category: "Döner",
    image: "/pizza/pizza15.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "15a",
    number: "15a",
    name: "Zazi Döner",
    description: "Dönerfleisch, Brokkoli, Sauce Hollandaise und Zaziki",
    allergens: ["A", "G", "C", "J"],
    category: "Döner",
    image: "/pizza/pizza15a.png",
    sizes: [
      { size: "28 cm", price: "11,00 €" },
      { size: "32 cm", price: "12,00 €" },
    ],
  },

  {
    id: "16",
    number: "16",
    name: "Knoblauchwurst",
    description: "Knoblauchwurst und Zwiebeln",
    allergens: ["A", "G", "I", "J", "F", "4", "2", "5"],
    category: "Fleisch",
    image: "/pizza/pizza16.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "17",
    number: "17",
    name: "Pollo",
    description: "Hähnchenbruststreifen, Brokkoli und Mais",
    allergens: ["A", "G", "4"],
    category: "Fleisch",
    image: "/pizza/pizza17.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "17a",
    number: "17a",
    name: "Barbecue",
    description: "Barbecue Sauce, Hähnchenbruststreifen, Paprika und Zwiebeln",
    allergens: ["A", "G", "4"],
    category: "Fleisch",
    image: "/pizza/pizza17a.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "17b",
    number: "17b",
    name: "Pollo Hollandaise",
    description: "Hähnchenbruststreifen, Brokkoli, Sauce Hollandaise, Mais",
    allergens: ["A", "G"],
    category: "Fleisch",
    image: "/pizza/pizza17b.png",
    sizes: [
      { size: "28 cm", price: "11,00 €" },
      { size: "32 cm", price: "12,00 €" },
    ],
  },

  {
    id: "18",
    number: "18",
    name: "Chicken Hollandaise",
    description:
      "Hähnchen, Brokkoli und Mais mit Sauce Hollandaise – ohne Tomatensauce",
    allergens: ["A", "G", "C"],
    category: "Fleisch",
    image: "/pizza/pizza18.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "18a",
    number: "18a",
    name: "Capricciosa",
    description: "Pizzabelag aus Truthahnfleisch und Champignons",
    allergens: ["A", "G", "2", "4"],
    category: "Fleisch",
    image: "/pizza/pizza18a.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "19",
    number: "19",
    name: "Da Roma",
    description: "Pizzabelag aus Truthahnfleisch, Rindersalami und Champignons",
    allergens: ["A", "G", "2", "4", "5"],
    category: "Fleisch",
    image: "/pizza/pizza19.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "20",
    number: "20",
    name: "Hawaii",
    description: "Pizzabelag aus Truthahnfleisch und Ananas",
    allergens: ["A", "G", "2", "4"],
    category: "Fleisch",
    image: "/pizza/pizza20.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "21",
    number: "21",
    name: "Quattro Stagioni",
    description:
      "Rindersalami, Thunfisch, Pizzabelag aus Truthahnfleisch und Champignons",
    allergens: ["A", "G", "2", "4", "5"],
    category: "Fleisch",
    image: "/pizza/pizza21.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "22",
    number: "22",
    name: "Diavolo",
    description: "Rindersalami, Zwiebeln, Peperoni, Rucola, Parmesan",
    allergens: ["A", "G", "2", "4"],
    category: "Fleisch",
    image: "/pizza/pizza22.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "23",
    number: "23",
    name: "Tonno",
    description: "Thunfisch und Zwiebeln",
    allergens: ["A", "G", "D"],
    category: "Fisch",
    image: "/pizza/pizza23.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "24",
    number: "24",
    name: "Scampis",
    description: "Scampis, Spinat und Knoblauch",
    allergens: ["A", "G", "B"],
    category: "Fisch",
    image: "/pizza/pizza24.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "25",
    number: "25",
    name: "Salmone",
    description: "Lachs, Spinat und Knoblauch",
    allergens: ["A", "G", "D"],
    category: "Fisch",
    image: "/pizza/pizza25.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "26",
    number: "26",
    name: "Frutti di Mare",
    description: "Meeresfrüchte und Knoblauch",
    allergens: ["A", "G", "D", "B", "N"],
    category: "Fisch",
    image: "/pizza/pizza26.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "27",
    number: "27",
    name: "Napoli",
    description: "Sardellen, Kapern & schwarze Oliven",
    allergens: ["A", "G", "D"],
    category: "Fisch",
    image: "/pizza/pizza27.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "28",
    number: "28",
    name: "Calzone",
    description:
      "Pizzabelag aus Truthahnfleisch, Rindersalami, Champignons, Thunfisch und Peperoni",
    allergens: ["A", "G", "D", "1", "2", "4", "5"],
    category: "Calzone",
    image: "/pizza/calzone.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "29",
    number: "29",
    name: "Calzone alle Turke",
    description: "Knoblauchwurst, Champignons, Zwiebeln, frische Tomatenstücke",
    allergens: ["A", "G", "I", "J", "F", "2", "4"],
    category: "Calzone",
    image: "/pizza/calzone.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "30",
    number: "30",
    name: "Calzone Veggy",
    description: "Champignons, frische Paprika, Brokkoli, Spinat und Knoblauch",
    allergens: ["A", "G"],
    category: "Calzone",
    image: "/pizza/calzone.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "31",
    number: "31",
    name: "Lucy",
    description: "Pommes, Salat, Ketchup, Mayo",
    allergens: ["A", "G", "C", "1", "2", "5"],
    category: "Spezial",
    image: "/pizza/pizza31.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "32",
    number: "32",
    name: "Mozzarella",
    description: "Mit Mozzarella, frischen Tomaten und Basilikum",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza32.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: "33",
    number: "33",
    name: "Toscana",
    description: "Mit Mozzarella, Rucola und Parmesan",
    allergens: ["A", "G", "C"],
    category: "Vegetarisch",
    image: "/pizza/pizza33.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "34",
    number: "34",
    name: "Amalfi",
    description: "Brokkoli, Hirtenkäse, Spinat und Knoblauch",
    allergens: ["A", "G", "C"],
    category: "Vegetarisch",
    image: "/pizza/pizza34.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "35",
    number: "35",
    name: "Focaccia",
    description:
      "Cherrytomaten, Knoblauch, Rosmarin, Basilikum, ohne Tomatensoße mit Olivenöl",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza35.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: "36",
    number: "36",
    name: "Verdure",
    description:
      "Gegrilltes Gemüse (Zucchini, Aubergine, Champignons), Cherrytomaten, Paprika",
    allergens: ["A", "G"],
    category: "Vegetarisch",
    image: "/pizza/pizza36.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: "37",
    number: "37",
    name: "Gefüllte Pizzabrötchen (8 Stk.)",
    description:
      "Extra Zutaten: Pizzabelag aus Truthahnfleisch, Rindersalami, Thunfisch, Sucuk, Hähnchenbrust, Champignons, Spinat und viel mehr",
    allergens: ["A", "G"],
    category: "Pizzabrötchen",
    image: "/pizza/gefuellte-pizzabroetchen.png",
    sizes: [
      { size: "8 Stk. mit Käse", price: "6,50 €" },
      { size: "Extra Zutaten", price: "2,50 €" },
    ],
  },

  {
    id: "38",
    number: "38",
    name: "Portion Pizzabrötchen (8 Stk.)",
    description: "Kräuterbutter",
    allergens: ["A", "G"],
    category: "Pizzabrötchen",
    image: "/pizza/portion-pizzabroetchen.png",
    sizes: [{ size: "8 Stk.", price: "5,00 €" }],
  },
  {
    id: "39",
    number: "39",
    name: "Familienpizza",
    description: "Familienpizza mit Zutaten nach Wahl",
    allergens: ["A", "G"],
    category: "Spezial",
    image: "/pizza/pizza1.png",
    sizes: [{ size: "Familienpizza", price: "ab 25,00 €" }],
  },
];
