import styles from "@/styles/Section3.module.css";
import Image from "next/image";
export default function Section3() {
  return (
    <>
      <section className={styles.section3}>
        <div className={styles.txt}>
          <h1 className={styles.heading}>
            Your Work <br />
            Will Get Much Easier
          </h1>
          <p>
            Built on the foundational principles of commitment to excellence,
            impeccability of Service and relentless dedication of our Team, who
            prides herself with innovative spirit, unique sense for business and
            dedication to quality – At ZuPago (ZP) Wallet we’re proud, to slowly
            emerging as a market leader who has achieved continuous growth in
            the highly competitive market of online payment processing. At
            ZuPago (ZP) Wallet – we pride ourselves in thinking Globally. Our
            team of highly qualified experts is consistently working on
            increasing efficiency, reliability and profitability of our
            Products. If you are serious about simplifying the online currency
            exchange and payment transferring process and enjoying the quickest,
            most efficient and timely service available on the market – ZuPago
            (ZP) Wallet is your #1 choice. Get ready to utilize the full
            potential of new, emerging opportunities, take advantage of the
            current market conditions and profit by working with the most
            innovative, reliable and professional Payment Processor currently
            available on the market. Brace yourself for the unique opportunity
            to easily and efficiently conduct Bitcoin, Bitcoin-Cash, Ethereum,
            Litecoin, GBP, USD, EUR & More transfers in the most secure and
            reliable manner while enjoying impeccable simplicity, reliability
            and ease of use.
          </p>
          <div className={styles.appLink}>
            <Image width={221} height={69} src="/App-Store.png" alt="" />
            <Image width={221} height={69} src="/Google-Play.png" alt="" />
          </div>
        </div>
        <Image width={854} height={640} className={styles.img4} src="/section3-img/img4.png" alt="" />
        
      </section>
    </>
  );
}
