import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { pizzas } from "../../data/pizzas";

type AnyItem = {
  id?: string;
  number?: string;
  name: string;
  description?: string;
  category?: string;
  image?: string;
  price?: string;
  sizes?: { size: string; price: string }[];
};

// Alle 3 Angebote mit aktualisierten Texten & Preisen
const TAGESANGEBOTE = [
  {
    id: "montag",
    day: "MONTAG",
    title: "PIZZA-TAG",
    subtitle: "Heiß. Steinofen. Jeden Montag.",
    itemDetail: "Jede große Pizza nach Wahl",
    price: "9,50 €",
    oldPrice: "12,00 €",
    image: "/pizza3.png",
    imageClass: "max-h-[140px]",
  },
  {
    id: "mittwoch",
    day: "MITTWOCH",
    title: "DÖNER-TAG",
    subtitle: "Knusprig. Frisch. Jeden Mittwoch.",
    itemDetail: "Döner Tasche",
    price: "6,00 €",
    oldPrice: "7,00 €",
    image: "/doener-tasche-screen.png",
    imageClass: "max-h-[135px]",
  },
  {
    id: "donnerstag",
    day: "DONNERSTAG",
    title: "NUDEL-TAG",
    subtitle: "Lecker. Überbacken. Jeden Donnerstag.",
    itemDetail: "Alle Nudelgerichte nach Wahl",
    price: "9,00 €",
    oldPrice: "11,00 €",
    image: "/pasta.png",
    imageClass: "max-h-[110px]",
  },
];

const HERO_DURATION = 5000;
const HERO_REPEAT_INTERVAL = 240000; // إعادة تشغيل الـ Intro كل 4 دقائق تلقائياً
const PAGE_ROTATE_DURATION = 10000;
const ROTATION_INTERVAL = 8000;
const ITEMS_PER_PAGE = 12;

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "linear" },
  },
};

