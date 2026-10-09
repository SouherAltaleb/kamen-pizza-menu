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

const HERO_DURATION = 5000;
const HERO_REPEAT_INTERVAL = 240000; // Wiederholung des Intro-Screens alle 4 Minuten
const PAGE_ROTATE_DURATION = 10000; // 10 Sekunden pro Seite
const ITEMS_PER_PAGE = 12; // 4 in der Breite × 3 in der Höhe
const MAX_PAGES_SCREEN2 = 2; // Die ersten 2 Seiten (24 Pizzen)

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Flüssige und performante Animationen für Android TV
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: "linear" },
  },
};

export function TVMenuScreen2() {
  const [showHero, setShowHero] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  // Pizzen aufteilen: 12 pro Seite (4 Spalten x 3 Zeilen)
  const pizzaPages = useMemo(() => {
    const allPages = chunkArray(pizzas as AnyItem[], ITEMS_PER_PAGE);
    return allPages.slice(0, MAX_PAGES_SCREEN2);
  }, []);

  // Hero Timeout
  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showHero]);

  // Automatische Wiederholung des Heros alle 4 Minuten
  useEffect(() => {
    const repeatTimer = setInterval(() => {
      setShowHero(true);
    }, HERO_REPEAT_INTERVAL);

    return () => clearInterval(repeatTimer);
  }, []);

  // Seiten-Rotation
  useEffect(() => {
    if (showHero || pizzaPages.length <= 1) return;
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pizzaPages.length);
    }, PAGE_ROTATE_DURATION);
    return () => clearInterval(timer);
  }, [showHero, pizzaPages.length]);

  const currentPizzas = pizzaPages[pageIndex] || [];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-kamen-dark font-sans text-kamen-cream select-none flex flex-col justify-between p-2 sm:p-2.5">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-kamen-dark/85 via-kamen-dark/60 to-kamen-dark" />
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
            className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-kamen-dark p-12 text-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
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
                className="h-32 w-auto drop-shadow-[0_8px_25px_rgba(214,179,106,0.5)]"
              />
              <div className="my-3 h-1 w-full bg-gradient-to-r from-transparent via-kamen-gold to-transparent" />
              <h1 className="max-w-4xl text-3xl font-black uppercase tracking-widest text-kamen-cream font-heading">
                PIZZA KLASSIKER & SPEZIALITÄTEN
              </h1>
              <p className="mt-1 text-lg text-kamen-beige">
                Frisch aus dem Steinofen • Teil 1
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showHero && (
        <>
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-kamen-gold/25 pb-1 shrink-0 h-[6.5%]">
            <div className="flex items-center gap-2">
              <img
                src="/logo-k-transparent.svg"
                alt="Logo"
                className="h-7 w-auto pr-1"
              />
              <div>
                <h1 className="text-lg font-black font-heading tracking-wider uppercase text-kamen-gold leading-none">
                  PIZZA KLASSIKER
                </h1>
                <p className="text-[10px] text-kamen-beige mt-0.5">
                  Original Steinofen Pizza
                </p>
              </div>
            </div>

            {/* Seiten-Indikator */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-kamen-gold mr-1.5">
                SEITE {pageIndex + 1} / {pizzaPages.length}
              </span>
              {pizzaPages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPageIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === pageIndex
                      ? "w-4 bg-kamen-gold"
                      : "w-1.5 bg-kamen-gold/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hauptbereich Grid (12 Spalten Layout: 8 Spalten Pizza-Grid + 4 Spalten Video) */}
          <div className="relative z-10 grid grid-cols-12 gap-2 my-1 flex-1 items-stretch min-h-0 overflow-hidden">
            {/* LINKER BEREICH: PIZZA GRID (8 SPALTEN -> 4 CARDS BREIT) */}
            <div className="col-span-9 h-full min-h-0 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`page-${pageIndex}`}
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-4 grid-rows-3 gap-1.5 h-full min-h-0"
                >
                  {currentPizzas.map((item, idx) => (
                    <motion.div
                      key={item.id || item.name || idx}
                      variants={cardItemVariants}
                      className="relative flex flex-col items-center rounded-xl border border-kamen-gold/30 bg-black/80 p-1 shadow-md justify-between overflow-hidden min-h-0"
                    >
                      {/* ID Nummer + Kreis */}
                      {(item.number || item.id) && (
                        <span className="absolute left-1 top-1 z-20 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-[9px] font-bold text-kamen-dark shadow">
                          {item.number || item.id}
                        </span>
                      )}

                      {/* Bildbereich */}
                      <div className="relative w-full h-[40%] min-h-[50px] max-h-[75px] flex items-center justify-center shrink-0 my-0.5 overflow-hidden">
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

                      {/* Texte & Preise */}
                      <div className="w-full text-center flex-1 flex flex-col justify-between min-h-0 pt-0.5 pb-0.5">
                        <div className="flex flex-col justify-center">
                          <h3 className="truncate text-[10px] font-black uppercase tracking-wide text-kamen-cream font-heading">
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
                                <span className="text-[8px] font-black text-kamen-gold font-heading leading-none mt-[1px]">
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

            {/* RECHTER BEREICH: PIZZA VIDEO (4 SPALTEN) */}
            <div className="col-span-3 relative flex flex-col overflow-hidden rounded-xl border border-kamen-gold/35 bg-black shadow-lg h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover opacity-85"
              >
                <source src="/video/pizza-v.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-2 left-1 right-1 flex justify-center z-10">
                <span className="rounded-full border border-kamen-gold/50 bg-black/80 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-kamen-gold text-center">
                  🔥 HANDGEMACHT
                </span>
              </div>

              <div className="absolute bottom-3 left-2 right-2 z-10 text-center">
                <h3 className="text-[11px] font-black uppercase tracking-wider text-kamen-gold font-heading leading-tight">
                  STEINOFEN QUALITÄT
                </h3>
                <p className="text-[8px] text-kamen-cream font-medium mt-0.5">
                  Original Kamen Pizza
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-kamen-gold/20 pt-0.5 text-[9.5px] text-kamen-beige/60 shrink-0">
            <span>Steinofen Qualität • Kamen Pizza</span>
            <span>Alle Preise inkl. MwSt.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TVMenuScreen2;
