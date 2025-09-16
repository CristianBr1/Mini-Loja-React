import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products, loading, darkMode }) {
  return (
    <div className={styles.grid}>
      {products.map(p => <ProductCard key={p.id} product={p} loading={loading} darkMode={darkMode} />)}
    </div>
  );
}
