import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product, loading, darkMode }) {
  if (loading) return <Skeleton />;

  return (
    <div className={darkMode ? "product-card dark" : "product-card"}>
      <img src={product.img} alt={product.title} loading="lazy" />
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 style={{
          fontWeight: "600",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        }}>{product.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "var(--color-primary)", fontWeight: "bold" }}>${product.price.toFixed(2)}</span>
          <span style={{ color: "#facc15" }}>{'★'.repeat(product.rating)}</span>
        </div>
        <span style={{
          fontSize: "0.75rem",
          backgroundColor: "var(--color-secondary)",
          color: "#fff",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          alignSelf: "flex-start"
        }}>{product.tag}</span>
        <Button variant="solid" />
      </div>
    </div>
  );
}
