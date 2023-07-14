import { FC } from 'react'
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      Created by &copy;NickOroferov
    </footer>
  )
}

export default Footer