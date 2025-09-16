export default function Button({ variant = "solid", children, disabled, loading }) {
  let base = "px-4 py-2 rounded bg-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150";
  let variants = {
    solid: "bg-primary text-white hover:bg-blue-900 dark:bg-blue-500 dark:hover:bg-blue-600",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-gray-200 dark:text-blue-500 dark:hover:bg-gray-700"
  };
  return (
    <button
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      aria-busy={loading}
    >
      {loading ? "..." : children}
    </button>
  );
}
