import Image from "next/image";
import styles from "@/styles/Section2.module.css";

export default function Section2() {
  return (
    <>
      <section className={styles.section2}>
        <img className={styles.img3} src="/section2-img/img3.png" alt="" />
        <div className={styles.txt}>
          <h1 className={styles.heading}>We Provide Gift Card Services</h1>
          <p className={styles.para}>
            As a ZuPago member, you can simply fund ZuPago gift card, into your
            wallet and use it for any means needed. ZuPago gift card is
            versatile in the sense that it can be redeemed in any form, currency
            or Crypto-Currency by friends & family who have been gifted and can
            be used for purchase in stores internationally. If you are not yet a
            ZuPago member, you can enter your gift card information during
            checkout just the same way you would do with a credit card..
          </p>
          <p className={styles.head}>How Gift Cards Can Benefit You:</p>
          <div className={styles.list}>
            <p>
              <img src="/section2-img/Ellipse 94.png" alt="" /> You will get fee
              zero while generating, paying or using ZuPago Gift card
            </p>
            <p>
              <img src="/section2-img/Ellipse 94.png" alt="" /> You will be able
              to pay for products & services instantly without own
              <span>account with ZuPago.</span>
            </p>
            <p>
              <img src="/section2-img/Ellipse 94.png" alt="" /> Gift cards will
              make it easy to control your spending.
            </p>
            <p>
              <img src="/section2-img/Ellipse 94.png" alt="" /> Instant funding
              of your ZuPago account.
            </p>
          </div>
          <div className={styles.msg}>
            <span>Hi! how can we help you? </span>
            <Image width={60} height={60} src="/section2-img/msg.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
