
import styles from "./styles.module.scss";

export function Widgets() {
  return (
    <div className={styles.widgetsContainer}>
      <div className={styles.widgetsContent}>
        <div>
          <img src="assets/Frame -green.png" alt='Sales img' />
          <span>Number of sales</span>
        </div>
        <span><b>47</b></span>
      </div>
      <div className={styles.widgetsContent}>
        <div>
          <img src="assets/Frame - orange.png" alt='Sales img' />
          <span>Number of sales</span>
        </div>
        <span><b>$1 410</b></span>
      </div>
      <div className={styles.widgetsContent}>
        <div>
          <img src="assets/Frame - yellow.png" alt='Sales img' />
          <span>Number of sales</span>
        </div>
        <span><b>$1 091</b></span>
      </div>
      <div className={styles.widgetsContent}>
        <div>
          <img src="assets/Frame- blue.png" alt='Sales img' />
          <span>Number of sales</span>
        </div>
        <span><b>$124</b></span>
      </div>
      <div className={styles.widgetsContent}>
        <div>
          <img src="assets/Frame-red.png" alt='Sales img' />
          <span>Number of sales</span>
        </div>
        <span><b>$6 296</b></span>
      </div>
    </div>
  );
}