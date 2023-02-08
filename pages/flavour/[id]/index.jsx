import Head from "next/head";
import React from "react";
import { Anaheim, Inter, Roboto } from '@next/font/google'
import Footer from "../../../components/common/footer";
import Header from "../../../components/common/header";
import Detail from "../../../components/product/detail";
import { sentslugRequest } from "../../../redux/product";
import { wrapper } from "../../../store";

const roboto = Anaheim({
  weight: '400',
  subsets: ['latin'],
})
function Flavour() {
  return (
    <>
      <Head >
        <title>Flavours</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className={roboto.className}>
        <Header/>
        <Detail />
        <Footer/>
      </main>
    </>
  );
}

export default Flavour;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  if (ctx?.params?.id) {
    console.log("jhgfdiugjdfj",ctx?.params?.id)
    await store.dispatch(sentslugRequest(ctx?.params?.id));
  }
  // await store.dispatch(footerDataRequest());
});
