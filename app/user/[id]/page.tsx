// 5.Reusing data across multiple functions part 1

// import { notFound } from "next/navigation";

// interface User {
//   id: string;
//   name: string;
// }

// async function getUser(id: string) {
//   const res = await fetch(`http://localhost:4000/user/${id}`, {
//     cache: "force-cache",
//   });

//   const user: User = await res.json();
//   if (!user) notFound();
//   return user;
// }

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const user = await getUser(id);
//   return (
//     <article>
//       <h1>{user.name}</h1>
//     </article>
//   );
// }

// 5.Reusing data across multiple functions part 2
import { cache } from "react";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { notFound } from "next/navigation";
import Link from "next/link";

const getUser = cache(async (id: string) => {
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });
  console.log("user requesting...");
  if (!user) notFound();
  return user;
});

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);
  await getUser(id);
  await getUser(id);
  await getUser(id);
  return (
    <div>
      <Link href="/">Go Home</Link>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
}
