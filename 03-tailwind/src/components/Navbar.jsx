export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white"></div>

        {/* Controles */}
        <div className="flex items-center gap-4">
          {/* Toggle Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-150"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Carrinho */}
          <div className="relative">
            <button
              aria-label="Carrinho"
              className="px-3 py-1 rounded bg-primary text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-150"
            >
              🛒
            </button>
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
