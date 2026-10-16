import { useEffect, useRef, useState } from "react";
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
const SALAD_ROTATE_INTERVAL = 10000; // تدوير صفحات السلطة كل 10 ثوانٍ

// أنيميشن لظهور الكروت
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 12,
    },
  },
};

// أنيميشن لصورة الأكل
const foodImageVariants: Variants = {
  hidden: { scale: 0.6, opacity: 0, y: 10 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      delay: 0.1,
    },
  },
};

export function TVMenuScreen5() {
  const [showHero, setShowHero] = useState(true);
  const [saladPage, setSaladPage] = useState<1 | 2>(1);

  const drinksVideoRef = useRef<HTMLVideoElement>(null);

  // Hero Timeout
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

  // تدوير صفحتين للسلطات (6 كروت لكل صفحة)
  useEffect(() => {
    if (showHero) return;
    const interval = setInterval(() => {
      setSaladPage((prev) => (prev === 1 ? 2 : 1));
    }, SALAD_ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, [showHero]);

  const salatePage1 = salate.slice(0, 6);
  const salatePage2 = salate.slice(6, 12);

  // تصميم البطاقة القياسي للوجبات مع تكبير الخطوط وإعادة الوهج الذهبي الضبابي
  const renderPizzaStyleCard = (item: AnyItem, idx: number) => (
    <motion.div
      key={item.id || item.name || idx}
      variants={cardItemVariants}
      whileHover={{ scale: 1.02 }}
      className="relative flex flex-col items-center rounded-xl border border-kamen-gold/40 bg-black/85 p-1.5 shadow-lg justify-between overflow-hidden min-h-0 w-full h-full"
    >
      {(item.number || item.id) && (
        <span className="absolute left-1 top-1 z-20 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-kamen-cream/40 bg-kamen-gold text-[9px] font-black text-kamen-dark shadow-md">
          {item.number || item.id}
        </span>
      )}

      {/* حقل الصورة مع تأثير الوهج الذهبي الضبابي الخلفي */}
      <div className="relative w-full h-[42%] min-h-[32px] max-h-[56px] flex items-center justify-center shrink-0 overflow-visible my-0.5">
        {/* Glow Effect الخفي الضبابي المميز */}
        <div className="absolute w-28 h-20 bg-kamen-gold/40 rounded-full blur-md pointer-events-none z-0 top-0.5" />

        {item.image ? (
          <motion.img
            variants={foodImageVariants}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={item.image}
            alt={item.name}
            className="h-26 pt-4 w-auto object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.85)] relative z-10"
            loading="eager"
          />
        ) : (
          <div className="h-full w-full bg-zinc-900/80 rounded-lg flex items-center justify-center text-[8px] text-zinc-500 font-medium">
            Kein Bild
          </div>
        )}
      </div>

      {/* تفاصيل الكرت والأسعار بخط أكبر وأوضح */}
      <div className="w-full text-center flex-1 flex flex-col justify-between min-h-0 pb-0.5 z-10 pt-6">
        <div className="flex flex-col justify-center">
          <h3 className="truncate  font-black uppercase tracking-wide text-kamen-cream font-heading drop-shadow-sm">
            {item.name}
          </h3>
          {item.description && (
            <p className="line-clamp-2 text-xs font-bold text-kamen-beige/90 leading-tight mt-0.5">
              {item.description}
            </p>
          )}
        </div>

        <div className="mt-1 flex items-center justify-center gap-1 px-0.5 shrink-0">
          {item.sizes && item.sizes.length > 0 ? (
            item.sizes.map((s, sIdx) => (
              <div
                key={s.size || sIdx}
                className="flex-1 rounded border border-kamen-gold/40 bg-kamen-gold/25 px-1 py-2 text-center flex flex-col justify-center gap-0 shadow-sm"
              >
                {s.size && (
                  <span className="block text-[8px] font-extrabold uppercase text-kamen-gold/90 leading-none mb-0.5">
                    {s.size}
                  </span>
                )}
                <span className="text-xs font-black text-kamen-gold font-heading leading-none mt-px">
                  {s.price}
                </span>
              </div>
            ))
          ) : (
            <div className="rounded border border-kamen-gold/40 bg-kamen-gold/25 px-2 py-[1.5px] text-[8.5px] font-black text-kamen-gold font-heading leading-none shadow-sm">
              {item.price || "—"}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  // سطر المشروبات بخط أكبر وأوضح
  const renderDrinkRow = (item: AnyItem, idx: number) => (
    <motion.div
      key={item.name + idx}
      variants={cardItemVariants}
      className="flex items-center justify-between border-b border-kamen-gold/20 py-0.5 px-1 hover:bg-white/5 rounded transition-colors"
    >
      <span className="truncate text-sm font-black uppercase text-kamen-cream font-heading tracking-wide">
        {item.name}
      </span>
      <div className="flex items-center gap-1.5 shrink-0">
        {item.size && (
          <span className="text-xs text-kamen-gold/90 font-bold">
            {item.size}
          </span>
        )}
        <span className="text-sm font-black text-kamen-gold font-heading">
          {item.price}
        </span>
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
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        >
          <source src="/video/fire4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-kamen-dark/85 via-kamen-dark/60 to-kamen-dark" />
      </div>

      {/* Intro Hero Screen */}
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
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src="/logo.png"
                alt="Kamen Pizza"
                className="h-32 w-auto drop-shadow-[0_8px_25px_rgba(214,179,106,0.4)]"
              />
              <div className="my-3 h-1 w-full bg-gradient-to-r from-transparent via-kamen-gold to-transparent" />
              <h1 className="text-3xl font-black uppercase tracking-widest text-kamen-cream font-heading">
                SALATE, SNACKS & GETRÄNKE
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
                className="h-9 w-auto"
              />
              <div>
                <h1 className="text-lg font-black font-heading tracking-wider uppercase text-kamen-gold leading-none">
                  SALATE, BEILAGEN & GETRÄNKE
                </h1>
                <p className="text-sm text-kamen-beige mt-0.5">
                  Frisch, Knackig & Lecker
                </p>
              </div>
            </div>
          </div>

          {/* HAUPT-LAYOUT */}
          <div className="relative z-10 flex flex-col gap-2 my-1 flex-1 min-h-0 overflow-hidden">
            {/* ======================================================== */}
            {/* 1. القسم العلوي: SALATE (يسار) + SNACKS & SAUCEN (يمين)    */}
            {/* ======================================================== */}
            <div className="grid grid-cols-12 gap-2 h-[61%] min-h-0">
              {/* SALATE (اليسار: 6 Spalten) */}
              <div className="col-span-6 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/60 p-1.5 shadow-md">
                <div className="flex items-center justify-between border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/icons/salate.png"
                      alt="Salat"
                      className="h-4 w-4 object-contain"
                    />
                    <h2 className="font-black uppercase tracking-wider text-kamen-gold font-heading">
                      KNACKIGE SALATE
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-kamen-beige/90 italic font-medium">
                      {saladDressing}
                    </span>
                    <span className="text-xs text-kamen-gold/80 font-bold border-l border-kamen-gold/30 pl-1.5">
                      {saladPage}/2
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-h-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`salats-page-${saladPage}`}
                      variants={gridContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      className="grid grid-cols-3 grid-rows-2 gap-1.5 h-full min-h-0"
                    >
                      {(saladPage === 1 ? salatePage1 : salatePage2).map(
                        (item, idx) => renderPizzaStyleCard(item, idx)
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* SNACKS & SAUCEN (اليمين: 6 Spalten - كروت سناك + قائمة صوصات نصية + صورة صوصات بالأسفل) */}
              <div className="col-span-6 flex flex-col h-full min-h-0 rounded-xl border border-kamen-gold/30 bg-black/60 p-1.5 shadow-md">
                <div className="flex items-center justify-between border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/icons/snacks.png"
                      alt="Snacks"
                      className="h-4 w-4 object-contain"
                    />
                    <h2 className=" font-black uppercase tracking-wider text-kamen-gold font-heading">
                      SNACKS & SAUCEN
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 flex-1 min-h-0">
                  {/* 4 كروت للـ Snacks (8 Spalten = 2x2) */}
                  <motion.div
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="col-span-8 grid grid-cols-2 grid-rows-2 gap-1.5 h-full min-h-0"
                  >
                    {snacks
                      .slice(0, 4)
                      .map((item, idx) => renderPizzaStyleCard(item, idx))}
                  </motion.div>

                  {/* Saucen قائمة الصوصات (4 Spalten) على شكل Liste مع صورة صوصات أسفلها */}
                  <div className="col-span-4 flex flex-col justify-between h-full min-h-0">
                    <div className="flex flex-col flex-1 min-h-0">
                      <h3 className="text-md font-black uppercase text-kamen-gold font-heading border-b border-kamen-gold/20 pb-0.5 mb-1 shrink-0">
                        SAUCEN & DIPS
                      </h3>
                      <div className="flex flex-col justify-start flex-1 min-h-0 space-y-0.5">
                        {snackSauces.map((s, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center text-sm border-b border-kamen-cream/10 pb-0.5"
                          >
                            <span className="text-kamen-cream font-bold truncate">
                              {s.name}
                            </span>
                            <span className="text-kamen-gold font-black ml-1">
                              {s.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* صورة الصوصات أسفل قائمة الصوصات مع أنيميشن وتأثير خلفي */}
                    <motion.div
                      variants={cardItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="h-[42%] shrink-0 relative flex items-center justify-center overflow-hidden mt-1  shadow-sm"
                    >
                      <div className="absolute w-16 h-8 bg-kamen-gold/20 rounded-full blur-md pointer-events-none" />
                      <motion.img
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        src="/snacks/sauce.png"
                        alt="Sauces"
                        className="h-[78%] w-auto object-contain opacity-90 relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                        loading="eager"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* 2. القسم السفلي: كرت كامل 12 عمود (المشروبات + فيديو + التحلية) */}
            {/* ======================================================== */}
            <div className="col-span-12 h-[39%] min-h-0 rounded-xl border border-kamen-gold/30 bg-black/60 p-2 shadow-md flex items-center justify-between gap-2 overflow-hidden">
              {/* القسم الأيسر: قائمة المشروبات كاملة */}
              <div className="w-[40%] flex flex-col h-full min-h-0">
                <div className="flex items-center gap-1 border-b border-kamen-gold/20 pb-1 mb-1 shrink-0">
                  <img
                    src="/icons/getraenke.png"
                    alt="Drinks"
                    className="h-3.5 w-3.5 object-contain"
                  />
                  <h2 className=" font-black uppercase tracking-wider text-kamen-gold font-heading">
                    KALTGETRÄNKE
                  </h2>
                </div>
                <motion.div
                  variants={gridContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col justify-between flex-1 min-h-0 pr-1"
                >
                  {drinks.map((item, idx) => renderDrinkRow(item, idx))}
                </motion.div>
              </div>

              {/* الوسط: فيديو drinks.mp4 مع التحكم ببطء التشغيل المضمون */}
              <div className="w-[32%] h-full relative flex items-center justify-center overflow-hidden pointer-events-none">
                <video
                  ref={drinksVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 0.65;
                    e.currentTarget.defaultPlaybackRate = 0.65;
                  }}
                  className="h-full w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)] relative z-10"
                >
                  <source src="/video/drinks.mp4" type="video/mp4" />
                </video>
              </div>

              {/* القسم الأيمن: كرت التحلية (Dessert Karte) */}
              <div className="w-[28%] flex flex-col h-full min-h-0">
                <h3 className=" font-black uppercase text-kamen-gold font-heading mb-1 border-b border-kamen-gold/20 pb-0.5 shrink-0 text-center">
                  Nachtisch
                </h3>
                <div className="flex-1 min-h-0">
                  {desserts
                    .slice(0, 1)
                    .map((item, idx) => renderPizzaStyleCard(item, idx))}
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
