import { NextPage } from 'next'
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import styles from "@/styles/NotFound.module.scss"

const NotFound: NextPage = () => {
  return (
    <Layout>
      <section className={styles["error--page"]}>
        <Image
          src="/images/404.png"
          alt='404'
          width={450}
          height={400}
          priority
        />
      </section>
    </Layout>
  )
}

export default NotFound;