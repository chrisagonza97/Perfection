import type { NextPage } from 'next';
import styles from './HeaderNav.module.scss';
import Link from 'next/link';

export const HeaderNav: NextPage = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <span className={styles.left_container}>
          <Link href='/'>
            <li className={styles.logo}>
              <h2>Perfection</h2>
            </li>
          </Link>
        </span>
        <span className={styles.right_container}>
          <Link href='/'>
            <li className={styles.nav_items}>Home</li>
          </Link>
          <Link href='/music'>
            <li>Music</li>
          </Link>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>
        </span>
      </ul>
    </nav>
  );
};
