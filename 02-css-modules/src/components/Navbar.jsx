import styles from './Navbar.module.css';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ''}`}>
      <div></div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button
          className={styles.button}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <div style={{ position: "relative" }}>
          <button className={styles.button} aria-label="Carrinho">🛒</button>
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
    </nav>
  );
}
