import { Link } from "react-router-dom";
import styles from "./MenuCard.module.css";

export default function MenuCard({ title, description, to }) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </Link>
  );
}
