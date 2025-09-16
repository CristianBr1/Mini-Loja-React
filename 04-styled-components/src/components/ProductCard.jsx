import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) =>
    theme.name === "dark"
      ? "0 2px 8px rgba(255,255,255,0.1)"
      : "0 2px 8px rgba(0,0,0,0.1)"};
  overflow: hidden;
  transition: all 0.2s;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonWrapper = styled.div`
  margin-top: auto; /* garante que o botão fique no final */
`;

export default function ProductCard({ product, loading }) {
  if (loading) return <Skeleton />;

  return (
    <Card>
      <img src={product.img} alt={product.title} loading="lazy" />
      <Content>
        <Title>{product.title}</Title>
        <span>R$ {product.price.toFixed(2)}</span>
        <span>{product.tag}</span>
        <ButtonWrapper>
          <Button>Adicionar</Button>
        </ButtonWrapper>
      </Content>
    </Card>
  );
}
