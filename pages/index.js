import Head from 'next/head'
import { Anaheim, Inter, Roboto } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Footer, Header } from '../components/common'
import { Banner, Products } from '../components/Home'
import { wrapper } from '../store'
import {  productDataRequest } from '../redux/home'

const roboto = Anaheim({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Americana Hemp</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className={roboto.className}>
        <Header />
        <Banner />
        <Products />
        <Footer />
      </main>
    </>
  )
}


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(productDataRequest());
});
