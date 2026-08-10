export const pizzas = [
  {
    id: 1,
    number: "01",
    name: "Margherita",
    description: "Tomatensauce, Käse",
    allergens: ["A", "G", "2"],
    category: "Klassisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "7,50 €" },
      { size: "32 cm", price: "8,00 €" },
    ],
  },

  {
    id: 2,
    number: "02",
    name: "Spinat",
    description: "Spinat, Knoblauch",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: 3,
    number: "03",
    name: "Brokkoli",
    description: "Brokkoli, Feta-Käse, Knoblauch",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: 4,
    number: "04",
    name: "Funghi",
    description: "Frische Champignons",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: 5,
    number: "05",
    name: "Cipolla",
    description: "Zwiebeln",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: 6,
    number: "06",
    name: "Paprika",
    description: "Frische Paprika, Zwiebeln",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 7,
    number: "07",
    name: "Artischocken",
    description: "Artischocken",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 8,
    number: "08",
    name: "Caprese",
    description:
      "Frische Tomaten, Mozzarella, Pesto, Walnüsse, Rucola (ohne Tomatensauce)",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 9,
    number: "09",
    name: "Campania",
    description: "Champignons, schwarze Oliven, Mais",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 10,
    number: "10",
    name: "Vegetaria",
    description: "Spinat, Brokkoli, frische Paprika, Champignons",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 11,
    number: "10a",
    name: "Veggi Vegan",
    description: "Champignons, Brokkoli, Paprika, Spinat, veganer Käse",
    allergens: [],
    category: "Vegetarisch",
    dietary: "vegan",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,50 €" },
      { size: "32 cm", price: "11,50 €" },
    ],
  },

  {
    id: 12,
    number: "10b",
    name: "Tonno Vegan",
    description: "Thunfisch, veganer Käse, Zwiebeln",
    allergens: [],
    category: "Vegetarisch",
    dietary: "vegan",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 13,
    number: "10c",
    name: "Nostalgia",
    description: "Milde Peperoni, Feta-Käse, schwarze Oliven, Knoblauch",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 14,
    number: "11",
    name: "Special Pizza",
    description:
      "Putenschinken, Rindersalami, Champignons, Thunfisch, schwarze Oliven, Ei, Knoblauch",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,50 €" },
      { size: "32 cm", price: "11,50 €" },
    ],
  },

  {
    id: 15,
    number: "11a",
    name: "Heart Pizza",
    description: "Herzförmige Pizza mit Käserand + 2 Beläge nach Wahl",
    allergens: [],
    category: "Spezial",
    image: "/pizza/pizza.png",
    sizes: [{ size: "32 cm", price: "11,50 €" }],
  },

  {
    id: 16,
    number: "12",
    name: "4 Formaggi",
    description: "Vier verschiedene Käsesorten",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 17,
    number: "13",
    name: "Beef Salami",
    description: "Rindersalami",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: 18,
    number: "14",
    name: "Prosciutto",
    description: "Putenschinken",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "8,50 €" },
      { size: "32 cm", price: "9,50 €" },
    ],
  },

  {
    id: 19,
    number: "15",
    name: "Döner Pizza",
    description: "Dönerfleisch, Zwiebeln, Sauce Hollandaise",
    allergens: [],
    category: "Döner",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 20,
    number: "15a",
    name: "Döner Brokkoli",
    description: "Dönerfleisch, Brokkoli, Sauce Hollandaise",
    allergens: [],
    category: "Döner",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 21,
    number: "15b",
    name: "Döner Paprika",
    description: "Dönerfleisch, Paprika, Sauce Hollandaise",
    allergens: [],
    category: "Döner",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 22,
    number: "15c",
    name: "Zazi Döner",
    description: "Dönerfleisch, Brokkoli, Sauce Hollandaise, Tzatziki",
    allergens: [],
    category: "Döner",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "11,00 €" },
      { size: "32 cm", price: "12,00 €" },
    ],
  },

  {
    id: 23,
    number: "16",
    name: "Garlic Sausage",
    description: "Knoblauchwurst, Zwiebeln",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 24,
    number: "17",
    name: "Garlic Sausage Special",
    description: "Knoblauchwurst, schwarze Oliven, Feta-Käse",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 25,
    number: "18",
    name: "Pollo",
    description: "Hähnchenbrust, Brokkoli, Mais",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 26,
    number: "18a",
    name: "Barbecue",
    description: "BBQ-Sauce, Hähnchenbrust, Paprika, Zwiebeln",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 27,
    number: "18b",
    name: "Pollo Hollandaise",
    description: "Hähnchenbrust, Brokkoli, Sauce Hollandaise, Mais",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "11,00 €" },
      { size: "32 cm", price: "12,00 €" },
    ],
  },

  {
    id: 28,
    number: "19",
    name: "Capricciosa",
    description: "Putenschinken, Champignons",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 29,
    number: "19a",
    name: "Da Roma",
    description: "Putenschinken, Rindersalami, Champignons",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 30,
    number: "20",
    name: "Hawaii",
    description: "Putenschinken, Ananas",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 31,
    number: "21",
    name: "Quattro Stagioni",
    description: "Rindersalami, Thunfisch, Putenschinken, Champignons",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 32,
    number: "22",
    name: "Diavolo",
    description: "Scharfe Rindersalami, Zwiebeln, Peperoni, Rucola, Parmesan",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 33,
    number: "23",
    name: "Parmaschinken",
    description: "Putenschinken, Mozzarella, Rucola, Parmesan",
    allergens: [],
    category: "Fleisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 34,
    number: "24",
    name: "Tonno",
    description: "Thunfisch, Zwiebeln",
    allergens: [],
    category: "Fisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 35,
    number: "25",
    name: "Scampis",
    description: "Scampi, Spinat, Knoblauch",
    allergens: [],
    category: "Fisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 36,
    number: "26",
    name: "Salmone",
    description: "Lachs, Spinat, Knoblauch",
    allergens: [],
    category: "Fisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 37,
    number: "27",
    name: "Frutti di Mare",
    description: "Meeresfrüchte, Knoblauch",
    allergens: [],
    category: "Fisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 38,
    number: "28",
    name: "Napoli",
    description: "Sardellen, Kapern, schwarze Oliven",
    allergens: [],
    category: "Fisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 39,
    number: "29",
    name: "Calzone",
    description:
      "Putenschinken, Rindersalami, Champignons, Thunfisch, Peperoni",
    allergens: [],
    category: "Calzone",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 40,
    number: "30",
    name: "Calzone alle Turke",
    description: "Knoblauchwurst, Champignons, Zwiebeln, frische Tomaten",
    allergens: [],
    category: "Calzone",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 41,
    number: "30a",
    name: "Calzone Döner",
    description: "Dönerfleisch, Brokkoli, Tzatziki, Sauce Hollandaise",
    allergens: [],
    category: "Calzone",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 42,
    number: "31",
    name: "Calzone Veggy",
    description: "Champignons, frische Paprika, Brokkoli, Spinat, Knoblauch",
    allergens: [],
    category: "Calzone",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 43,
    number: "32",
    name: "Lucy",
    description: "Pommes frites, Salat, Ketchup, Mayonnaise",
    allergens: [],
    category: "Spezial",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 44,
    number: "33",
    name: "Mozzarella",
    description: "Mozzarella, frische Tomaten, Basilikum",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,00 €" },
      { size: "32 cm", price: "10,00 €" },
    ],
  },

  {
    id: 45,
    number: "34",
    name: "Toscana",
    description: "Mozzarella, Rucola, Parmesan",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 46,
    number: "35",
    name: "Amalfi",
    description: "Brokkoli, Feta-Käse, Spinat, Knoblauch",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 47,
    number: "36",
    name: "Stuffed Pizza Rolls",
    description: "8 Stück · Gefüllt mit Käse",
    allergens: [],
    category: "Extras",
    image: "/pizza/pizza.png",
    sizes: [{ size: "8 Stück", price: "6,50 €" }],
  },

  {
    id: 48,
    number: "37",
    name: "Pizza Rolls",
    description: "8 Stück · Serviert mit Knoblauchbutter",
    allergens: [],
    category: "Extras",
    image: "/pizza/pizza.png",
    sizes: [{ size: "8 Stück", price: "5,00 €" }],
  },

  {
    id: 49,
    number: "38",
    name: "Focaccia",
    description: "Kirschtomaten, Knoblauch, Rosmarin, Basilikum, Olivenöl",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "9,50 €" },
      { size: "32 cm", price: "10,50 €" },
    ],
  },

  {
    id: 50,
    number: "39",
    name: "Verdure",
    description:
      "Gegrilltes Gemüse (Zucchini, Aubergine, Champignons), Kirschtomaten",
    allergens: [],
    category: "Vegetarisch",
    image: "/pizza/pizza.png",
    sizes: [
      { size: "28 cm", price: "10,00 €" },
      { size: "32 cm", price: "11,00 €" },
    ],
  },

  {
    id: 51,
    number: "",
    name: "Extra Toppings",
    description:
      "Putenschinken, Rindersalami, Thunfisch, Sucuk, Hähnchen, Champignons, Spinat und mehr",
    allergens: [],
    category: "Extras",
    image: "/pizza/pizza.png",
    sizes: [{ size: "Extra", price: "2,50 €" }],
  },
];
