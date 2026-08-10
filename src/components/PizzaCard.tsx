type Size = {
  size: string;
  price: string;
};

type Pizza = {
  number: string;
  name: string;
  description: string;
  allergens: string[];
  category: string;
  image: string;
  sizes: Size[];
};

function PizzaCard({
  number,
  name,
  description,
  allergens,
  image,
  sizes,
}: Pizza) {
  return (
    <article className="flex gap-4 rounded-[25px] border border-kamen-gold bg-white/40 p-4">
      <img
        src={image}
        alt={name}
        className="h-32 w-32 rounded-2xl object-cover"
      />

      <div className="flex flex-1 flex-col">
        {/* allergens section */}
        {allergens?.length > 0 && (
          <div className="mb-1 text-[10px] font-medium text-kamen-gold">
            {allergens.join(", ")}
          </div>
        )}

        <h3 className="text-lg font-semibold text-kamen-dark">
          <span className="mr-2 text-kamen-gold">{number}</span>
          {name}
        </h3>

        <p className="mt-2 text-sm text-kamen-dark">{description}</p>

        <div className="mt-3 space-y-1">
          {sizes.map((item) => (
            <div key={item.size} className="flex justify-between text-sm">
              <span className="text-kamen-dark">{item.size}</span>

              <span className="font-semibold text-kamen-dark">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default PizzaCard;
