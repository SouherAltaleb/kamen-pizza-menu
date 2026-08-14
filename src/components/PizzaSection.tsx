import PizzaTabs from "./PizzaTabs";
import PizzaCard from "./PizzaCard";
import { pizzas } from "../data/pizzas";
import { useState } from "react";

function PizzaSection() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredPizzas =
    activeCategory === "Alle"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === activeCategory);

  return (
    <section id="pizza" className="mx-6 rounded-[25px] bg-kamen-cream p-6">
      <h2 className="text-3xl font-semibold text-kamen-gold">Pizza</h2>
      <p className="mt-2  mb-4 text-xs text-kamen-dark">
        {" "}
        Jede Pizza mit Tomatensauce und Käse
      </p>

      <PizzaTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="mt-6 space-y-4">
        {filteredPizzas.map((pizza) => (
          <PizzaCard
            number={pizza.number}
            name={pizza.name}
            description={pizza.description}
            allergens={pizza.allergens}
            category={pizza.category}
            image={pizza.image}
            sizes={pizza.sizes}
          />
        ))}
      </div>
    </section>
  );
}

export default PizzaSection;
