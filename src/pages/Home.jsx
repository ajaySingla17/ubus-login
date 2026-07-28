import BottomNavigation from "../components/BottomNavigation.jsx";
import Header from "../components/Header.jsx";
import MenuCard from "../components/MenuCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import styles from "./Home.module.css";

const cards = [
  {
    title: "Payment Receipt",
    description: "Payment Transaction Receipt",
    to: "/payment-receipt",
  },
  {
    title: "Non Disciplinary Action",
    description: "Extra Dues for Non-Disciplinary Action",
    to: "/non-disciplinary-action",
  },
  {
    title: "Transport Allotment",
    description:
      "Students can avail the University Transport subject to the availability of seats and/or stoppage.",
    to: "/transport-allotment",
  },
  {
    title: "Transport Routes",
    description: "Click To Download and View Bus routes",
    to: "/transport-routes",
  },
];

export default function Home() {
  return (
    <div className={styles.shell}>
      <Header />
      <main className={styles.content}>
        <ProfileCard />
        <section className={styles.menuPanel}>
          {cards.map((card) => (
            <MenuCard key={card.to} {...card} />
          ))}
        </section>
      </main>
      <BottomNavigation />
    </div>
  );
}
