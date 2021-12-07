
import styles from "./styles.module.scss"


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerDashboard}>
        <img src="/assets/Burger.png" alt="Dashboard" />
        <h1>Dashboard</h1>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.headerBtn}>
          <img src="/assets/Notification.png" alt="Alert" />
        </button>
        <button className={styles.headerBtn}>
          <img src="/assets/Inbox.png" alt="Inbox" />
        </button>
        <div className={styles.headerUser}>
          <img src="/assets/Avatar.png" alt="User img" />
          <span>Happy User</span>
          <span>Loggy Fog</span>
          <button>
            <img src="/assets/Arrow Stroke.png" alt="Drop" />
          </button>
        </div>
      </div>
    </header>
  );
}