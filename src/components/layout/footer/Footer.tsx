import { FC } from 'react';
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <span className={styles["footer--copyright"]}>
        NikOroferov &copy; 2023
      </span>
    </footer>
    )
}

export default Footer