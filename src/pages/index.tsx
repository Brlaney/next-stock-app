import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations';
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
        {/* Homepage header container */}
        <motion.div className={styles.header} variants={fadeInUp}>
          <h1 className={styles.title}>
            [<span id={styles.span}>Mtrx</span>]
          </h1>
          <h4 className={styles.subtitle}>
            A web application that implements the matrix displacement method
          </h4>
        </motion.div>

        {/* Grid row I - children = columns/cards */}
        <motion.div className={styles.grid} variants={fadeInUp}>

          {/* Link 1 - Matrix displacement solver */}
          <Link href='/solver'>
            <motion.div
              id={styles.col1}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <p className={styles.cta}>
                Solver
              </p>
            </motion.div>
          </Link>

          {/* Link 2 - Matrix displacement theory/tutorials */}
          <Link href='#'>
            <motion.div
              id={styles.col2}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <p className={styles.cta}>
                Stiffness Theory
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
