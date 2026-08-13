import type { ReactNode } from "react";
import MenuCard from "./MenuCard";

type Size = {
  size: string;
  price: string;
};

type MenuItem = {
  id: string;
  number: string;
  name: string;
  description: string;
  allergens: string[];
  category: string;
  image: string;
  sizes: Size[];
};

type MenuSectionProps = {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
  children?: ReactNode;
};

function MenuSection({
  id,
  title,
  description,
  items,
  children,
}: MenuSectionProps) {
  return (
    <section id={id} className="mx-6 mt-6 rounded-[25px] bg-kamen-cream p-6">
      <h2 className="text-3xl font-semibold text-kamen-gold">{title}</h2>

      {description && (
        <p className="mt-2 mb-4 text-xs text-kamen-dark">{description}</p>
      )}

      <div className="space-y-4">
        {items.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            number={item.number}
            name={item.name}
            description={item.description}
            allergens={item.allergens}
            category={item.category}
            image={item.image}
            sizes={item.sizes}
          />
        ))}
      </div>

      {children}
    </section>
  );
}

export default MenuSection;
