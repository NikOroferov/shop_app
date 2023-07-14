import { NextPage } from 'next'

type Props = {
  params: {
    pid: string
  }
}


const Product: NextPage = ({params: {pid}}: Props) => {
  return <div>Product</div>
}

export default Product