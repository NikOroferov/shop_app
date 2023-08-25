import { create } from 'zustand';
import { getAllPosts, getPostBySearch } from '@/services/getPosts';

type UsePosts = {
  posts: any[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostBySearch: (value: string) => Promise<void>;
}

export const usePosts = create<UsePosts>((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true })
    const posts = await getAllPosts()
    set({ posts, loading: false })
  },
  getPostBySearch: async (search) => {
    set({ loading: true })
    const posts = await getPostBySearch(search)
    set({ posts, loading: false })
  }
}))