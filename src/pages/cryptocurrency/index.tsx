import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { cryptoEndpoint } from '@/lib/utils/crypto';
import { ICrypto } from '@/lib/types';
import GoBack from '@/components/global/GoBack';
import styles from '@/styles/pages/Tests.module.scss';

const Cryptocurrency = ({ cryptos }:
  InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [cryptoList] = React.useState(cryptos);
  // const [dataList] = React.useState(data);
  const endpoint = '/';

  return (
    <div className={styles.container}>

      <GoBack link={endpoint} />
      <h2 className={styles.title}>
        Cryptocurrency api
      </h2>

      <div className={styles.row}>
        <div className={styles.col1}>
          <ul className='uk-list uk-list-square'>
            <li>id: </li>
            <li>Symbol: </li>
            <li>Name: </li>
            <li>Current price: </li>
            <li>market cap: </li>
            <li>market cap rank: </li>
            <li>fully diluted valuation: </li>
            <li>total volume: </li>
            <li>high 24h: </li>
            <li>low 24h: </li>
            <li>price change 24h: </li>
            <li>price change percentage 24h: </li>
            <li>market cap change 24h: </li>
            <li>market cap change percentage 24h: </li>
            <li>circulating supply: </li>
            <li>total supply: </li>
            <li>max supply: </li>
            <li>Ath: </li>
            <li>Ath change percentage: </li>
            <li>Ath date: </li>
            <li>Atl: </li>
            <li>Atl hange percentage: </li>
            <li>Atl date: </li>
            <li>Roi </li>
            <li>Last updated: </li>
          </ul>
        </div>
        <div className={styles.col2}>
          <ul className='uk-list uk-list-square'>
            {cryptos.map((crypto: ICrypto) => (
              <>
                <li>{crypto.id}</li>
                <li>{crypto.symbol}</li>
                <li>{crypto.name}</li>
                <li>{crypto.current_price}</li>
                <li>{crypto.market_cap}</li>
                <li>{crypto.market_cap_rank}</li>
                <li>{crypto.fully_diluted_valuation}</li>
                <li>{crypto.total_volume}</li>
                <li>{crypto.high_24h}</li>
                <li>{crypto.low_24h}</li>
                <li>{crypto.price_change_24h}</li>
                <li>{crypto.price_change_percentage_24h}</li>
                <li>{crypto.market_cap_change_24h}</li>
                <li>{crypto.market_cap_change_percentage_24h}</li>
                <li>{crypto.circulating_supply}</li>
                <li>{crypto.total_supply}</li>
                <li>{crypto.max_supply}</li>
                <li>{crypto.ath}</li>
                <li>{crypto.ath_change_percentage}</li>
                <li>{crypto.ath_date}</li>
                <li>{crypto.atl}</li>
                <li>{crypto.atl_change_percentage}</li>
                <li>{crypto.atl_date}</li>
                <li>{crypto.roi}</li>
                <li>{crypto.last_updated}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async _context => {
  const append = 'markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  const res = await fetch(`${cryptoEndpoint}/${append}`);
  const cryptos: ICrypto[] = await res.json();

  return {
    props: {
      cryptos,
    }
  }
};

export default Cryptocurrency;
