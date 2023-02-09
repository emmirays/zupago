import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <img className={styles.logo} src="Logo.png" alt="" />
          <div className={styles.appLink}>
            <img src="/App-Store.png" alt="" />
            <img src="/Google-Play.png" alt="" />
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <p>
              <span>&copy;</span> 2022 ZuPago HyBrid (HD) Wallet All Rights
              Reserved.
            </p>
            <div className={styles.socialLink}>
              <img src="/footer-img/facebook.png" alt="" />
              <img src="/footer-img/twitter.png" alt="" />
              <img src="/footer-img/linkedin.png" alt="" />
              <img src="/footer-img/instagram.png" alt="" />
            </div>
          </div>

          <div className={styles.right}>
            <p>Terms & Privacy</p>
            <p>Cookies</p>
            <p>Security</p>
          </div>
        </div>
      </footer>
    </>
  );
}