export function TVMenuScreen3() {
  const [showHero, setShowHero] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  // activeSlide: 0 = Übersicht (Alle 3), 1 = Montag, 2 = Mittwoch, 3 = Donnerstag
  const [activeSlide, setActiveSlide] = useState(0);

  const pizzaPages = useMemo(() => {
    const allPizzas = pizzas as AnyItem[];
    const startIndex = allPizzas.findIndex(
      (p) => p.number === "19" || p.id === "19"
    );
    const filteredPizzas =
      startIndex !== -1 ? allPizzas.slice(startIndex) : allPizzas.slice(24);

    return chunkArray(filteredPizzas, ITEMS_PER_PAGE);
  }, []);

  // التحكم بإخفاء الـ Hero بعد 5 ثوانٍ
  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showHero]);

  // إظهار الـ Hero تلقائياً كل 4 دقائق
  useEffect(() => {
    const repeatTimer = setInterval(() => {
      setShowHero(true);
    }, HERO_REPEAT_INTERVAL);

    return () => clearInterval(repeatTimer);
  }, []);

  // Rotate Left side Pizza Grid
  useEffect(() => {
    if (showHero || pizzaPages.length <= 1) return;
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pizzaPages.length);
    }, PAGE_ROTATE_DURATION);
    return () => clearInterval(timer);
  }, [showHero, pizzaPages.length]);

  // Rotate Right side Offers (Übersicht -> Montag -> Mittwoch -> Donnerstag)
  useEffect(() => {
    if (showHero) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % (TAGESANGEBOTE.length + 1));
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [showHero]);

  const currentPizzas = pizzaPages[pageIndex] || [];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0806] font-sans text-kamen-cream select-none flex flex-col justify-between p-3">
      {/* Hintergrund Video mit subtiler Abdunkelung */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        >
          <source src="/video/fire4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806]/90 via-[#0a0806]/60 to-[#0a0806]" />
      </div>

      {/* Intro Hero */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0806] p-12 text-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            >
              <source src="/video/pizza.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src="/logo.png"
                alt="Kamen Pizza"
                className="h-32 w-auto drop-shadow-[0_10px_35px_rgba(214,179,106,0.6)]"
              />
              <div className="my-3 h-1 w-full bg-gradient-to-r from-transparent via-kamen-gold to-transparent" />
              <h1 className="max-w-4xl text-3xl font-black uppercase tracking-widest text-kamen-cream font-heading">
                PIZZA & TAGESANGEBOTE
              </h1>
              <p className="mt-1 text-lg text-kamen-beige">
                Unsere Wochen-Aktionen & Tagesangebote
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showHero && (
        <>
          {/* HEADER */}
          <div className="relative z-10 flex items-center justify-between border-b border-kamen-gold/30 pb-2 shrink-0 h-[7%]">
            <div className="flex items-center gap-3">
              <img
                src="/logo-k-transparent.svg"
                alt="Kamen Pizza"
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-xl font-black font-heading tracking-widest uppercase text-kamen-gold leading-none">
                  KAMEN PIZZA
                </h1>
                <p className="text-[11px] text-kamen-beige mt-0.5 font-medium">
                  Unsere Wochen-Aktionen & Tagesangebote
                </p>
              </div>
            </div>

            {/* Slide Indikatoren / Navigation (Offers) */}
            <div className="flex items-center gap-2 bg-black/70 border border-kamen-gold/30 rounded-full px-3 py-1">
              <span className="text-xs font-bold text-kamen-gold uppercase tracking-wider mr-1">
                {activeSlide === 0
                  ? "Übersicht"
                  : TAGESANGEBOTE[activeSlide - 1].day}
              </span>
              <button
                onClick={() => setActiveSlide(0)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 0
                    ? "w-5 bg-kamen-gold"
                    : "w-2 bg-kamen-gold/30"
                }`}
              />
              {TAGESANGEBOTE.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx + 1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx + 1
                      ? "w-5 bg-kamen-gold"
                      : "w-2 bg-kamen-gold/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* HAUPTBEREICH (GRID 12 COLUMNS) */}
          <div className="relative z-10 grid grid-cols-12 gap-3 my-2 flex-1 items-stretch min-h-0 overflow-hidden">
            {/* ======================================================== */}
            {/* 1. LEFT SIDE: PIZZA GRID (8 COLS)                        */}
            {/* ======================================================== */}
            <div className="col-span-8 h-full min-h-0 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`screen3-page-${pageIndex}`}
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  className="grid grid-cols-4 grid-rows-3 gap-2 h-full min-h-0"
                >
                  {currentPizzas.map((item, idx) => (
                    <motion.div
                      key={item.id || item.name || idx}
                      variants={cardItemVariants}
                      className="relative flex flex-col items-center rounded-xl border border-kamen-gold/30 bg-black/80 p-1.5 shadow-md justify-between overflow-hidden min-h-0"
                    >
                      {(item.number || item.id) && (
                        <span className="absolute left-1.5 top-1.5 z-20 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-[9px] font-bold text-kamen-dark shadow">
                          {item.number || item.id}
                        </span>
                      )}

                      <div className="relative w-full h-[42%] min-h-[50px] max-h-[75px] flex items-center justify-center shrink-0 my-0.5 overflow-hidden">
                        <div className="absolute w-20 h-8 bg-kamen-gold/10 rounded-full blur-sm pointer-events-none" />

                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-full w-auto object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] relative z-10"
                            loading="eager"
                          />
                        ) : (
                          <div className="h-full w-full bg-zinc-900/80 rounded-lg" />
                        )}
                      </div>

                      <div className="w-full text-center flex-1 flex flex-col justify-between min-h-0 pt-0.5 pb-0.5">
                        <div className="flex flex-col justify-center">
                          <h3 className="truncate text-[10.5px] font-black uppercase tracking-wide text-kamen-cream font-heading">
                            {item.name}
                          </h3>
                          <p className="line-clamp-2 text-[7.5px] font-semibold text-kamen-beige/80 leading-tight mt-0.5">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-0.5 flex items-center justify-center gap-1 px-0.5 shrink-0">
                          {item.sizes && item.sizes.length > 0 ? (
                            item.sizes.map((s) => (
                              <div
                                key={s.size}
                                className="flex-1 rounded border border-kamen-gold/30 bg-kamen-gold/20 px-0.5 py-[1px] text-center flex flex-col justify-center gap-0"
                              >
                                <span className="block text-[5px] font-bold uppercase text-kamen-gold/90 leading-none">
                                  {s.size}
                                </span>
                                <span className="text-[8.5px] font-black text-kamen-gold font-heading leading-none mt-[1px]">
                                  {s.price}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="rounded border border-kamen-gold/30 bg-kamen-gold/20 px-2 py-[1px] text-[8.5px] font-black text-kamen-gold font-heading leading-none">
                              {item.price}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ======================================================== */}
            {/* 2. RIGHT SIDE: OFFERS ROTATING CONTAINER (4 COLS)        */}
            {/* ======================================================== */}
            <div className="col-span-4 h-full min-h-0 relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                {/* SLIDE 0: ALLE 3 TAGE IN DER ÜBERSICHT */}
                {activeSlide === 0 && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-2xl border border-kamen-gold/30 bg-black/85 p-3.5 flex flex-col justify-between items-center text-center shadow-xl overflow-hidden relative"
                  >
                    <div className="text-center my-1 z-10">
                      <span className="px-3 py-0.5 rounded-full border border-kamen-gold/40 bg-kamen-gold/20 text-[9px] font-bold text-kamen-gold uppercase tracking-widest">
                        🔥 SPARE JEDEN TAG
                      </span>
                      <h2 className="text-lg font-black font-heading text-kamen-cream uppercase tracking-wider mt-1 leading-tight">
                        UNSERE TAGESANGEBOTE
                      </h2>
                    </div>

                    {/* 3 Vertical Offer Cards */}
                    <div className="flex flex-col gap-2 w-full flex-1 my-2 justify-center z-10">
                      {TAGESANGEBOTE.map((item) => (
                        <div
                          key={item.id}
                          className="relative rounded-xl border border-kamen-gold/25 bg-zinc-900/90 p-2 flex items-center justify-between shadow-md overflow-hidden"
                        >
                          {/* Day & Info */}
                          <div className="flex items-center gap-2.5 text-left">
                            <div className="relative h-11 w-11 shrink-0 flex items-center justify-center">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="max-h-10 w-auto object-contain relative z-10 drop-shadow"
                                loading="eager"
                              />
                            </div>
                            <div>
                              <span className="text-[9px] font-black tracking-widest text-kamen-gold uppercase block leading-none">
                                {item.day}
                              </span>
                              <h3 className="text-sm font-black font-heading text-kamen-cream uppercase leading-tight mt-0.5">
                                {item.title}
                              </h3>
                              <p className="text-[8px] text-kamen-beige/70 line-clamp-1">
                                {item.itemDetail}
                              </p>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="text-right shrink-0 bg-black/80 rounded-lg px-2 py-1 border border-kamen-gold/20">
                            <span className="text-[8px] text-kamen-cream/50 line-through block leading-none">
                              {item.oldPrice}
                            </span>
                            <span className="text-sm font-black font-heading text-kamen-gold leading-none mt-0.5 block">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-[8px] text-kamen-beige/50 uppercase tracking-widest border-t border-kamen-gold/20 pt-1 w-full text-center z-10">
                      KAMEN PIZZA • FRISCH & LECKER
                    </div>
                  </motion.div>
                )}

                {/* SLIDE 1-3: EINZELNES TAGESANGEBOT (POSTER-BG LAYOUT) */}
                {activeSlide > 0 && (
                  <motion.div
                    key={`detail-${activeSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-2xl border border-kamen-gold/40 bg-black/90 p-4 flex flex-col justify-between items-center shadow-xl relative overflow-hidden"
                  >
                    {/* Background Image: poster-bg.jpeg */}
                    <img
                      src="images/poster-bg.jpeg"
                      alt="Background Poster"
                      className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
                    />

                    {/* Overlay Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-0 pointer-events-none" />

                    {/* Top Info Header */}
                    <div className="relative z-10 w-full text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-kamen-gold/50 bg-black/80 text-[9px] font-bold text-kamen-gold tracking-widest uppercase mb-2">
                        <span>
                          TAGESANGEBOT • {TAGESANGEBOTE[activeSlide - 1].day}
                        </span>
                      </div>

                      <h2 className="text-3xl font-black font-heading uppercase text-kamen-cream tracking-wide leading-tight drop-shadow-xl">
                        {TAGESANGEBOTE[activeSlide - 1].title}
                      </h2>
                      <p className="text-xs font-medium text-kamen-beige mt-0.5 drop-shadow">
                        {TAGESANGEBOTE[activeSlide - 1].subtitle}
                      </p>
                    </div>

                    {/* Middle: Schwebendes Gerichte-Bild */}
                    <div className="relative z-10 w-full flex-1 flex items-center justify-center my-2 min-h-0 pt-4">
                      <img
                        src={TAGESANGEBOTE[activeSlide - 1].image}
                        alt={TAGESANGEBOTE[activeSlide - 1].title}
                        className={`${
                          TAGESANGEBOTE[activeSlide - 1].imageClass ||
                          "max-h-32.5"
                        } w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)] relative z-20 transform translate-y-2`}
                        loading="eager"
                      />
                    </div>

                    {/* Bottom: Details & Preis */}
                    <div className="relative z-10 w-full flex flex-col gap-2">
                      <div className="border-l-2 border-kamen-gold pl-3 py-0.5 text-left bg-black/80 rounded-r-lg">
                        <span className="block text-[8px] font-bold uppercase text-kamen-gold tracking-widest">
                          IM ANGEBOT ENTHALTEN:
                        </span>
                        <p className="text-xs font-bold text-white mt-0.5">
                          {TAGESANGEBOTE[activeSlide - 1].itemDetail}
                        </p>
                      </div>

                      <div className="flex items-center justify-between bg-black/90 rounded-xl p-2.5 border border-kamen-gold/40">
                        <div className="flex flex-col text-left">
                          <span className="text-[9px] font-bold text-kamen-cream/50 line-through">
                            Statt {TAGESANGEBOTE[activeSlide - 1].oldPrice}
                          </span>
                          <span className="text-3xl font-black font-heading text-kamen-gold drop-shadow-md leading-none">
                            {TAGESANGEBOTE[activeSlide - 1].price}
                          </span>
                        </div>

                        <span className="px-3 py-1.5 rounded-lg bg-kamen-gold text-kamen-dark text-[9px] font-black uppercase tracking-wider shadow">
                          NUR AM {TAGESANGEBOTE[activeSlide - 1].day}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* FOOTER */}
          <div className="relative z-10 flex items-center justify-between border-t border-kamen-gold/20 pt-1 text-[10px] text-kamen-beige/60 shrink-0">
            <span>Kamen Pizza • Steinofen Qualität</span>
            <span>Alle Preise inkl. MwSt.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TVMenuScreen3;
