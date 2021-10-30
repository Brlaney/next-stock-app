import * as React from 'react';
import Image from 'next/image';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { cryptoEndpoint, append } from '@/lib/utils/crypto';
import { ICrypto } from '@/lib/types';
import GoBack from '@/components/global/GoBack';
import styles from '@/styles/pages/Crypto.module.scss';

const Cryptocurrency = ({ cryptos }:
  InferGetStaticPropsType<typeof getStaticProps>) => {
  const endpoint = '/';

  return (
    <div className={styles.container}>

      <GoBack link={endpoint} />

      {/* Header */}
      <h2 className={styles.title}>
        Cryptocurrency api
      </h2>
      <h3 className={styles.subheader}>
        Test response
      </h3>

      <div className={styles.box}>
        {cryptos.map((crypto: ICrypto) => (
          <div key={crypto.id} className={styles.card}>
            <div className={styles.imgBox}>
              <Image
                className={styles.image}
                src='/${crypto.image}'
                layout='fixed'
                alt='crypto-icon'
                width={100}
                height={100}
              />
            </div>
            <div className={styles.row1}>
              {crypto.name}
            </div>
            <div className={styles.row1}>
              {crypto.symbol}
            </div>
            <div className={styles.row2}>
              Current value: <span className={styles.span}>
                {crypto.current_price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async _context => {
  const res = await fetch(`${cryptoEndpoint}/${append}`);
  const cryptos: ICrypto[] = await res.json();

  return {
    props: {
      cryptos,
    }
  }
};

export default Cryptocurrency;
