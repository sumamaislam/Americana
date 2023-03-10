import React from 'react'
import Head from "next/head";
import { Anaheim, Inter, Roboto } from "@next/font/google";
import { Footer, Header } from '../components/common';
import Contact from '../components/Contact';

const roboto = Anaheim({
  weight: "400",
  subsets: ["latin"],
});
function contact() {
  return (
    <div>
    <Head>
      <title>About us</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
    </Head>
    <main className={roboto.className}>
      <Header />
      <Contact/>
      <Footer />
    </main>
  </div>
  )
}

export default contact