import Head from "next/head";
import React from "react";
import { Anaheim, Inter, Roboto } from "@next/font/google";
import { Footer, Header } from "../../components/common";
import Subproduct from "../../components/main_products/Subproduct";
import { wrapper } from "../../store";
import { sentslugRequest } from "../../redux/product";
import { productDataRequest } from "../../redux/home";
const roboto = Anaheim({
  weight: "400",
  subsets: ["latin"],
});
function Product() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className={roboto.className}>
        <Header />
        <Subproduct />
        <Footer />
      </main>
    </>
  );
}

export default Product;
// export const getStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true, 
//   };
// };
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, 
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (ctx) => {
    if (ctx?.params?.id) {
      await store.dispatch(sentslugRequest(ctx?.params?.id));
    }
    await store.dispatch(productDataRequest());
    // await store.dispatch(productDataRequest());
  }
);
