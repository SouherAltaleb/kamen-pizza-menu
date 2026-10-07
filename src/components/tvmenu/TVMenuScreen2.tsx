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
const PAGE_ROTATE_DURATION = 10000; // 10 Sekunden pro Seite
const ITEMS_PER_PAGE = 12; // 4 in der Breite × 3 in der Höhe
const MAX_PAGES_SCREEN2 = 2; // Nur die ersten 2 Seiten für Screen 2

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
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    },
  },
};

export function TVMenuScreen2() {
  const [showHero, setShowHero] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  // Aufteilen der Pizzen und nur die ersten 2 Seiten (24 Pizzen) für Screen 2 nehmen
  const pizzaPages = useMemo(() => {
    const allPages = chunkArray(pizzas as AnyItem[], ITEMS_PER_PAGE);
    return allPages.slice(0, MAX_PAGES_SCREEN2);
  }, []);

  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showHero]);

  useEffect(() => {
    if (showHero || pizzaPages.length <= 1) return;
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % pizzaPages.length);
    }, PAGE_ROTATE_DURATION);
    return () => clearInterval(timer);
  }, [showHero, pizzaPages.length]);

  const currentPizzas = pizzaPages[pageIndex] || [];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-kamen-dark font-sans text-kamen-cream select-none flex flex-col justify-between p-2.5 sm:p-3.5">
      {/* Video & Glow Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-80"
        >
          <source src="/video/fire4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-kamen-dark/80 via-kamen-dark/60 to-kamen-dark" />
      </div>

      {/* Intro Hero */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-kamen-dark p-12 text-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
            >
              <source src="/video/pizza.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src="/logo.png"
                alt="Kamen Pizza"
                className="h-36 w-auto drop-shadow-[0_10px_35px_rgba(214,179,106,0.6)]"
              />
              <div className="my-4 h-1 w-full bg-gradient-to-r from-transparent via-kamen-gold to-transparent" />
              <h1 className="max-w-4xl text-4xl font-black uppercase tracking-widest text-kamen-cream font-heading">
                PIZZA KLASSIKER & SPEZIALITÄTEN
              </h1>
              <p className="mt-2 text-xl text-kamen-beige">
                Frisch aus dem Steinofen • Teil 1
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showHero && (
        <>
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-kamen-gold/25 pb-1.5 shrink-0">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-k-transparent.svg"
                alt="Logo"
                className="h-12 w-auto pr-1"
              />
              <div>
                <h1 className="text-2xl font-black font-heading tracking-wider uppercase text-kamen-gold">
                  PIZZA KLASSIKER
                </h1>
                <p className="text-md text-kamen-beige">
                  Original Steinofen Pizza
                </p>
              </div>
            </div>

            {/* Seiten-Indikator */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-kamen-gold mr-2">
                SEITE {pageIndex + 1} / {pizzaPages.length}
              </span>
              {pizzaPages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPageIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === pageIndex
                      ? "w-6 bg-kamen-gold"
                      : "w-2 bg-kamen-gold/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hauptbereich: 12 Spalten volle Breite */}
          <div className="relative z-10 grid grid-cols-12 gap-2.5 my-1.5 flex-1 items-stretch overflow-hidden">
            <div className="col-span-12 h-full flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`page-${pageIndex}`}
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-4 grid-rows-3 gap-4 h-full"
                >
                  {currentPizzas.map((item, idx) => (
                    <motion.div
                      key={item.id || item.name || idx}
                      variants={cardItemVariants}
                      className="relative flex flex-col items-center rounded-xl border border-kamen-gold/20 bg-kamen-dark/85 p-2 shadow-lg backdrop-blur-md justify-between overflow-hidden"
                    >
                      {(item.number || item.id) && (
                        <span className="absolute left-1.5 top-1.5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-sm font-bold text-kamen-dark shadow">
                          {item.number || item.id}
                        </span>
                      )}

                      <div className="relative w-full h-24 sm:h-28 flex items-center justify-center shrink-0 my-3">
                        <div className="absolute w-40 h-16 bg-kamen-gold/20 rounded-full blur-xl pointer-events-none" />

                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-32 w-auto max-w-full object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:scale-105 mt-6"
                          />
                        ) : (
                          <div className="h-full w-full bg-kamen-dark/50 rounded-lg" />
                        )}
                      </div>

                      <div className="w-full text-center flex-1 flex flex-col justify-between pt-4">
                        <div>
                          <h3 className="truncate text-lg font-black uppercase tracking-wide text-kamen-cream font-heading">
                            {item.name}
                          </h3>
                          <p className="line-clamp-2 text-xs font-semibold text-kamen-beige leading-tight mt-0.5">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-1 flex items-center justify-center gap-3 px-8">
                          {item.sizes && item.sizes.length > 0 ? (
                            item.sizes.map((s) => (
                              <div
                                key={s.size}
                                className="flex-1 rounded-md border border-kamen-gold/30 bg-kamen-gold/15 px-1 py-0.5 text-center"
                              >
                                <span className="block text-[7px] font-bold uppercase text-kamen-gold/90">
                                  {s.size}
                                </span>
                                <span className="text-sm font-black text-kamen-gold font-heading">
                                  {s.price}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="rounded-md border border-kamen-gold/30 bg-kamen-gold/15 px-2.5 py-0.5 text-[10.5px] font-black text-kamen-gold font-heading">
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
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-kamen-gold/20 pt-0.5 text-[10px] text-kamen-beige/60 shrink-0">
            <span>Steinofen Qualität • Kamen Pizza</span>
            <span>Alle Preise inkl. MwSt.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TVMenuScreen2;
