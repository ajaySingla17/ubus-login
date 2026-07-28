import { FiBell } from "react-icons/fi";
import BottomNavigation from "../components/BottomNavigation.jsx";
import Header from "../components/Header.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import styles from "./Notifications.module.css";

export default function Notifications() {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.content}>
        <ProfileCard />
        <section className={styles.empty}>
          <FiBell />
          <p>No Notifications</p>
        </section>
      </main>
      <BottomNavigation />
    </div>
  );
}
