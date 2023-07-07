import { FC, PropsWithChildren } from 'react'
import { IMeta } from "./meta.interface"
import Head from 'next/head'

const Meta: FC<PropsWithChildren<IMeta>> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}

export default Meta