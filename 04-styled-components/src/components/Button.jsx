import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: ${props => props.variant === "outline" ? "2px solid #3b82f6" : "none"};
  background-color: ${props => props.variant === "outline" ? "transparent" : "#3b82f6"};
  color: ${props => props.variant === "outline" ? "#3b82f6" : "#fff"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.variant === "outline" ? "#3b82f6" : "#2563eb"};
    color: #fff;
    transform: translateY(-2px);
  }
`;

export default function Button({ children = "Adicionar", variant = "solid" }) {
  return <StyledButton variant={variant}>{children}</StyledButton>;
}
