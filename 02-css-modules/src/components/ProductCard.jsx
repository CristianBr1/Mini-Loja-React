import styles from './ProductCard.module.css';
import Button from './Button';
import Skeleton from './Skeleton';

export default function ProductCard({ product, loading, darkMode }) {
  if (loading) return <Skeleton />;

  return (
    <div className={`${styles.card} ${darkMode ? styles.dark : ''}`}>
      <img src={product.img} alt={product.title} loading="lazy" />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <span>${product.price.toFixed(2)}</span>
        <span>{product.tag}</span>
        <Button className={styles.button}>Adicionar</Button>
      </div>
    </div>
  );
}
