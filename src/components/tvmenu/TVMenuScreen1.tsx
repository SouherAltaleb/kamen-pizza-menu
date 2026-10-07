import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { doener } from "../../data/doener";
import { burger } from "../../data/burger";
import { menus } from "../../data/menus";

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
const MENUS_PAIR_ROTATE_DURATION = 9000;

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

const bgCircleRightVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
};

const bgCircleLeftVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: (delay: number) => ({
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: delay },
  }),
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
};

const foodImageVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
      delay: delay,
    },
  }),
  exit: { scale: 0.5, opacity: 0, transition: { duration: 0.2 } },
};

const textBoxVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: delay },
  }),
  exit: { y: -10, opacity: 0, transition: { duration: 0.2 } },
};

export function TVMenuScreen1() {
  const allScreen1Items: AnyItem[] = useMemo(() => [...doener, ...burger], []);

  const [showHero, setShowHero] = useState(true);
  const [pairIndex, setPairIndex] = useState(0);

  const menuPairs = useMemo(() => chunkArray(menus, 2), []);

  useEffect(() => {
    if (showHero || menuPairs.length === 0) return;
    const pairTimer = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % menuPairs.length);
    }, MENUS_PAIR_ROTATE_DURATION);
    return () => clearInterval(pairTimer);
  }, [showHero, menuPairs.length]);

  useEffect(() => {
    if (showHero) {
      const t = setTimeout(() => setShowHero(false), HERO_DURATION);
      return () => clearInterval(t);
    }
  }, [showHero]);

  const currentPair = menuPairs[pairIndex] || menuPairs[0] || [];
  const menuTopRight = currentPair[0];
  const menuLeftMid = currentPair[1];

  const getMenuPrice = (item?: AnyItem) => {
    if (!item) return "11,00 €";
    if (item.price) return item.price;
    if (item.sizes && item.sizes.length > 0) return item.sizes[0].price;
    return "11,00 €";
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-kamen-dark font-sans text-kamen-cream select-none flex flex-col justify-between p-2.5 sm:p-3">
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
        <div className="absolute inset-0 bg-gradient-to-b from-kamen-dark/80 via-kamen-dark/30 to-kamen-dark" />
      </div>

      {/* شاشة الانترو */}
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
                DÖNER, BURGER & MENÜS
              </h1>
              <p className="mt-2 text-xl text-kamen-beige">
                Frisch zubereitet & lecker
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showHero && (
        <>
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-kamen-gold/25 pb-1 shrink-0">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-k-transparent.svg"
                alt="Logo"
                className="h-10 w-auto pr-1"
              />
              <div>
                <h1 className="text-xl font-black font-heading tracking-wider uppercase text-kamen-gold leading-none">
                  DÖNER, BURGER & SNACKS
                </h1>
                <p className="text-xs text-kamen-beige mt-0.5">
                  Frisch zubereitet & lecker
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-kamen-gold/40 bg-kamen-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-kamen-gold">
                👑 UNSERE KÖNIGSDISZIPLIN
              </span>
            </div>
          </div>

          {/* التقسيم الرئيسي */}
          <div className="relative z-10 grid grid-cols-12 gap-2 my-1 flex-1 items-stretch min-h-0 overflow-hidden">
            {/* 1. قائمة الأصناف اليسرى */}
            <div className="col-span-8 h-full min-h-0 flex flex-col justify-between">
              <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-4 grid-rows-3 gap-2 h-full min-h-0"
              >
                {allScreen1Items.map((item, idx) => (
                  <motion.div
                    key={item.id || item.name || idx}
                    variants={cardItemVariants}
                    className="relative flex flex-col items-center rounded-xl border border-kamen-gold/20 bg-kamen-dark/85 p-2 shadow-lg backdrop-blur-md justify-between overflow-hidden min-h-0"
                  >
                    {(item.number || item.id) && (
                      <span className="absolute left-1.5 top-1.5 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-kamen-cream/30 bg-kamen-gold text-xs font-bold text-kamen-dark shadow">
                        {item.number || item.id}
                      </span>
                    )}

                    {/* حاوية الصورة بأبعاد دقيقة وموحدة لمنع التفاوت في الحجم وتشويه الإضاءة */}
                    <div className="relative w-full h-24 sm:h-26 flex items-center justify-center shrink-0 my-1 overflow-hidden">
                      {/* توهج خفيف ومتناسق ناعم جداً خلف الصورة */}
                      <div className="absolute w-24 h-12 bg-kamen-gold/10 rounded-full blur-lg pointer-events-none" />

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-auto max-w-[90%] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105 relative z-10"
                        />
                      ) : (
                        <div className="h-full w-full bg-kamen-dark/50 rounded-lg" />
                      )}
                    </div>

                    <div className="w-full text-center shrink-0 flex flex-col justify-between pt-0.5">
                      <div>
                        <h3 className="truncate text-sm font-black uppercase tracking-wide text-kamen-cream font-heading">
                          {item.name}
                        </h3>
                        <p className="line-clamp-2 text-[10px] font-semibold text-kamen-beige leading-tight mt-0.5">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-1 flex items-center justify-center gap-1.5 px-1">
                        {item.sizes && item.sizes.length > 0 ? (
                          item.sizes.map((s) => (
                            <div
                              key={s.size}
                              className="flex-1 rounded-md border border-kamen-gold/30 bg-kamen-gold/15 px-1 py-0.5 text-center"
                            >
                              <span className="block text-[7px] font-bold uppercase text-kamen-gold/90">
                                {s.size}
                              </span>
                              <span className="text-xs font-black text-kamen-gold font-heading">
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
            </div>

            {/* 2. قسم المناوي التتابعي الأيمن */}
            <div className="col-span-4 h-full min-h-0 flex flex-col justify-between items-center relative rounded-2xl border border-kamen-gold/30 bg-gradient-to-b from-[#181310] via-kamen-dark to-[#0d0a08] p-2.5 shadow-2xl overflow-hidden">
              {/* هيدر قسم المناوي */}
              <div className="w-full flex items-center justify-between border-b border-kamen-gold/20 pb-1 shrink-0 z-20">
                <span className="text-base font-black uppercase tracking-widest text-kamen-gold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-kamen-gold animate-ping" />
                  SPARS-MENÜS
                </span>

                <div className="flex gap-1.5">
                  {menuPairs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPairIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === pairIndex
                          ? "w-5 bg-kamen-gold"
                          : "w-1.5 bg-kamen-gold/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* حاوية المناوي التتابعية */}
              <div className="relative w-full flex-1 min-h-0 flex flex-col justify-between z-10 py-1 mx-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`pair-${pairIndex}`}
                    className="w-full h-full flex flex-col justify-between relative"
                  >
                    {/* --- المنيو الأول (يمين فوق) --- */}
                    {menuTopRight && (
                      <div className="relative w-full flex items-center justify-end h-[48%] overflow-hidden">
                        <motion.div
                          variants={bgCircleRightVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute right-0 w-[52%] h-[85%] bg-kamen-gold rounded-l-full"
                        />

                        <motion.div
                          variants={foodImageVariants}
                          custom={0.35}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="relative z-10 w-[50%] h-full flex items-center justify-center pr-1"
                        >
                          <img
                            src={
                              menuTopRight.image || "/menus/doener-menue.png"
                            }
                            alt={menuTopRight.name}
                            className="max-h-[85%] w-auto object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.6)]"
                          />
                        </motion.div>

                        <motion.div
                          variants={textBoxVariants}
                          custom={0.7}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-2 z-20 flex flex-col items-start max-w-[42%]"
                        >
                          <span className="text-xs font-black uppercase tracking-widest text-kamen-gold">
                            {menuTopRight.number || "MENÜ 1"}
                          </span>

                          <h3 className="text-xl font-black uppercase tracking-tight text-kamen-cream font-heading leading-tight my-0.5 wrap-break-word">
                            {menuTopRight.name}
                          </h3>

                          {menuTopRight.description && (
                            <p className="text-[10px] font-bold text-kamen-beige line-clamp-2">
                              {menuTopRight.description}
                            </p>
                          )}

                          <span className="text-2xl font-black text-kamen-gold font-heading tracking-tight mt-1">
                            {getMenuPrice(menuTopRight)}
                          </span>
                        </motion.div>
                      </div>
                    )}

                    {/* --- المنيو الثاني (يسار تحت) --- */}
                    {menuLeftMid && (
                      <div className="relative w-full flex items-center justify-start h-[48%] overflow-hidden">
                        <motion.div
                          variants={bgCircleLeftVariants}
                          custom={2.2}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 w-[52%] h-[85%] bg-kamen-gold rounded-r-full"
                        />

                        <motion.div
                          variants={foodImageVariants}
                          custom={2.55}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="relative z-10 w-[50%] h-full flex items-center justify-center pl-1"
                        >
                          <img
                            src={menuLeftMid.image || "/menus/burger-menue.png"}
                            alt={menuLeftMid.name}
                            className="max-h-[85%] w-auto object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.6)]"
                          />
                        </motion.div>

                        <motion.div
                          variants={textBoxVariants}
                          custom={2.9}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute right-2 z-20 flex flex-col items-end text-right max-w-[42%]"
                        >
                          <span className="text-xs font-black uppercase tracking-widest text-kamen-gold">
                            {menuLeftMid.number || "MENÜ 2"}
                          </span>

                          <h3 className="text-xl font-black uppercase tracking-tight text-kamen-cream font-heading leading-tight my-0.5 wrap-break-word">
                            {menuLeftMid.name}
                          </h3>

                          {menuLeftMid.description && (
                            <p className="text-[10px] font-bold text-kamen-beige line-clamp-2">
                              {menuLeftMid.description}
                            </p>
                          )}

                          <span className="text-2xl font-black text-kamen-gold font-heading tracking-tight mt-1">
                            {getMenuPrice(menuLeftMid)}
                          </span>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* الفوتر */}
          <div className="relative z-10 flex items-center justify-between border-t border-kamen-gold/20 pt-0.5 text-[10px] text-kamen-beige/60 shrink-0">
            <span>Steinofen Qualität • Kamen Pizza</span>
            <span>Alle Preise inkl. MwSt.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TVMenuScreen1;
