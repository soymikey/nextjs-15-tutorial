export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export function getData(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json()
  );
}

export async function getArtist(id: string) {
  console.log("getArtist requesting...");
  await sleep(3000);
  return { name: "artist1", id };
}

export async function getArtistPlaylists(id: string) {
  console.log("getArtistPlaylists requesting...");
  await sleep(3000);

  return [
    { name: "playlist1", id: "1" },
    { name: "playlist2", id: "2" },
  ];
}

export const getItemV2 = async (
  id: string
): Promise<{ name: string; id: string }> => {
  console.log("getItemV2 requesting...");
  const res = await fetch(`http://localhost:4000/item/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch item with id ${id}`);
  }

  const data = await res.json();
  return data;
};

import { cache } from "react";
import "server-only";

export const getItemCache = cache(async (id: string) => {
  console.log("getItemCache requesting...");
  await sleep(3000);
  return { name: "item", id };
});

export const getItem = async (id: string) => {
  console.log("getItem requesting...");
  await sleep(3000);
  return { name: "item", id };
};
