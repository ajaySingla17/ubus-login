import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <section className={styles.card}>
      <img className={styles.photo} src="/student.png" alt="Profile" />
      <div className={styles.copy}>
        <p className={styles.greeting}>Hi, AJAY SINGLA</p>
        <h2>ASHWANI KUMAR SINGLA</h2>
        <p className={styles.roll}>2510987006</p>
      </div>
    </section>
  );
}
