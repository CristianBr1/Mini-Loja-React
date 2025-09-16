import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  background-color: ${props => props.darkMode ? "#1f2937" : "#ffffff"};
  box-shadow: ${props => props.darkMode ? "0 2px 8px rgba(255,255,255,0.1)" : "0 2px 8px rgba(0,0,0,0.1)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 50;
  transition: background-color 0.2s, box-shadow 0.2s;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <Nav darkMode={darkMode}>
      <div></div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
          {darkMode ? "☀️" : "🌙"}
        </Button>
        <div style={{ position: "relative" }}>
          <Button aria-label="Carrinho">🛒</Button>
          <span style={{
            position: "absolute",
            top: "-0.5rem",
            right: "-0.5rem",
            width: "1.25rem",
            height: "1.25rem",
            borderRadius: "50%",
            backgroundColor: "red",
            color: "white",
            fontSize: "0.75rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>3</span>
        </div>
      </div>
    </Nav>
  );
}
