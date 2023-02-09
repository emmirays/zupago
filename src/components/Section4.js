import styles from "@/styles/Section4.module.css";
import Button from "./Button";
export default function Section4() {
  return (
    <>
      <section class={styles.section4}>
        <h1 class={styles.heading}>CRYPTO THE FUTURE AHEAD</h1>
        <p class={styles.para}>
          Crypto-Currency as not only been a means of having one bank in one’s
          hand through the simple act of technology but Has proved itself to be
          the future savior of means of exchange connecting the world in one
          form. Do not be left out, join the digital means of payment and enjoy
          the beauty of easy transactions.
        </p>
        <Button />
      </section>
    </>
  );
}
