function AllergenInfo() {
  const allergens = [
    ["A", "Weizen"],
    ["B", "Krebstiere"],
    ["C", "Eier"],
    ["D", "Fische"],
    ["E", "Erdnüsse"],
    ["F", "Soja"],
    ["G", "Milch"],
    ["H", "Pistazien"],
    ["I", "Sellerie"],
    ["J", "Senf"],
    ["K", "Sesam"],
    ["L", "Sulfit"],
    ["M", "Lupine"],
    ["N", "Weichtiere"],
  ];

  const additives = [
    ["1", "mit Farbstoff"],
    ["2", "mit Konservierungsstoff"],
    ["3", "mit Nitritpökelsalz"],
    ["4", "mit Antioxidationsmittel"],
    ["5", "mit Geschmacksverstärker"],
    ["6", "geschwefelt"],
    ["7", "geschwärzt"],
    ["8", "mit Phosphat"],
    ["9", "mit Milcheiweiß"],
    ["10", "koffeinhaltig"],
    ["11", "chininhaltig"],
    ["12", "mit Süßungsmittel(n)"],
    ["13", "enthält eine Phenylalaninquelle"],
    ["14", "gewachst"],
    ["15", "mit Taurin"],
    ["16", "enthält Sojaöl; aus genetisch verändertem Soja hergestellt"],
  ];
  // const allergens = [
  //   ["A", "Weizen"],
  //   ["B", "Roggen"],
  //   ["C", "Gerste"],
  //   ["D", "Hafer"],
  //   ["E", "Dinkel"],
  //   ["F", "Khorasan-Weizen"],
  //   ["G", "Krebstiere"],
  //   ["H", "Eier"],
  //   ["I", "Fische"],
  //   ["J", "Erdnüsse"],
  //   ["K", "Sojabohnen"],
  //   ["L", "Milch"],
  //   ["M", "Mandeln"],
  //   ["N", "Haselnüsse"],
  //   ["O", "Walnüsse"],
  //   ["P", "Kaschunüsse"],
  //   ["Q", "Pekannüsse"],
  //   ["R", "Paranüsse"],
  //   ["S", "Macadamia / Queenslandnüsse"],
  //   ["T", "Sellerie"],
  //   ["U", "Senf"],
  //   ["V", "Sesamsamen"],
  //   ["W", "Schwefeldioxid / Sulphite"],
  //   ["Y", "Lupinen"],
  //   ["Z", "Weichtiere"],
  // ];

  // const additives = [
  //   ["1", "Antioxidationsmittel"],
  //   ["2", "Konservierungsstoff"],
  //   ["3", "Farbstoff"],
  //   ["4", "Geschmacksverstärker"],
  //   ["5", "Gewürz"],
  //   ["6", "Koffein"],
  //   ["7", "Alkohol"],
  //   ["8", "Säureregulator"],
  //   ["9", "Stabilisator"],
  // ];

  return (
    <section className="mt-12 border-t border-kamen-gold/20 pt-8 pb-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-lg font-semibold tracking-wide text-kamen-gold">
          Allergene & Zusatzstoffe
        </h2>

        {/* Allergene */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kamen-cream">
            Allergene
          </h3>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {allergens.map(([code, name]) => (
              <div
                key={code}
                className="flex items-center gap-1 rounded-md border border-kamen-gold/10 bg-kamen-cream/[0.025] px-1.5 py-1"
              >
                <span className="shrink-0 text-[9px] font-bold text-kamen-gold">
                  {code}
                </span>

                <span className="truncate text-[9px] leading-tight text-kamen-cream/60">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Zusatzstoffe */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kamen-cream">
            Zusatzstoffe
          </h3>

          <div className="grid grid-cols-4 gap-1">
            {additives.map(([code, name]) => (
              <div
                key={code}
                className="flex items-center gap-1 rounded-md border border-kamen-gold/10 bg-kamen-cream/[0.025] px-1.5 py-1"
              >
                <span className="shrink-0 text-[9px] font-bold text-kamen-gold">
                  {code}
                </span>

                <span className="truncate text-[9px] leading-tight text-kamen-cream/60">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hinweis */}
        <div className="mt-8 border-t border-kamen-gold/10 pt-5">
          <div className="rounded-xl border border-kamen-gold/10 bg-kamen-cream/[0.025] px-4 py-4 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-kamen-gold/50 text-[10px] font-bold text-kamen-gold">
                i
              </span>

              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-kamen-gold">
                Hinweis zu Allergenen und Zusatzstoffen
              </h3>
            </div>

            <p className="mx-auto max-w-3xl text-[8px] leading-relaxed text-kamen-cream/55">
              Die Angaben zu Allergenen und Zusatzstoffen wurden sorgfältig
              zusammengestellt. Bei Fragen zu Inhaltsstoffen oder
              Unverträglichkeiten wenden Sie sich bitte an unser Personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllergenInfo;
