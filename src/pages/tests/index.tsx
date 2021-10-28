import * as React from 'react';
import { cryptoEndpoint } from '@/lib/utils/crypto';

function Test({ data, error }) {

  return (
    <>
      {error && <p>{error}</p>}
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </>
  );
};

export async function getStaticProps() {
  const append = 'markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
  let data = [];
  let error = '';

  try {
    const res = await fetch(
      '`${cryptoEndpoint}`' + {append},
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

export default Test;
