import Image from "next/image";
import styles from "@/styles/Section5.module.css";
export default function Section5() {
  return (
    <>
      <section className={styles.section5}>
        <div className={styles.card}>
          <Image width={46} height={46} src="/section5-img/icon1.png" quality="100" alt="" />
          <p className={styles.head}>FULL ACCESS TO FUNDS</p>
          <p className={styles.para}>
            ZuPago put you in total charge of your money with no delay of third
            party inclusion, you can easily access your funds in different
            denomination such as USD, EUR, and GBP where-ever you may be in any
            time of the day, at a go.
          </p>
        </div>
        <div className={`${styles.card} ${styles.end}`}>
          <Image width={46} height={46} src="/section5-img/icon2.png" quality="100" alt="" />
          <p className={styles.head}>ONE WAY CRYPTO-CURRENCY ACCESS</p>
          <p className={styles.para}>
            With just a single sign up, ZuPago provides you more than three
            unique accounts ID, Bitcoin, Bitcoin-Cash, Ethereum &amp; More
            respectively which are dynamically designed for a user to store up
            their various crypto-currency assets as well as send and receive
            options.
          </p>
        </div>
        <div className={styles.card}>
          <Image width={46} height={46} src="/section5-img/icon3.png" quality="100" alt="" />
          <p className={styles.head}>GIFT-CARD DYNAMIC</p>
          <p className={styles.para}>
            Most time’s we love to give the best of gift to our loved ones, but
            how do we make it right without knowing what their hearts desire
            are. ZuPago has made satisfaction easy by enabling gift-card on its
            platform.
          </p>
        </div>
      </section>
    </>
  );
}
