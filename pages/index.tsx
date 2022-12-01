import Head from 'next/head';
import { Footer } from 'components/footer/footer';
import { Figtree } from '@next/font/google';
import styles from 'styles/home.module.css';
import { Menu } from 'components/menu/menu';

const font = Figtree();

export default function Home() {
  return (
    <div className={font.className}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={styles.content}>
        <div className={styles.sections}>
          <Menu/>
          <div/>
          <div/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
