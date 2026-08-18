import SaladCard from "./SaladCard";
import { salate, saladDressing } from "../data/salads";

function SaladSection() {
  return (
    <section
      id="salate"
      className="mx-6 rounded-[25px] bg-kamen-cream p-6 mt-6"
    >
      <h2 className="text-3xl font-semibold text-kamen-gold">Salate</h2>

      <p className="mt-2  mb-4 text-xs text-kamen-dark">{saladDressing}</p>

      {/* Salad Cards */}
      <div className="space-y-4">
        {salate.map((salad) => (
          <SaladCard
            key={salad.id}
            id={salad.id}
            number={salad.number}
            name={salad.name}
            description={salad.description}
            allergens={salad.allergens}
            category={salad.category}
            image={salad.image}
            sizes={salad.sizes}
          />
        ))}
      </div>
    </section>
  );
}

export default SaladSection;
