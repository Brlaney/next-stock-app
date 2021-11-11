import * as React from 'react';
import AreaTest from '@/components/AreaTest';
import styles from '@/styles/pages/Charts.module.scss';

const TestChart = () => {
  return (
    <>
      <h2 className={styles.title}>
        Recharts library
      </h2>
      <h3 className={styles.subheader}>
        Stock price timeline graph
      </h3>
      <div className={styles.container}>
        <AreaTest />
      </div>
    </>
  );
}

export default TestChart;
