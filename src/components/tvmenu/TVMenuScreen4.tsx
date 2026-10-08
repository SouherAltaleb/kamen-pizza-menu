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

const cardContainerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function TVMenuScreen4() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showHero]);

  // Unified Card Design (Pizza-Stil mit identischen Proportionen)
  const renderUniformCard = (item: AnyItem, idx: number) => (
    <div
      key={item.id || item.name || idx}
      className="relative flex flex-col items-center rounded-lg border border-kamen-gold/20 bg-black/75 p-1 shadow-md backdrop-blur-md justify-between overflow-hidden h-full w-full min-h-0"
    >
      {/* Nummer / Badge */}
      {(item.number || item.id) && (
        <span className="absolute left-1 top-1 z-20 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-[7.5px] font-bold text-kamen-dark shadow">
          {item.number || item.id}
        </span>
      )}

      {/* Bild mit fester Höhenbegrenzung */}
      <div className="relative w-full h-[32%] flex items-center justify-center shrink-0 my-0.5 overflow-hidden">
        <div className="absolute w-10 h-5 bg-kamen-gold/10 rounded-full blur-sm pointer-events-none" />
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full max-w-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative z-10"
          />
        ) : (
          <div className="h-full w-full bg-zinc-900/50 rounded-md" />
        )}
      </div>

      {/* Text-Bereich: Name, Zutaten & Preise */}
      <div className="w-full text-center flex-1 flex flex-col justify-between min-h-0 pt-0.5 pb-0.5">
        <div className="flex flex-col items-center justify-center min-h-0">
          <h3 className="w-full truncate text-[9px] font-black uppercase tracking-wide text-kamen-cream font-heading leading-tight">
            {item.name}
          </h3>
          {item.description ? (
            <p className="w-full line-clamp-1 text-[7px] font-medium text-kamen-beige/80 leading-tight mt-0.5 px-0.5">
              {item.description}
            </p>
          ) : (
            <span className="h-2" />
          )}
        </div>

        {/* Preis-Bereich */}
        <div className="mt-0.5 flex items-center justify-center gap-1 w-full px-0.5 shrink-0">
          {item.sizes && item.sizes.length > 0 ? (
            item.sizes.map((s) => (
              <div
                key={s.size}
                className="flex-1 rounded border border-kamen-gold/30 bg-kamen-gold/15 px-0.5 py-[1px] text-center flex flex-col justify-center"
              >
                <span className="block text-[4.5px] font-bold uppercase text-kamen-gold/90 leading-none">
                  {s.size}
                </span>
                <span className="text-[7.5px] font-black text-kamen-gold font-heading leading-none mt-[1px]">
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
    </div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-kamen-dark/80 via-kamen-dark/60 to-kamen-dark" />
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
                HEIßE GERICHTE & SPEZIALITÄTEN
              </h1>
              <p className="mt-1 text-base text-kamen-beige">
                Nudeln • Aufläufe • Baguettes
              </p>
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
                  HEIßE GERICHTE & SPEZIALITÄTEN
                </h1>
                <p className="text-[9px] text-kamen-beige mt-0.5">
                  Frisch aus dem Steinofen
                </p>
              </div>
            </div>
          </div>

          {/* Main Grid: 12 Spalten (5 Pasta | 5 Aufläufe+Baguettes | 2 Video) */}
          <div className="relative z-10 grid grid-cols-12 gap-2 my-1.5 flex-1 min-h-0 overflow-hidden">
            {/* 1. PASTA & NUDELN (5 Spalten) */}
            <div className="col-span-5 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/40 p-1.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-1.5 border-b border-kamen-gold/25 pb-1 mb-1 shrink-0">
                <img
                  src="/icons/nudeln.png"
                  alt="Nudeln Icon"
                  className="h-4 w-4 object-contain"
                />
                <h2 className="text-xs font-black uppercase tracking-wider text-kamen-gold font-heading">
                  PASTA & NUDELN
                </h2>
              </div>
              <motion.div
                variants={cardContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2  gap-1.5 flex-1 h-full min-h-0 overflow-hidden"
              >
                {noodles.map((item, idx) => renderUniformCard(item, idx))}
              </motion.div>
            </div>

            {/* 2. AUFLÄUFE & BAGUETTES (5 Spalten) */}
            <div className="col-span-4 flex flex-col gap-2 h-full min-h-0">
              {/* AUFLÄUFE */}
              <div className="flex-1 flex flex-col min-h-0 rounded-xl border border-kamen-gold/30 bg-black/40 p-1.5 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-1.5 border-b border-kamen-gold/25 pb-1 mb-1 shrink-0">
                  <img
                    src="/icons/auflaeufe.png"
                    alt="Aufläufe Icon"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-xs font-black uppercase tracking-wider text-kamen-gold font-heading">
                    AUFLÄUFE
                  </h2>
                </div>
                <motion.div
                  variants={cardContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 grid-rows-3 gap-1.5 flex-1 h-full min-h-0 overflow-hidden"
                >
                  {auflaeufe.map((item, idx) => renderUniformCard(item, idx))}
                </motion.div>
              </div>

              {/* BAGUETTES */}
              <div className="flex-1 flex flex-col min-h-0 rounded-xl border border-kamen-gold/30 bg-black/40 p-1.5 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-1.5 border-b border-kamen-gold/25 pb-1 mb-1 shrink-0">
                  <img
                    src="/icons/baguettes.png"
                    alt="Baguettes Icon"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-xs font-black uppercase tracking-wider text-kamen-gold font-heading">
                    BAGUETTES
                  </h2>
                </div>
                <motion.div
                  variants={cardContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 grid-rows-4 gap-1 flex-1 h-full min-h-0 overflow-hidden"
                >
                  {baguettes.map((item, idx) => renderUniformCard(item, idx))}
                </motion.div>
              </div>
            </div>

            {/* 3. VIDEO (2 Spalten) */}
            <div className="col-span-3 relative flex flex-col overflow-hidden rounded-xl border-2 border-kamen-gold/35 bg-black shadow-2xl h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-85"
              >
                <source src="/video/pasta.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

              <div className="absolute top-2 left-1 right-1 flex justify-center z-10">
                <span className="rounded-full border border-kamen-gold/50 bg-black/70 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-kamen-gold backdrop-blur-md text-center">
                  🔥 FRISCH ZUBEREITET
                </span>
              </div>

              <div className="absolute bottom-2 left-1 right-1 z-10 text-center">
                <h3 className="text-xs font-black uppercase tracking-wider text-kamen-gold font-heading drop-shadow leading-tight">
                  STEINOFEN QUALITÄT
                </h3>
                <p className="text-[8px] text-kamen-cream font-medium mt-0.5 drop-shadow">
                  Kamen Pizza Spezialitäten
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-kamen-gold/20 pt-0.5 text-[9px] text-kamen-beige/70 shrink-0">
            <span>Kamen Pizza • Steinofen-Qualität</span>
            <span>Alle Preise inkl. MwSt.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TVMenuScreen4;
