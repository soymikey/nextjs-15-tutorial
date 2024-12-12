"use server";

import { SignupFormSchema, FormState } from "../lib/definitions";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { createSession } from "@/app(Authentication - Authorization)/lib/session";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Auth Library's API
  let user;
  try {
    user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // 4. Create user session
  await createSession(user.id);
  // 5. Redirect user
  redirect("/dashboard");
}

// Server Actions
import { verifySession } from "@/app(Authentication - Authorization)/lib/dal";

export async function serverAction(formData: FormData) {
  const session = await verifySession();
  const userRole = session?.role;

  // Return early if user is not authorized to perform the action
  if (userRole !== "admin") {
    return null;
  }

  // Proceed with the action for authorized users
}
