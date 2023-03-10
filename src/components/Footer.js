import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <Link href="/">
            <Image className={styles.logo} width={229} height={49} quality="100" src="/Logo.png" alt="" />
          </Link>
          <div className={styles.appLink}>
            <Link href="">
              <Image width={198} height={61} src="/App-Store.png" quality="100" alt="" />
            </Link>
            <Link href="">
              <Image width={198} height={61} src="/Google-Play.png" quality="100" alt="" />
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <p>
              <span>&copy;</span> 2023 ZuPago HyBrid (HD) Wallet All Rights
              Reserved.
            </p>
            <div className={styles.socialLink}>
              <Link href="">
                <Image
                  width={55}
                  height={55}
                  quality="100"
                  src="/footer-img/facebook.png"
                  alt=""
                />
              </Link>
              <Link href="">
                <Image
                  width={55}
                  height={55}
                  quality="100"
                  src="/footer-img/twitter.png"
                  alt=""
                />
              </Link>
              <Link href="">
                <Image
                  width={55}
                  height={55}
                  quality="100"
                  src="/footer-img/linkedin.png"
                  alt=""
                />
              </Link>
              <Link href="">
                <Image
                  width={55}
                  height={55}
                  quality="100"
                  src="/footer-img/instagram.png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <Link href="">
              <p>Terms & Privacy</p>
            </Link>
            <Link href="">
              <p>Cookies</p>
            </Link>
            <Link href="">
              <p>Security</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
