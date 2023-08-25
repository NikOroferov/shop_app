import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const API_KEY = process.env.OMDB_SECRET;
  const query = 'matrix';
  const movies = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then(res => res.json());

  console.log("movies >> ", movies);

  return NextResponse.json(movies);
}