import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button className={styles.logoButton} onClick={() => navigate("/")} aria-label="Home">
        <img className={styles.brand} src="/chitkara-logo.png" alt="Chitkara University" />
      </button>
    </header>
  );
}
