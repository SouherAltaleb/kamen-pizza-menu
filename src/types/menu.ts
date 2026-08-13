export type Size = {
  size: string;
  price: string;
};

export type MenuItem = {
  id: string;
  number: string;
  name: string;
  description: string;
  allergens: string[];
  category: string;
  image: string;
  sizes: Size[];
};
