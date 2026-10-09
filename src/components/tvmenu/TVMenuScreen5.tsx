import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { saladDressing, salate } from "../../data/salads";
import { drinks } from "../../data/drinks";
import { snacks, snackSauces } from "../../data/snacks";
import { desserts } from "../../data/desserts";

type AnyItem = {
  id?: string;
  number?: string;
  name: string;
  description?: string;
  category?: string;
  image?: string;
  price?: string;
  size?: string;
  sizes?: { size: string; price: string }[];
};

const HERO_DURATION = 5000;
const HERO_REPEAT_INTERVAL = 240000; // إعادة تشغيل الإنترو كل 4 دقائق تلقائياً

// أنيميشن خفيف ومخصص للـ Smart TV
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
    transition: { duration: 0.25, ease: "linear" },
  },
};

export function TVMenuScreen5() {
  const [showHero, setShowHero] = useState(true);

  // Hero Timeout لإخفاء شاشة البداية بعد 5 ثوانٍ
  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showHero]);

  // إظهار شاشة البداية Hero تلقائياً كل 4 دقائق
  useEffect(() => {
    const repeatTimer = setInterval(() => {
      setShowHero(true);
    }, HERO_REPEAT_INTERVAL);

    return () => clearInterval(repeatTimer);
  }, []);

  // تصميم البطاقة المطور والسريع للشاشات (بدون backdrop-blur)
  const renderPizzaStyleCard = (item: AnyItem, idx: number) => (
    <motion.div
      key={item.id || item.name || idx}
      variants={cardItemVariants}
      className="relative flex flex-col items-center rounded-xl border border-kamen-gold/30 bg-black/80 p-1 shadow-md justify-between overflow-hidden min-h-0 w-full h-full"
    >
      {(item.number || item.id) && (
        <span className="absolute left-1 top-1 z-20 flex h-4 w-4 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-[8.5px] font-bold text-kamen-dark shadow">
          {item.number || item.id}
        </span>
      )}

      <div className="relative w-full h-[36%] min-h-[28px] max-h-[50px] flex items-center justify-center shrink-0 overflow-hidden my-0.5">
        <div className="absolute w-16 h-6 bg-kamen-gold/10 rounded-full blur-sm pointer-events-none" />

        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full w-auto object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] relative z-10"
            loading="eager"
          />
        ) : (
          <div className="h-full w-full bg-zinc-900/80 rounded-lg flex items-center justify-center text-[7.5px] text-zinc-600">
            Kein Bild
          </div>
        )}
      </div>

      <div className="w-full text-center flex-1 flex flex-col justify-between min-h-0 pb-0.5">
        <div className="flex flex-col justify-center">
          <h3 className="truncate text-[9px] font-black uppercase tracking-wide text-kamen-cream font-heading">
            {item.name}
          </h3>
          {item.description && (
            <p className="line-clamp-2 text-[6.5px] font-semibold text-kamen-beige/80 leading-tight mt-0.5">
              {item.description}
            </p>
          )}
        </div>

        <div className="mt-0.5 flex items-center justify-center gap-1 px-0.5 shrink-0">
          {item.sizes && item.sizes.length > 0 ? (
            item.sizes.map((s, sIdx) => (
              <div
                key={s.size || sIdx}
                className="flex-1 rounded border border-kamen-gold/30 bg-kamen-gold/20 px-0.5 py-[1px] text-center flex flex-col justify-center gap-0"
              >
                {s.size && (
                  <span className="block text-[4.5px] font-bold uppercase text-kamen-gold/90 leading-none">
                    {s.size}
                  </span>
                )}
                <span className="text-[7.5px] font-black text-kamen-gold font-heading leading-none mt-[1px]">
                  {s.price}
                </span>
              </div>
            ))
          ) : (
            <div className="rounded border border-kamen-gold/30 bg-kamen-gold/20 px-1.5 py-[1px] text-[7.5px] font-black text-kamen-gold font-heading leading-none">
              {item.price || "—"}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Kompakte Zeile für Getränke (ohne Bild)
  const renderDrinkRow = (item: AnyItem, idx: number) => (
    <motion.div
      key={item.name + idx}
      variants={cardItemVariants}
      className="flex items-center justify-between rounded-lg border border-kamen-gold/20 bg-black/70 px-1.5 py-0.5 shadow-sm"
    >
      <span className="truncate text-[8px] font-bold uppercase text-kamen-cream font-heading">
        {item.name}
      </span>
      <div className="flex items-center gap-1 shrink-0">
        {item.size && (
          <span className="text-[6.5px] text-kamen-gold/80 font-medium">
            {item.size}
          </span>
        )}
        <span className="text-[7.5px] font-black text-kamen-gold font-heading">
          {item.price}
        </span>
      </div>
    </motion.div>
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-kamen-dark font-sans text-kamen-cream select-none flex flex-col justify-between p-2">
      {/* Background Video (موحد بشرائح الشفافية opacity-60) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/video/fire4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-kamen-dark/85 via-kamen-dark/60 to-kamen-dark" />
      </div>

      {/* Intro Hero Screen مع فيديو السلطة salad.mp4 */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-kamen-dark p-12 text-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            >
              <source src="/video/salad.mp4" type="video/mp4" />
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
                className="h-32 w-auto drop-shadow-[0_8px_25px_rgba(214,179,106,0.4)]"
              />
              <div className="my-3 h-1 w-full bg-gradient-to-r from-transparent via-kamen-gold to-transparent" />
              <h1 className="text-3xl font-black uppercase tracking-widest text-kamen-cream font-heading">
                SALATE, BEILAGEN & GETRÄNKE
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showHero && (
        <>
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-kamen-gold/30 pb-1 shrink-0 h-[6%]">
            <div className="flex items-center gap-2">
              <img
                src="/logo-k-transparent.svg"
                alt="Logo"
                className="h-7 w-auto"
              />
              <div>
                <h1 className="text-lg font-black font-heading tracking-wider uppercase text-kamen-gold leading-none">
                  SALATE, BEILAGEN & GETRÄNKE
                </h1>
                <p className="text-[10px] text-kamen-beige mt-0.5">
                  Frisch, Knackig & Lecker
                </p>
              </div>
            </div>
          </div>

          {/* Haupt-Grid (12 Spalten) */}
          <div className="relative z-10 grid grid-cols-12 gap-2 my-1 flex-1 min-h-0 overflow-hidden">
            {/* SPALTE 1: SALATE (5 Spalten Breit) */}
            <div className="col-span-5 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/60 p-1.5 shadow-md">
              <div className="flex items-center justify-between border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/icons/salat.png"
                    alt="Salat"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-[10px] font-black uppercase tracking-wider text-kamen-gold font-heading">
                    KNACKIGE SALATE
                  </h2>
                </div>
                <span className="text-[7.5px] text-kamen-beige/80 italic">
                  {saladDressing}
                </span>
              </div>

              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 grid-rows-5 gap-1.5 flex-1 min-h-0"
              >
                {salate
                  .slice(0, 10)
                  .map((item, idx) => renderPizzaStyleCard(item, idx))}
              </motion.div>
            </div>

            {/* SPALTE 2: SNACKS & BEILAGEN + BILD (5 Spalten Breit) */}
            <div className="col-span-5 flex flex-col gap-2 h-full min-h-0">
              {/* Snacks */}
              <div className="flex-1 flex flex-col rounded-xl border border-kamen-gold/30 bg-black/60 p-1.5 shadow-md min-h-0">
                <div className="flex items-center gap-1.5 border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                  <img
                    src="/icons/snacks.png"
                    alt="Snacks"
                    className="h-4 w-4 object-contain"
                  />
                  <h2 className="text-[10px] font-black uppercase tracking-wider text-kamen-gold font-heading">
                    SNACKS & BEILAGEN
                  </h2>
                </div>
                <motion.div
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 grid-rows-2 gap-1.5 flex-1 min-h-0"
                >
                  {snacks.map((item, idx) => renderPizzaStyleCard(item, idx))}
                </motion.div>
              </div>

              {/* Banner Bild unter Snacks */}
              <motion.div
                variants={cardItemVariants}
                className="h-[35%] shrink-0 relative flex items-center justify-center rounded-xl border border-kamen-gold/30 bg-black/80 overflow-hidden p-1 shadow-md"
              >
                <img
                  src="/snacks/snack-banner.png"
                  alt="Snack Highlights"
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="relative z-10 text-[11px] font-black uppercase tracking-widest text-kamen-gold font-heading">
                  Knusprig & Heiss
                </span>
              </motion.div>
            </div>

            {/* SPALTE 3: GETRÄNKE, SAUCEN & DESSERT (2 Spalten Breit) */}
            <div className="col-span-2 flex flex-col gap-1.5 h-full min-h-0">
              {/* GETRÄNKE */}
              <div className="h-[46%] flex flex-col rounded-xl border border-kamen-gold/30 bg-black/60 p-1.5 shadow-md min-h-0">
                <div className="flex items-center gap-1 border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                  <img
                    src="/icons/getraenke.png"
                    alt="Drinks"
                    className="h-3.5 w-3.5 object-contain"
                  />
                  <h2 className="text-[9px] font-black uppercase tracking-wider text-kamen-gold font-heading">
                    GETRÄNKE
                  </h2>
                </div>
                <motion.div
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col justify-between flex-1 min-h-0 gap-0.5 overflow-hidden"
                >
                  {drinks.map((item, idx) => renderDrinkRow(item, idx))}
                </motion.div>
              </div>

              {/* SAUCEN & DIPS */}
              <div className="shrink-0 rounded-xl border border-kamen-gold/30 bg-black/70 p-1.5 shadow-md">
                <h3 className="text-[8px] font-black uppercase text-kamen-gold font-heading mb-0.5 border-b border-kamen-gold/20 pb-0.5">
                  SAUCEN & DIPS
                </h3>
                <div className="space-y-0.5">
                  {snackSauces.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-[7.5px]"
                    >
                      <span className="text-kamen-cream font-medium truncate">
                        {s.name}
                      </span>
                      <span className="text-kamen-gold font-bold ml-1">
                        {s.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESSERT */}
              <div className="flex-1 flex flex-col rounded-xl border border-kamen-gold/30 bg-black/70 p-1 shadow-md min-h-0">
                <h3 className="text-[8px] font-black uppercase text-kamen-gold font-heading mb-0.5 border-b border-kamen-gold/20 pb-0.5 shrink-0">
                  DESSERT
                </h3>
                <div className="flex-1 min-h-0">
                  {desserts.map((item, idx) => renderPizzaStyleCard(item, idx))}
                </div>
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

export default TVMenuScreen5;
