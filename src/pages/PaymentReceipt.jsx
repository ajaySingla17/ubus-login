import BottomNavigation from "../components/BottomNavigation.jsx";
import Header from "../components/Header.jsx";
import PaymentCard from "../components/PaymentCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import styles from "./PageShell.module.css";

export default function PaymentReceipt() {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.content}>
        <ProfileCard />
        <PaymentCard />
      </main>
      <BottomNavigation />
    </div>
  );
}
