
import styles from "./styles.module.scss"

export function SiderBar() {
  return (
    <aside className={styles.assideContainer}>
      <div className={styles.LogoContainer}>
        <img src="/assets/Standard.png"  alt='stork' />
        <img src="/assets/stork.png" alt='stork' />
      </div>
      <nav className={styles.navContainer}>
        <ul>
          <li>
            <a href='localhost:3000' className={styles.linkActived}>
              <img src="/assets/True.png" alt='Dashboard' />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='localhost:3000'>
              <img src="/assets/Stork Market.png" alt='Stork Store' />
              <span>Stork Store</span>
            </a>
          </li>
          <li>
            <a href='localhost:3000'>
              <img src="/assets/Products.png" alt='Products' />
              <span>Products</span>
            </a>
          </li>
          <li>
            <a href='localhost:3000'>
              <img src="/assets/Digital Catalogs.png" alt='Digital Catalogs' />
              <span>Digital Catalogs</span>
            </a>
          </li>
          <li>
            <a href='localhost:3000'>
              <img src="/assets/24px.png" alt='Stork Market' />
              <span>Stork Market</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.footerContainer}>
        <a href='localhost:3000'>
          <img src="/assets/Tru.png" alt="Setting"/>
          <span>Setting</span>
        </a>
      </div>
    </aside>
  );
}