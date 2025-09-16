import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import fralda from "./images/fralda.png"
import ninho from "./images/ninho.png"
import rexona from "./images/rexona.png"
import oralb from "./images/oralb.png"
import enxaguante from "./images/enxaguante.png"
import dove from "./images/dove.png"

const PRODUCTS = [
  { id: 1, title: "Fralda Huggies Supreme Máxima Proteção XXG 54 Unidades", price: 77.90, rating: 4, tag: "Novo", img: fralda },
  { id: 2, title: "Leite Ninho 1+ Prebio Lata 800g", price: 48.59, rating: 5, tag: "Promo", img: ninho },
  { id: 3, title: "Antitranspirante Aerossol Rexona Men Active Dry 250ml Spray Leve Mais Pague Menos", price: 22.49, rating: 3, tag: "Novo", img: rexona },
  { id: 4, title: "Creme Dental Oral-B 3D White 3 Unidades de 70g", price: 16.90, rating: 2, tag: "Promo", img: oralb },
  { id: 5, title: "Kit Dove Shampoo 350ml + Condicionador 175ml Reconstrução Com Queratina", price: 26.90, rating: 5, tag: "Novo", img: dove },
  { id: 6, title: "Enxaguante Bucal Colgate Plax Fresh Mint 500ml", price: 18.99, rating: 4, tag: "Promo", img: enxaguante },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Pega preferência salva no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
    // Simula delay de carregamento
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Atualiza a classe dark no <html> e salva no localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="p-4">
        <ProductGrid products={PRODUCTS} loading={loading} />
      </main>
    </div>
  );
}
