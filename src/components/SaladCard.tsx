type Size = {
  size: string;
  price: string;
};

type Salad = {
  id: string;
  number: string;
  name: string;
  description: string;
  allergens: string[];
  category: string;
  image: string;
  sizes: Size[];
};

function SaladCard({
  number,
  name,
  description,
  allergens,
  image,
  sizes,
}: Salad) {
  return (
    <article className="flex gap-4 rounded-[25px] border border-kamen-gold bg-kamen-cream p-4">
      {/* Image */}
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Allergens */}
        {allergens?.length > 0 && (
          <div className="mb-1 text-[12px] font-medium text-kamen-gold">
            {allergens.join(", ")}
          </div>
        )}

        <h3 className="text-lg font-semibold text-kamen-dark">
          <span className="mr-2 text-kamen-gold">{number}</span>
          {name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-kamen-dark">
          {description}
        </p>

        <div className="mt-3 space-y-1.5">
          {sizes.map((item) => (
            <div key={item.size} className="flex justify-between text-sm">
              <span className="text-kamen-dark text-xs">{item.size}</span>

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

export default SaladCard;
