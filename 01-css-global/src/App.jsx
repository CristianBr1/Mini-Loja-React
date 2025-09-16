import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import "./styles/global.css";
import fralda from "./images/fralda.png"
import ninho from "./images/ninho.png"
import rexona from "./images/rexona.png"
import oralb from "./images/oralb.png"
import enxaguante from "./images/enxaguante.png"
import dove from "./images/dove.png"

const PRODUCTS = [
  { id: 1, title: "Fralda Huggies Supreme Máxima Proteção XXG 54 Unidades", price: 77.90, rating: 4, tag: "Novo", img: fralda },
  { id: 2, title: "Leite Ninho primeira infância 1+ Prebio Lata 800g", price: 48.59, rating: 5, tag: "Promo", img: ninho },
  { id: 3, title: "Antitranspirante Aerossol Rexona Men Active Dry 250ml Spray Leve Mais Pague Menos", price: 22.49, rating: 3, tag: "Novo", img: rexona },
  { id: 4, title: "Creme Dental Oral-B 3D White 3 Unidades de 70g", price: 16.90, rating: 2, tag: "Promo", img: oralb },
  { id: 5, title: "Kit Dove Shampoo 350ml + Condicionador 175ml Reconstrução Com Queratina", price: 26.90, rating: 5, tag: "Novo", img: dove },
  { id: 6, title: "Enxaguante Bucal Colgate Plax Fresh Mint 500ml", price: 18.99, rating: 4, tag: "Promo", img: enxaguante },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <ProductGrid products={PRODUCTS} loading={loading} darkMode={darkMode} />
      </main>
    </div>
  );
}
