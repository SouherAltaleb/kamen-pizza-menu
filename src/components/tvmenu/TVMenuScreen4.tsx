import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { noodles } from "../../data/noodles";
import { auflaeufe } from "../../data/auflaeufe";
import { baguettes } from "../../data/baguettes";

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
const PAGE_ROTATE_INTERVAL = 12000;

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function TVMenuScreen4() {
  const [showHero, setShowHero] = useState(true);
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  // Hero Timeout
  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showHero]);

  // Seitenrotation
  useEffect(() => {
    if (showHero) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === 1 ? 2 : 1));
    }, PAGE_ROTATE_INTERVAL);
    return () => clearTimeout(interval);
  }, [showHero]);

  // Data Slices (4 pro Seite)
  const noodlesPage1 = noodles.slice(0, 4);
  const noodlesPage2 = noodles.slice(4, 8);

  const auflaeufePage1 = auflaeufe.slice(0, 4);
  const auflaeufePage2 = auflaeufe.slice(4, 8);

  const baguettesPage1 = baguettes.slice(0, 4);
  const baguettesPage2 = baguettes.slice(4, 8);

  // Original Pizza-Karten-Design
  const renderPizzaStyleCard = (item: AnyItem, idx: number) => (
    <motion.div
      key={item.id || item.name || idx}
      variants={cardItemVariants}
      className="relative flex flex-col items-center rounded-xl border border-kamen-gold/20 bg-black/70 p-1 shadow-lg backdrop-blur-md justify-between overflow-hidden min-h-0 w-full h-full"
    >
      {(item.number || item.id) && (
        <span className="absolute left-1 top-1 z-20 flex h-4 w-4 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-[8.5px] font-bold text-kamen-dark shadow">
          {item.number || item.id}
        </span>
      )}

      <div className="relative w-full h-[38%] min-h-[35px] max-h-[60px] flex items-center justify-center shrink-0 overflow-hidden my-0.5">
        <div className="absolute w-16 h-6 bg-kamen-gold/10 rounded-full blur-md pointer-events-none" />

        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:scale-105 relative z-10"
          />
        ) : (
          <div className="h-full w-full bg-zinc-900/50 rounded-lg flex items-center justify-center text-[7.5px] text-zinc-600">
            Kein Bild
          </div>
        )}
      </div>

      <div className="w-full text-center flex-1 flex flex-col justify-between min-h-0 pb-0.5">
        <div className="flex flex-col justify-center">
          <h3 className="truncate text-[10px] font-black uppercase tracking-wide text-kamen-cream font-heading">
            {item.name}
          </h3>
          <p className="line-clamp-2 text-[7px] font-semibold text-kamen-beige/80 leading-tight mt-0.5">
            {item.description}
          </p>
        </div>

        <div className="mt-0.5 flex items-center justify-center gap-1 px-0.5 shrink-0">
          {item.sizes && item.sizes.length > 0 ? (
            item.sizes.map((s) => (
              <div
                key={s.size}
                className="flex-1 rounded border border-kamen-gold/30 bg-kamen-gold/15 px-0.5 py-[1px] text-center flex flex-col justify-center gap-0"
              >
                <span className="block text-[4.5px] font-bold uppercase text-kamen-gold/90 leading-none">
                  {s.size}
                </span>
                <span className="text-[8px] font-black text-kamen-gold font-heading leading-none mt-[1px]">
                  {s.price}
                </span>
              </div>
            ))
          ) : (
            <div className="rounded border border-kamen-gold/30 bg-kamen-gold/15 px-1.5 py-[1px] text-[8px] font-black text-kamen-gold font-heading leading-none">
              {item.price || "—"}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-kamen-dark font-sans text-kamen-cream select-none flex flex-col justify-between p-2">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-linear-to-b from-kamen-dark/80 via-kamen-dark/60 to-kamen-dark" />
      </div>

      {/* Intro Hero Screen */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-kamen-dark p-12 text-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-screen"
            >
              <source src="/video/pasta.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src="/logo.png"
                alt="Kamen Pizza"
                className="h-32 w-auto drop-shadow-[0_10px_35px_rgba(214,179,106,0.5)]"
              />
              <div className="my-3 h-1 w-full bg-gradient-to-r from-transparent via-kamen-gold to-transparent" />
              <h1 className="text-3xl font-black uppercase tracking-widest text-kamen-cream font-heading">
                WARM GERICHTE
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showHero && (
        <>
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-kamen-gold/30 pb-1 shrink-0 h-[6.5%]">
            <div className="flex items-center gap-2">
              <img
                src="/logo-k-transparent.svg"
                alt="Logo"
                className="h-7 w-auto"
              />
              <div>
                <h1 className="text-lg font-black font-heading tracking-wider uppercase text-kamen-gold leading-none">
                  WARM GERICHTE
                </h1>
                <p className="text-[10px] text-kamen-beige mt-0.5">
                  Frisch aus dem Steinofen
                </p>
              </div>
            </div>

            {/* Seiten-Indikator */}
            <div className="flex items-center gap-1.5 rounded-full border border-kamen-gold/30 bg-black/50 px-2.5 py-0.5 text-[9px] font-bold text-kamen-gold">
              <span
                className={
                  currentPage === 1 ? "text-kamen-gold" : "text-zinc-600"
                }
              >
                1
              </span>
              <span>•</span>
              <span
                className={
                  currentPage === 2 ? "text-kamen-gold" : "text-zinc-600"
                }
              >
                2
              </span>
            </div>
          </div>

          {/* Haupt-Layout Grid */}
          <div className="relative z-10 grid grid-cols-12 gap-2 my-1 flex-1 min-h-0 overflow-hidden">
            {/* SPALTE 1: PASTA & NUDELN */}
            <div className="col-span-3 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/40 p-1.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/icons/nudeln.png"
                    alt="Nudeln"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-[10px] font-black uppercase tracking-wider text-kamen-gold font-heading">
                    PASTA & NUDELN
                  </h2>
                </div>
                <span className="text-[8px] text-kamen-gold/70 font-semibold">
                  {currentPage}/2
                </span>
              </div>

              <div className="flex-1 min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`pasta-page-${currentPage}`}
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="grid grid-cols-1 grid-rows-4 gap-1.5 h-full min-h-0"
                  >
                    {(currentPage === 1 ? noodlesPage1 : noodlesPage2).map(
                      (item, idx) => renderPizzaStyleCard(item, idx)
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* SPALTE 2: AUFLÄUFE */}
            <div className="col-span-3 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/40 p-1.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/icons/auflaeufe.png"
                    alt="Aufläufe"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-[10px] font-black uppercase tracking-wider text-kamen-gold font-heading">
                    AUFLÄUFE
                  </h2>
                </div>
                <span className="text-[8px] text-kamen-gold/70 font-semibold">
                  {currentPage}/2
                </span>
              </div>

              <div className="flex-1 min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`auflauf-page-${currentPage}`}
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="h-full min-h-0"
                  >
                    {currentPage === 1 ? (
                      <div className="grid grid-cols-1 grid-rows-4 gap-1.5 h-full min-h-0">
                        {auflaeufePage1.map((item, idx) =>
                          renderPizzaStyleCard(item, idx)
                        )}
                      </div>
                    ) : (
                      /* SEITE 2: استخدام نفس شبكة grid-rows-4 تماماً لضمان التطابق 100% */
                      <div className="grid grid-cols-1 grid-rows-4 gap-1.5 h-full min-h-0">
                        {/* الكرت الأول والثاني بأحجام مطابقة تماماً لبقية الأعمدة */}
                        {auflaeufePage2.map((item, idx) =>
                          renderPizzaStyleCard(item, idx)
                        )}

                        {/* المساحة المتبقية (الصف 3 و 4) نضع فيها الصورة بالأسفل تماماً */}
                        <div className="row-span-2 flex items-end justify-center w-full h-full min-h-0 overflow-hidden pb-1">
                          <motion.img
                            variants={cardItemVariants}
                            src="/auflauf.png"
                            alt="Auflauf"
                            className="max-h-full max-w-62 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* SPALTE 3: BAGUETTES */}
            <div className="col-span-3 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/40 p-1.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/icons/baguettes.png"
                    alt="Baguettes"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-[10px] font-black uppercase tracking-wider text-kamen-gold font-heading">
                    BAGUETTES
                  </h2>
                </div>
                <span className="text-[8px] text-kamen-gold/70 font-semibold">
                  {currentPage}/2
                </span>
              </div>

              <div className="flex-1 min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`baguette-page-${currentPage}`}
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="grid grid-cols-1 grid-rows-4 gap-1.5 h-full min-h-0"
                  >
                    {(currentPage === 1 ? baguettesPage1 : baguettesPage2).map(
                      (item, idx) => renderPizzaStyleCard(item, idx)
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* SPALTE 4: VIDEO */}
            <div className="col-span-3 relative flex flex-col overflow-hidden rounded-xl border border-kamen-gold/35 bg-black shadow-2xl h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-85"
              >
                <source src="/video/pasta2.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-2 left-1 right-1 flex justify-center z-10">
                <span className="rounded-full border border-kamen-gold/50 bg-black/70 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-kamen-gold backdrop-blur-md text-center">
                  🔥 FRISCH ZUBEREITET
                </span>
              </div>

              <div className="absolute bottom-3 left-2 right-2 z-10 text-center">
                <h3 className="text-[11px] font-black uppercase tracking-wider text-kamen-gold font-heading drop-shadow leading-tight">
                  STEINOFEN QUALITÄT
                </h3>
                <p className="text-[8px] text-kamen-cream font-medium mt-0.5 drop-shadow">
                  Kamen Pizza Spezialitäten
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-kamen-gold/20 pt-0.5 text-[8.5px] text-kamen-beige/70 shrink-0">
            <span>Kamen Pizza • Steinofen-Qualität</span>
            <span>Alle Preise inkl. MwSt.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TVMenuScreen4;
