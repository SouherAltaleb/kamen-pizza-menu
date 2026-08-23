import type { MenuItem } from "../types/menu";

function MenuCard({
  number,
  name,
  description,
  allergens,
  image,
  sizes,
}: MenuItem) {
  return (
    <article className="flex gap-3 rounded-[25px] border border-kamen-gold bg-kamen-cream p-3 sm:gap-4 sm:p-4">
      {/* Image */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-20">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Allergens */}
        {allergens?.length > 0 && (
          <div className="mb-1 text-[12px] font-medium text-kamen-gold uppercase">
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

              <span className="font-bold text-kamen-dark">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
