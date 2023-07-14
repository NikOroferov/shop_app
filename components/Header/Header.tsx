import { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles["nav--list"]}>
          <li className={styles["nav--item"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles["nav--item"]}>
            <Link href="/blog">Products</Link>
          </li>
          <li className={styles["nav--item"]}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header