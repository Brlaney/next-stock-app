import * as React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';

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
            [Mtrx]
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div
          id={styles.rightside}
          className='uk-navbar-right uk-margin-right'
        >
          <ul id={styles.list} className='uk-navbar-nav'>
              <li
                className={styles.active}
              >
                <Link href='#'>
                  <a className={styles.link}>
                  </a>
                </Link>
              </li>
          </ul>
        </div>
      </nav>
    </div >
  )
};
