import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton";

export default function ProductGrid({ products, loading }) {
  return (
    <div className="grid gap-4 pt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
        : products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
