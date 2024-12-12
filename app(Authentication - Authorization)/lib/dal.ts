import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "@/app(Authentication - Authorization)/lib/session";
import { cache } from "react";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId, role: "user" };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const user = await prisma.user.findFirst({ where: { id: session.userId } });
    return user;
  } catch (error) {
    console.log("Failed to fetch user", error);
    return null;
  }
});
