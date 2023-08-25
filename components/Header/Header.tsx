import { FC } from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const navItems = [
  {label: "Home", href: "/"},
  {label: "Posts", href: "/posts"},
  {label: "About", href: "/about"},
]

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems}/>
    </header>
  )
}

export default Header