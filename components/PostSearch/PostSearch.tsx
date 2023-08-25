'use client';
import styles from "./PostSearch.module.scss";
import { getPostBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
}

export default function PostSearch({onSearch}: Props) {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const responce = await getPostBySearch(search);
    onSearch(responce.posts);
  }

  return (
    <form onSubmit={handleSubmit} className={styles["search--form"]}>
      <input
        type="search"
        placeholder="search"
        value={search}
        className={styles["search--input"]}
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit" className={styles["search--button"]}>Search</button>
    </form>
  )
}
