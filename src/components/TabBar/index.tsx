
import styles from "./styles.module.scss";


export function TabBar(){
  return(
    <div className={styles.TabBarContainer}>
      <ul>
        <li>
          <a href='localhost:3000'>Last week</a>
        </li>
        <li>
          <a href='localhost:3000' className={styles.linkActived}>Last month</a>
        </li>
        <li>
          <a href='localhost:3000'>Last year</a>
        </li>
      </ul>
    </div>
  );
}