type Drink = {
  name: string;
  description: string;
  category: string;
  size: string;
  price: string;
};

function DrinkCard({ name, description, size, price }: Drink) {
  return (
    <article className="rounded-[18px] border border-kamen-gold/40 bg-kamen-cream px-4 py-3">
      <h3 className="text-base font-semibold text-kamen-dark">{name}</h3>

      <p className="mt-1 text-xs text-kamen-dark">{description}</p>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs font-medium text-kamen-gold">{size}</span>

        <span className="text-base font-bold text-kamen-dark">{price}</span>
      </div>
    </article>
  );
}

export default DrinkCard;
