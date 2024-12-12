import "server-only";
import { getUser } from "@/app(Authentication - Authorization)/lib/dal";
import { User } from "@prisma/client";

function canSeeUsername(currentUser: User) {
  return true;
}

export async function getProfileDTO() {
  const currentUser = await getUser();

  if (currentUser === null) {
    return null;
  }
  return {
    username: canSeeUsername(currentUser) ? currentUser.name : null,
  };
}
