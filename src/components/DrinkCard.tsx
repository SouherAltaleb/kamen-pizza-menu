type Drink = {
  name: string;
  description: string;
  category: string;
  size: string;
  price: string;
  allergens?: string[];
};

function DrinkCard({ name, description, size, price, allergens }: Drink) {
  return (
    <article className="rounded-[18px] border border-kamen-gold/40 bg-kamen-cream px-4 py-3">
      {allergens && allergens.length > 0 && (
        <div className="mb-1 text-[12px] font-medium text-kamen-gold ">
          {allergens.join(", ")}
        </div>
      )}
      <h3 className="text-base font-semibold text-kamen-dark">{name}</h3>
      <p className="mt-1 text-xs text-kamen-dark">{description}</p>

      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="font-medium text-kamen-gold">{size}</span>
        <span className="font-bold text-kamen-dark">{price}</span>
      </div>
    </article>
  );
}

export default DrinkCard;
