import Link from "next/link"
import css from "../styles/CustomLink.module.css";

interface ILinkProps {
  text: string;
  href: string;
}

const CustomLink = ({text, href}: ILinkProps) => {
  return (
    <Link href={href} className={css.link}>{text}</Link>
  )
}

export default CustomLink;