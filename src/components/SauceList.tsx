type Sauce = {
  name: string;
  price: string;
  allergens: string[];
};

type SauceListProps = {
  sauces: Sauce[];
};

function SauceList({ sauces }: SauceListProps) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 text-lg font-semibold text-kamen-gold">Saucen</h3>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {sauces.map((sauce) => (
          <div
            key={sauce.name}
            className="flex items-center justify-between rounded-xl border border-kamen-gold/30 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm text-kamen-dark">{sauce.name}</span>
              {sauce.allergens.length > 0 && (
                <span className="text-[10px] font-medium text-kamen-gold">
                  {sauce.allergens.join(", ")}
                </span>
              )}
            </div>

            <span className="text-sm font-semibold text-kamen-dark">
              {sauce.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SauceList;
