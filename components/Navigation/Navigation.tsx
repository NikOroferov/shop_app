"use client";
import styles from './Navigation.module.scss';
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav--list"]}>
      {
          navLinks.map(link => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.label}
                className={styles["nav--item"]}
              >
                <Link
                  href={link.href}
                  className={isActive ? styles['active'] : ""}
                >
                  {link.label}
                </Link>
            </li>
          )
        })
        }
      </ul>

    </nav>
  )
}
