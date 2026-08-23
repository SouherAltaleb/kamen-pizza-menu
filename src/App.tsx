import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation.tsx";
import MenuSection from "./components/MenuSection.tsx";
import { noodles } from "./data/noodles";
import { auflaeufe } from "./data/auflaeufe";
import { doener } from "./data/doener";
import { salate, saladDressing } from "./data/salads";
import { baguettes } from "./data/baguettes";
import { burger } from "./data/burger";
import SauceList from "./components/SauceList.tsx";
import { snacks, snackSauces } from "./data/snacks";
import { menus } from "./data/menus";

import PizzaSection from "./components/PizzaSection.tsx";
import DrinksSection from "./components/DrinksSection.tsx";
import { desserts } from "./data/desserts";
import AllergenInfo from "./components/AllergenInfo.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen bg-kamen-dark text-kamen-cream">
      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <Navigation />
        <MenuSection id="menus" title="Menüs" items={menus} />

        <PizzaSection />

        <MenuSection
          id="nudeln"
          title="Nudeln"
          description="Alle Gerichte werden mit einer Nudelsorte nach Wahl zubereitet.
"
          items={noodles}
        />

        <MenuSection id="auflaeufe" title="Aufläufe" items={auflaeufe} />

        <MenuSection
          id="doener"
          title="Döner & Teller"
          description="Hänchenfleisch Drehspieß nach Doner Art"
          items={doener}
        />

        <MenuSection id="baguettes" title="Baguettes" items={baguettes} />

        <MenuSection
          id="salate"
          title="Salate"
          description={saladDressing}
          items={salate}
        />

        <MenuSection id="burger" title="Burger" description="" items={burger} />

        <MenuSection id="snacks" title="Snacks & Beilagen" items={snacks}>
          <SauceList sauces={snackSauces} />
        </MenuSection>

        <DrinksSection />
        <MenuSection id="nachtisch" title="Nachtisch" items={desserts} />

        <AllergenInfo />

        <Footer />
      </div>
    </div>
  );
}

export default App;
