import Header from "./components/Header.tsx";
import Navigation from "./components/Navigation.tsx";
import CategoryTabs from "./components/CategoryTabs.tsx";
import PizzaSection from "./components/PizzaSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen bg-kamen-dark text-kamen-cream mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Header />
      <Navigation />
      <CategoryTabs />
      <PizzaSection />
      <Footer />
    </div>
  );
}

export default App;
