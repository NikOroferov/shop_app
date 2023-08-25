import {Metadata} from 'next';

async function getData(id: string) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });

  return responce.json();
}

type Props = {
  params: {
    pid: string
  }
}

export async function generateMetadata ({params: {pid}}: Props ): Promise<Metadata>{
  const post = await getData(pid);

  return {
    title: post.title,
  }
}

const Product = async ({params: {pid}}: Props) => {
  const post = await getData(pid);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Product;