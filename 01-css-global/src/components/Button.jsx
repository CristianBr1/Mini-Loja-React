export default function Button({ children = "Adicionar", variant = "solid" }) {
  let style = {};
  if (variant === "solid") {
    style = {
      backgroundColor: "var(--color-primary)",
      color: "#fff",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer"
    };
  }
  return <button style={style}>{children}</button>;
}
