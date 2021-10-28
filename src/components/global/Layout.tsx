import Head from 'next/head';
import Navbar from './Navbar';
import styles from '@/styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='Crypto, cryptocurrency, stock market, stocks, NYSE, money, finance' />
        <meta name='description' content='NYSE stock API and Cryptocurrency stock API' />
        <link rel='icon' type='image/png' href='/favicon.svg' />
        <title>Next-Stock-App</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
};

export default Layout;
