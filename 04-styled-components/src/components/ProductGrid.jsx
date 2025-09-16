import styled from "styled-components";
import ProductCard from "./ProductCard";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 5rem 1rem 1rem;

  @media (max-width: 480px) { grid-template-columns: 1fr; }
  @media (min-width: 481px) and (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 769px) and (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 1025px) { grid-template-columns: repeat(4, 1fr); }
`;

export default function ProductGrid({ products, loading, darkMode }) {
  return (
    <Grid>
      {products.map(p => <ProductCard key={p.id} product={p} loading={loading} darkMode={darkMode} />)}
    </Grid>
  );
}
