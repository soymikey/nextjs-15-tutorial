import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { SessionPayload } from "@/app(Authentication - Authorization)/lib/definitions";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session", error);
  }
}
// // Stateless Sessions
// export async function createSession(userId: number) {
//   const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

//   const encryptedSession = await encrypt({ userId, expiresAt });
//   const cookieStore = await cookies();
//   await cookieStore.set("session", encryptedSession, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: "lax",
//     path: "/",
//   });
// }

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

// Database Sessions

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  // 1. Create a session in the database
  const data = await prisma.session.create({
    data: {
      userId,
      expiresAt,
    },
  });

  const sessionId = data.id;

  // 2. Encrypt the session ID
  const session = await encrypt({ sessionId, expiresAt });

  // 3. Store the session in cookies for optimistic auth checks
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
