type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

function PizzaTabs({ activeCategory, setActiveCategory }: Props) {
  const categories = [
    "Alle",
    "Klassisch",
    "Vegetarisch",
    "Döner",
    "Fleisch",
    "Fisch",
    "Calzone",
    "Spezial",
    "Pizzabrötchen",
  ];

  return (
    <div className="mt-6 overflow-x-auto">
      <div className="flex w-max gap-2 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "bg-kamen-gold text-kamen-dark"
                : "border border-kamen-gold/40 text-kamen-dark"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PizzaTabs;
