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

// العروض اليومية المحددة
const TAGESANGEBOTE = [
  {
    day: "MONTAG",
    title: "PIZZA-MONTAG",
    desc: "Jede große Pizza nach Wahl",
    price: "9,50 €",
    icon: "🍕",
  },
  {
    day: "MITTWOCH",
    title: "DÖNER-MITTWOCH",
    desc: "Dönertasche",
    price: "6,00 €",
    icon: "🥙",
  },
  {
    day: "DONNERSTAG",
    title: "NUDEL-DONNERSTAG",
    desc: "Alle Nudelgerichte",
    price: "9,00 €",
    icon: "🍝",
  },
];

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
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export function TVMenuScreen3() {
  const [showHero, setShowHero] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  // أخذ البيتزا من الرقم 18b وحتى نهاية القائمة
  const pizzaPages = useMemo(() => {
    const allPizzas = pizzas as AnyItem[];
    // البحث عن الفهرس الذي يبدأ من 18b
    const startIndex = allPizzas.findIndex(
      (p) => p.number === "19" || p.id === "19"
    );
    // إذا لم يجد 18b يأخذ من العنصر 24 كاحتياطي
    const filteredPizzas =
      startIndex !== -1 ? allPizzas.slice(startIndex) : allPizzas.slice(24);

    return chunkArray(filteredPizzas, ITEMS_PER_PAGE);
  }, []);

  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearInterval(t);
    }
  }, [showHero]);

  // التبديل الدوري لصفحات البيتزا المتبقية
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
      {/* خلفية الفيديو والإضاءة */}
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
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-kamen-dark p-12 text-center"
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
                PIZZA & TAGESANGEBOTE
              </h1>
              <p className="mt-2 text-xl text-kamen-beige">
                Unsere besten Angebote für Sie
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
                  PIZZA & TAGESANGEBOTE
                </h1>
                <p className="text-md text-kamen-beige">
                  Frisch & Sparen an AktionsTagen
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {pizzaPages.length > 1 && (
                <div className="flex items-center gap-1.5 bg-kamen-dark/60 border border-kamen-gold/30 rounded-full px-3 py-1">
                  <span className="text-[10px] font-bold text-kamen-beige mr-1">
                    SEITE {pageIndex + 1} / {pizzaPages.length}
                  </span>
                  {pizzaPages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === pageIndex
                          ? "w-5 bg-kamen-gold"
                          : "w-1.5 bg-kamen-gold/30"
                      }`}
                    />
                  ))}
                </div>
              )}

              <span className="rounded-full border border-kamen-gold/40 bg-kamen-gold/10 px-3 py-2 text-sm font-bold uppercase tracking-widest text-kamen-gold">
                🔥 TAGESAKTIONEN
              </span>
            </div>
          </div>

          {/* التقسيم الرئيسي: اليسار 8 أعمدة (4x3 بيتزا) | اليمين 4 أعمدة (العروض اليومية) */}
          <div className="relative z-10 grid grid-cols-12 gap-2.5 my-1.5 flex-1 items-stretch overflow-hidden">
            {/* 1. قسم البيتزا اليسار: 4 أفقي × 3 عمودي */}
            <div className="col-span-8 h-full flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`screen3-page-${pageIndex}`}
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="grid grid-cols-4 grid-rows-3 gap-2.5 h-full"
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

            {/* 2. قسم العروض اليومية اليمين (Tagesangebote) */}
            <div className="col-span-4 h-full flex flex-col justify-between items-center rounded-2xl border border-kamen-gold/30 bg-gradient-to-b from-[#1c1612] via-kamen-dark to-[#0f0c0a] p-3 shadow-2xl relative overflow-hidden">
              {/* هيدر العروض */}
              <div className="w-full text-center border-b border-kamen-gold/25 pb-2 shrink-0">
                <h2 className="text-xl font-black uppercase tracking-widest text-kamen-gold font-heading">
                  TAGESANGEBOTE
                </h2>
                <p className="text-[10px] font-bold text-kamen-beige uppercase tracking-wider mt-0.5">
                  Exklusive Spar-Aktionen
                </p>
              </div>

              {/* قائمة أيام الإثنين، الأربعاء، الخميس */}
              <div className="w-full flex-1 flex flex-col justify-around py-2 gap-2">
                {TAGESANGEBOTE.map((offer) => (
                  <div
                    key={offer.day}
                    className="relative flex flex-col justify-between rounded-xl border border-kamen-gold/25 bg-gradient-to-r from-kamen-gold/10 via-transparent to-kamen-gold/5 p-2.5 shadow-md overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-kamen-gold/15 pb-1">
                      <span className="rounded bg-kamen-gold px-2 py-0.5 text-[10px] font-black text-kamen-dark uppercase tracking-wider">
                        {offer.day}
                      </span>
                      <span className="text-lg">{offer.icon}</span>
                    </div>

                    <div className="my-1.5 flex items-baseline justify-between">
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-wide text-kamen-cream font-heading">
                          {offer.title}
                        </h3>
                        <p className="text-[11px] font-bold text-kamen-beige/90">
                          {offer.desc}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-kamen-gold font-heading drop-shadow">
                          {offer.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ملاحظة سفلية للقسم الأيمن */}
              <div className="w-full text-center border-t border-kamen-gold/15 pt-1.5 shrink-0">
                <span className="text-[9px] font-bold text-kamen-beige/70 uppercase tracking-widest">
                  Gültig an den jeweiligen Aktionstagen
                </span>
              </div>
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

export default TVMenuScreen3;
