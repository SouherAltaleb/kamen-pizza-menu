import DrinkCard from "./DrinkCard";
import { drinks } from "../data/drinks";

function DrinksSection() {
  return (
    <section
      id="getraenke"
      className="mx-2 mt-6 rounded-[25px] bg-kamen-cream p-6"
    >
      <h2 className="text-3xl font-semibold text-kamen-gold">Getränke</h2>

      <div className="mt-4 space-y-2">
        {drinks.map((drink, index) => (
          <DrinkCard
            key={`${drink.name}-${drink.price}-${index}`}
            name={drink.name}
            description={drink.description}
            category={drink.category}
            size={drink.size}
            price={drink.price}
            allergens={drink.allergens}
          />
        ))}
      </div>
    </section>
  );
}

export default DrinksSection;
