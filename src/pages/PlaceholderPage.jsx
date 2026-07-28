import { FiBookmark } from "react-icons/fi";
import BottomNavigation from "../components/BottomNavigation.jsx";
import Header from "../components/Header.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import styles from "./PlaceholderPage.module.css";

export default function PlaceholderPage({ title }) {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.content}>
        <ProfileCard />
        <section className={styles.card}>
          <FiBookmark />
          <h2>{title}</h2>
        </section>
      </main>
      <BottomNavigation />
    </div>
  );
}
