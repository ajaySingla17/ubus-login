import { FaBell, FaHome, FaKeyboard } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./BottomNavigation.module.css";

const items = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/change-password", label: "Change Password", icon: FaKeyboard },
  { to: "/notifications", label: "Notification", icon: FaBell },
];

export default function BottomNavigation() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
