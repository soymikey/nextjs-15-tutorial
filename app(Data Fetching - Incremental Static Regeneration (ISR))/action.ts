"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateBlogByPath() {
  revalidatePath("/blog");
}

export async function revalidatePostByTag() {
  revalidateTag("posts");
}
