import DrinkCard from "./DrinkCard";
import { drinks } from "../data/drinks";

function DrinksSection() {
  return (
    <section
      id="getränke"
      className="mx-6 rounded-[25px] bg-kamen-cream p-6 mt-6"
    >
      <div className="mb-5">
        <h2 className="text-3xl font-semibold text-kamen-gold">Getränke</h2>
      </div>

      <div className="space-y-4">
        {drinks.map((drink) => (
          <DrinkCard
            key={`${drink.name}-${drink.description}`}
            name={drink.name}
            description={drink.description}
            category={drink.category}
            image={drink.image}
            price={drink.price}
          />
        ))}
      </div>
    </section>
  );
}

export default DrinksSection;
