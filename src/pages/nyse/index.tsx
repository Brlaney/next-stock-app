import * as React from 'react';
import { cryptoEndpoint } from '@/lib/utils/crypto';
import styles from '@/styles/pages/Tests.module.scss';

function Nyse({ data, error }) {
  return (
    <>
      <h2 className={styles.title}>
        Cryptocurrency api
      </h2>
      <h3 className={styles.subheader}>
        Test response
      </h3>
      <div className={styles.container}>
        {error && <p>{error}</p>}
        <pre className={styles.pre}>
          <code className={styles.code}>
            {JSON.stringify(data, null, 4)}
          </code>
        </pre>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const append = 'markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
  let data = [];
  let error = '';

  try {
    const res = await fetch(
      `${cryptoEndpoint}/${append}`,
      {
        method: 'GET',
      }
    )

    data = await res.json()
  } catch (e) {
    error = e.toString()
  };

  return {
    props: {
      data,
      error
    }
  }
};

export default Nyse;
