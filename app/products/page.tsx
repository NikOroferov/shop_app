import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  });

  if (!responce.ok) throw new Error("Unable to fetch posts!");

  return responce.json();
}

export const metadata: Metadata = {
  title: "Products | Shop App",
}

const Products = async () => {
  const posts = await getData();
  return (
    <section>
      <h1>Products post</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/products/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products;