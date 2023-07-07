import { FC, PropsWithChildren } from 'react'
import { IMeta } from '../seo/meta.interface'
import dynamic from 'next/dynamic'
import Header from './header/Header'
import Meta from '../seo/Meta'
// import Footer from './footer/Footer'

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
  ssr: false
})

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title}) => {
  return (
    <Meta title={title}>
      <Header />
      <main>{children}</main>
    <DynamicFooter />
    </Meta>
  )
}

export default Layout