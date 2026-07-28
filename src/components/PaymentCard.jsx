import styles from "./PaymentCard.module.css";

export default function PaymentCard() {
  return (
    <>
      <section className={styles.card}>
        <h1>Payment Receipt</h1>
        <div className={styles.rule} />
        <div className={styles.receiptGrid}>
          <div className={styles.left}>
            <p className={styles.period}>JUL-JUN 2025-26</p>
            <p>BARWALA</p>
            <p>BARWALA BUS</p>
            <p>STAND</p>
            <p>ROUTE NO 117</p>
            <p className={styles.fee}>Bus Fee: 46000</p>
            <p>Due Amount:</p>
            <p className={styles.due}>46000</p>
            <p>Paid Amount:</p>
            <p className={styles.paid}>46000</p>
            <p className={styles.valid}>
              Valid Upto <span>30-JUN-2026</span>
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.amount}>Rs. 46000</p>
            <p className={styles.success}>success</p>
            <p>UT38492</p>
            <p>pay_RFiqn3n5tTS7Cs</p>
            <p>10-Sep-2025</p>
            <p>07:16:11 AM</p>
          </div>
        </div>
      </section>

      <section className={styles.card}>
        <h1>Payment Receipt</h1>
        <div className={styles.rule} />
        <div className={styles.receiptGrid}>
          <div className={styles.left}>
            <p className={styles.period}>JUL-JUN 2026-27</p>
            <p>BARWALA</p>
            <p>BARWALA BUS</p>
            <p>STAND</p>
            <p>ROUTE NO 117</p>
            <p className={styles.fee}>Bus Fee: 47000</p>
            <p>Due Amount:</p>
            <p className={styles.due}>47000</p>
            <p>Paid Amount:</p>
            <p className={styles.paid}>47000</p>
            <p className={styles.valid}>
              Valid Upto <span>30-JUN-2027</span>
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.amount}>Rs. 47000</p>
            <p className={styles.success}>success</p>
            <p>UT49203</p>
            <p>pay_AbcdeF123456</p>
            <p>10-Sep-2026</p>
            <p>07:16:11 AM</p>
          </div>
        </div>
      </section>
    </>
  );
}
