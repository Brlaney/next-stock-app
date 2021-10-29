import * as React from 'react';
import Link from 'next/link';
import { INav } from '@/lib/types';
import styles from '@/styles/components/Navbar.module.scss';

const navLinks = [
  { id: 1, name: 'Crypto', link: '/cryptocurrency', active: 0 },
  { id: 2, name: 'NYSE', link: '/nyse', active: 0 },
  { id: 3, name: 'Test', link: '/tests', active: 0 },
];

export default function Navbar() {
  const [active, setActive] = React.useState('');

  return (
    <div
      id={styles.navbar}
      className='uk-sticky uk-dark'
      uk-sticky='sel-target: .uk-navbar-container;
       cls-active: uk-navbar-sticky;'
    >
      <nav
        id={styles.navcontainer}
        className='uk-navbar-container'
      >
        <div
          id={styles.parent}
          className='uk-navbar-left uk-margin-left'
        >
          <a
            id={styles.brand}
            href='/'
            className='uk-navbar-item uk-logo'
          >
            Next-Stocks
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div
          id={styles.rightside}
          className='uk-navbar-right uk-margin-right'
        >
          <ul id={styles.list} className='uk-navbar-nav'>
              {navLinks.map((navlink: INav) => (
              <li
                key={navlink.id}
                className={navlink.name ===
                  active ? styles.active : styles.notactive}
              >
                <Link href={navlink.link}>
                  <a
                    className={styles.link}
                    onClick={() => { setActive(navlink.name) }}
                  >
                    {navlink.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div >
  )
};
