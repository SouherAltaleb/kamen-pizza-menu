import { useEffect, useRef, useState } from "react";

const categories = [
  {
    id: "pizza",
    name: "Pizza",
    shortName: "Pizza",
    icon: "/icons/pizza.png",
  },
  {
    id: "nudeln",
    name: "Nudeln",
    shortName: "Nudeln",
    icon: "/icons/nudeln.png",
  },
  {
    id: "auflaeufe",
    name: "Aufläufe",
    shortName: "Aufläufe",
    icon: "/icons/auflaeufe.png",
  },
  {
    id: "doener",
    name: "Döner",
    shortName: "Döner",
    icon: "/icons/doener.png",
  },
  {
    id: "baguettes",
    name: "Baguettes",
    shortName: "Baguettes",
    icon: "/icons/baguettes.png",
  },
  {
    id: "salate",
    name: "Salate",
    shortName: "Salate",
    icon: "/icons/salate.png",
  },
  {
    id: "burger-falafel",
    name: "Burger & Falafel",
    shortName: "Burger",
    icon: "/icons/burger.png",
  },
  {
    id: "snacks",
    name: "Snacks & Beilagen",
    shortName: "Snacks",
    icon: "/icons/snacks.png",
  },
  {
    id: "getraenke",
    name: "Getränke",
    shortName: "Getränke",
    icon: "/icons/getraenke.png",
  },
  {
    id: "nachtisch",
    name: "Nachtisch",
    shortName: "Nachtisch",
    icon: "/icons/nachtisch.png",
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

      const offset = 180;

      let currentCategory = "pizza";
      let closestDistance = Infinity;

      categories.forEach((category) => {
        const section = document.getElementById(category.id);

        if (!section) return;

        const top = section.getBoundingClientRect().top;
        const distance = Math.abs(top - offset);

        if (top <= offset && distance < closestDistance) {
          closestDistance = distance;
          currentCategory = category.id;
        }
      });

      setActiveCategory(currentCategory);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    const section = document.getElementById(categoryId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="pb-20">
      {/* Category Cards */}
      <div
        ref={navigationRef}
        className="grid grid-cols-2 gap-4 lg:grid-cols-3"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="flex min-h-24 flex-col items-center justify-center rounded-[25px] border border-kamen-gold bg-kamen-dark p-4 transition-transform hover:-translate-y-1"
          >
            <img
              src={category.icon}
              alt=""
              className="h-10.5 w-10.5 object-contain"
            />

            <span className="mt-3 text-xs font-medium uppercase text-white">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Sticky Navigation */}
      {showStickyNav && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="mx-auto w-full max-w-7xl bg-kamen-dark">
            <nav className="overflow-x-auto scrollbar-hide">
              <div className="flex w-max min-w-full justify-center gap-7 px-5 pb-4 pt-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="flex shrink-0 flex-col items-center gap-1"
                    >
                      <img
                        src={category.icon}
                        alt=""
                        className="h-5.75 w-5.75 object-contain"
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
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
