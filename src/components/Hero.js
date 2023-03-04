import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.txt}>
          <h1>
            <div className={styles.anim}>
              <svg
                width={314}
                height={106}
                viewBox="0 0 314 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.name}
                  d="M282.209 34.0498C85.3385 -34.2065 -132.512 98.1823 107.443 102.903C407.387 108.805 311.302 12.8208 230.606 2.86647"
                  stroke="#076AFF"
                  strokeWidth="3.8168"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            Fastest &amp; Secure Payment <span>System</span>
          </h1>
          <p className={styles.para}>
            When looking for the premium, effective and reliable payment
            processing solution that will enable you to send and receive funds
            both E-Currency &amp; Crypto-Currency from members.
          </p>
          <div className={styles.appLink}>
            <Link href="">
              <Image
                src="/App-Store.png"
                width={220}
                height={69}
                quality="100"
                alt="app store"
              />
            </Link>
            <Link href="">
              <Image
                src="/Google-Play.png"
                width={220}
                height={69}
                quality="100"
                alt="google play"
              />
            </Link>
          </div>
          <div className={styles.appStats}>
            <div className={`${styles.users} ${styles.activeUsers}`}>
              <p className={styles.count}>10K</p>
              <p className={styles.p}>Active Users</p>
            </div>
            <div className={`${styles.users} ${styles.Downloads}`}>
              <p className={styles.count}>25K</p>
              <p className={styles.p}>Downloads</p>
            </div>
          </div>
        </div>
        <Image
          className={styles.img1}
          src="/hero-img/img1.png"
          width={800}
          height={833}
          quality="100"
          priority
          alt="zupago app"
        />
      </section>
    </>
  );
}
