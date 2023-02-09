import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ZuPago</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
