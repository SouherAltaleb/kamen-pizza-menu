import { useState } from "react";

function Navigation() {
  const categories = ["Pizza", "Pasta", "Salate", "Getränke", "Dessert"];
  const [activeCategory, setActiveCategory] = useState("Pizza");

  return (
    <nav className="border-y border-kamen-beige/20">
      <div className="flex gap-6 overflow-x-auto px-6 py-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-2 py-1 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "text-kamen-gold"
                : "text-kamen-beige"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
