import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Button from "./Button";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Image
            src="/Logo.png"
            width={164}
            height={35}
            priority
            alt="Zupago Logo"
          />
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/features">Features</Link>
            </li>

            <li>
              <Link href="">Help</Link>
            </li>

            <li>
              <Link href="">About</Link>
            </li>
          </ul>
        </div>
        <div className={styles.CTA}>
          <p>Login</p>
          <Button />
        </div>
      </nav>
    </>
  );
}
