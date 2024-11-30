// 1.Fetching data on the server with the fetch API
// interface Post {
//   id: number;
//   title: string;
// }
// export default async function Page() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts: Post[] = await data.json();
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// 2.Fetching data on the server with an ORM or database
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export default async function Page() {
//   const users = await prisma.user.findMany();
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// 3.Fetching data on the client
// "use client";

// import { useState, useEffect } from "react";

// interface Post {
//   id: number;
//   title: string;
// }
// export default function Posts() {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     async function fetchPosts() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();
//       setPosts(data);
//     }
//     fetchPosts();
//   }, []);

//   if (!posts) return <div>Loading...</div>;

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// 4.Caching data with an ORM or Database
// import { unstable_cache } from "next/cache";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const getUsers = unstable_cache(
//   async () => {
//     console.log("Fetching users from database...");
//     return await prisma.user.findMany();
//   },
//   ["users"],
//   { revalidate: 3600, tags: ["users"] }
// );

// export default async function Page() {
//   const users = await getUsers();
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <Link href={"/item/1"}>Go To /item/1</Link>
      <Link href={"/user/1"}>Go To /user/1</Link>
    </div>
  );
}
