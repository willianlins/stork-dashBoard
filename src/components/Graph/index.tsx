

import styles from "./styles.module.scss";


export function Graph() {
  
 

  return (
    <div className={styles.graphContainer}>
      <h2>Sales Report</h2>
      <div className={styles.graphCart}>
        <img src="/assets/chart-3.svg"/>
        <img src="/assets/chart-1.svg"/>
      </div>
    </div>
  );
}