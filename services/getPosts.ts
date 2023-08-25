export const getAllPosts = async () => {
  const responce = await fetch('/api/posts', {
    next: {
      revalidate: 60
    }
  });

  if (!responce.ok) throw new Error("Unable to fetch posts!");

  return responce.json();
}

export const getPostBySearch = async (search: string) => {
  const responce = await fetch(`/api/posts?q=${search}`);

  if (!responce.ok) throw new Error("Unable to fetch posts!");

  return responce.json();
}