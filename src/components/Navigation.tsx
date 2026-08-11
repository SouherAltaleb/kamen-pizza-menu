import { CakeSlice, CupSoda, IceCream, Pizza, Salad, Soup } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    id: "pizza",
    name: "Pizza",
    shortName: "Pizza",
    icon: Pizza,
  },
  {
    id: "nudeln",
    name: "Nudeln",
    shortName: "Nudeln",
    icon: Soup,
  },
  {
    id: "salate",
    name: "Salate",
    shortName: "Salate",
    icon: Salad,
  },
  {
    id: "aufläufe",
    name: "Aufläufe",
    shortName: "Aufläufe",
    icon: Soup,
  },
  {
    id: "vegetarische-gerichte",
    name: "Vegetarische Gerichte",
    shortName: "Veggi",
    icon: Salad,
  },
  {
    id: "finger-food",
    name: "Finger Food",
    shortName: "Finger Food",
    icon: CupSoda,
  },
  {
    id: "getränke",
    name: "Getränke",
    shortName: "Getränke",
    icon: CupSoda,
  },
  {
    id: "nachtisch",
    name: "Nachtisch",
    shortName: "Nachtisch",
    icon: CakeSlice,
  },
  {
    id: "ben-jerrys",
    name: "Ben & Jerry's",
    shortName: "Ben & Jerry's",
    icon: IceCream,
  },
];

function Navigation() {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [showStickyNav, setShowStickyNav] = useState(false);

  const navigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navigation = navigationRef.current;

      if (!navigation) return;

      const navigationBottom = navigation.getBoundingClientRect().bottom;

      setShowStickyNav(navigationBottom < 0);

      let currentCategory = "pizza";

      categories.forEach((category) => {
        const section = document.getElementById(category.id);

        if (section) {
          const top = section.getBoundingClientRect().top;

          if (top <= 150) {
            currentCategory = category.id;
          }
        }
      });

      setActiveCategory(currentCategory);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="pizza" className="scroll-mt-6 pb-20">
      {/* Category Cards */}
      <div
        ref={navigationRef}
        className="grid grid-cols-2 gap-4 lg:grid-cols-3"
      >
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              onClick={() => {
                document.getElementById(category.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="flex min-h-24 flex-col items-center justify-center rounded-[25px] border border-kamen-gold bg-kamen-dark p-4 transition-transform hover:-translate-y-1"
            >
              <Icon size={42} strokeWidth={1.5} className="text-kamen-gold" />

              <span className="mt-3 text-xs font-medium uppercase text-white">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sticky Navigation */}
      {showStickyNav && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-kamen-dark" />

          <nav className="relative flex gap-7 overflow-x-auto px-5 pb-4 pt-3 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    document.getElementById(category.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="flex shrink-0 flex-col items-center gap-1"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="text-kamen-gold"
                  />

                  <span
                    className={`whitespace-nowrap text-[10px] font-medium uppercase transition-colors ${
                      isActive ? "text-kamen-gold" : "text-white"
                    }`}
                  >
                    {category.shortName}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </section>
  );
}

export default Navigation;
