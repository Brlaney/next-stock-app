import Head from 'next/head';
import seo from '@/lib/config/seo';
import Navbar from './Navbar';
import styles from '@/styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={seo.keywords} />
        <meta name='description' content={seo.description} />
        <link rel='icon' type='image/png' href='/favicon/mtrx-favicon.png' />
        <title>{seo.title}</title>
      </Head>
      <Navbar />
      {/* <Nav />  */}
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
};

export default Layout;
