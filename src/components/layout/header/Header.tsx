import styles from "./Header.module.scss";
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <ul className={styles["nav--list"]}>
          <li className={styles["nav--item"]}>
            <Link
              href="/"
              className={styles["nav--link"]}
            >
              Home
            </Link>
          </li>
          <li className={styles["nav--item"]}>
            <Link
              href="/about"
              className={styles["nav--link"]}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header