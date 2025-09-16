import ProductCard from "./ProductCard";

export default function ProductGrid({ products, loading, darkMode }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} loading={loading} darkMode={darkMode} />
      ))}
    </div>
  );
}
