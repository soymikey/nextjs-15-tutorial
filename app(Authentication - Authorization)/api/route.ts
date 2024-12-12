// Route Handlers
import { verifySession } from "@/app(Authentication - Authorization)/lib/dal";

export async function GET() {
  // User authentication and role verification
  const session = await verifySession();
  console.log("session", session);
  // Check if the user is authenticated
  if (!session) {
    // User is not authenticated
    return new Response(null, { status: 401 });
  }

  // Check if the user has the 'admin' role
  if (session.role !== "admin") {
    // User is authenticated but does not have the right permissions
    return new Response(null, { status: 403 });
  }

  // Continue for authorized users
}
