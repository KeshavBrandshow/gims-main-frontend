import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomePage from "../components/HomePage";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>GIMS - GNIOT Institute of Management Studies</title>
        <meta name="description" content="GNIOT Institute of Management Studies (GIMS) - A Leading Business School for PGDM." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
