import Image from "next/image";
import styles from "@/styles/Section1.module.css";

export default function Section1() {
  return (
    <>
      <section className={styles.section1}>
        <h1 className={styles.heading}>
          Chosen ZuPago Wallet, The System Will Enable You To Do The <span>Following.</span>
        </h1>
        <div className={styles.container}>
          <div className={styles.txt}>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Chosen ZuPago Wallet, The
              System Will Enable You To Do The Following.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Transfer Crypto Currency
              Between ZuPago Members @ Zero Fee.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Receive Money Over The
              Internet &amp; In Cash.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Full Access To Bitcoin
              Network.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Gift Cards For Friends And
              Family @ Zero Fee.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Make Regular Online
              Payments.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> Make Payments For Goods
              &amp; Services.
            </p>
            <p>
              <Image src="/section1-img/Check.png" width={32} height={32} alt="blue-check" /> ZuPago Wallet Presents
              Unique Features For Businesses As Well As Personal Accounts.
            </p>
          </div>
          <Image className={styles.img2} src="/section1-img/img2.png" priority width={476} height={621} quality="100" alt="" />
        </div>
      </section>
    </>
  );
}
