'use client';
import PostSearch from '@/components/PostSearch/PostSearch';
import Posts from '@/components/Posts/Posts';
import { getAllPosts } from '@/services/getPosts';
// import { Metadata } from 'next';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: "Posts | Shop App",
// }

const Products = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(res => setPosts(res.posts))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section>
      <h1>Products post</h1>
      <PostSearch onSearch={setPosts}/>
      {loading
        ? <h3>Loading...</h3>
        : <Posts posts={posts} />
      }
    </section>
  )
}

export default Products;