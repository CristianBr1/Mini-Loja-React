import styles from './Button.module.css';

export default function Button({ children, variant = "solid", className }) {
  const btnClass = variant === "solid" ? styles.solid : styles.outline;
  return <button className={`${btnClass} ${className || ''}`}>{children}</button>;
}
