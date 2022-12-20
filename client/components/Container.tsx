import Head from 'next/head';
import CustomLink from './CustomLink';
import css from '../styles/Container.module.css';

interface IContainerProps{
  children: JSX.Element;
  title: string;
}

const Container = ({children, title}: IContainerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={css.navbar}>
          <ul className={css.navbar__list}>
            <li className={css.navbar__item}>
              <CustomLink text='Main' href='/'/>
            </li>
            <li className={css.navbar__item}>
              <CustomLink text='About' href='/about'/>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Container