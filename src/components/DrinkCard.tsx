type Drink = {
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
};

function DrinkCard({ name, description, image, price }: Drink) {
  return (
    <article className="flex gap-4 rounded-[25px] border border-kamen-gold bg-kamen-cream p-4">
      {/* Image */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-kamen-dark">{name}</h3>

        <p className="mt-1 text-sm text-kamen-dark">{description}</p>

        <div className="mt-2 flex justify-end">
          <span className="font-semibold text-kamen-dark">{price}</span>
        </div>
      </div>
    </article>
  );
}

export default DrinkCard;
