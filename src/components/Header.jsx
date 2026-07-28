import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className={styles.header}>
      <button className={styles.logoButton} onClick={() => navigate("/")} aria-label="Home">
        <img className={styles.brand} src="/chitkara-logo.png" alt="Chitkara University" />
      </button>
      <button className={styles.iconButton} onClick={handleLogout} aria-label="Logout">
        <FiLogOut />
      </button>
    </header>
  );
}
