import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations';

// Icons for homepage
import { AiOutlineStock } from 'react-icons/ai';
import { RiStockLine } from 'react-icons/ri';
import { FaBitcoin } from 'react-icons/fa';

import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div className={styles.container} variants={stagger}>

        {/* Page header */}
        <motion.div className={styles.header} variants={fadeInUp}>
          <h1 className={styles.title}>
            <span id={styles.span}>Next-Stocks</span>
          </h1>
          <h4 className={styles.subtitle}>
            Brendan and Kristian's roadmap to financial freedom
          </h4>
        </motion.div>

        {/* Row */}
        <motion.div className={styles.grid} variants={fadeInUp}>

          {/* Column 1 */}
          <Link href='/solver'>
            <motion.div
              id={styles.col1}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                zIndex: 1,
                scale: 1.04,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
              layout
            >
              <RiStockLine color='white' size='3rem' />
              <p className={styles.cta}>
                New York <br />
                Stock Exchange
              </p>
            </motion.div>
          </Link>

          {/* Column 2 */}
          <Link href='#'>
            <motion.div
              id={styles.col2}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                zIndex: 1,
                scale: 1.04,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
              layout
            >
              <FaBitcoin color='white' size='3rem' />
              <p className={styles.cta}>
                Cryptocurrency <br />
                Market
              </p>
            </motion.div>
          </Link>

          {/* Column 3 */}
          <Link href='#'>
            <motion.div
              id={styles.col3}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                zIndex: 1,
                scale: 1.04,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
              layout
            >
              <AiOutlineStock color='white' size='3rem' />
              <p className={styles.cta}>
                Analyze
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
