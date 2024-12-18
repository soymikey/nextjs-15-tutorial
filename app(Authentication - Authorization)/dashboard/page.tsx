import { verifySession } from "@/app(Authentication - Authorization)/lib/dal";
import { AdminDashboard } from "@/app(Authentication - Authorization)/ui/adminDashboard";
import { UserDashboard } from "@/app(Authentication - Authorization)/ui/userDashboard";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await verifySession();
  const userRole = session?.role; // Assuming 'role' is part of the session object

  if (userRole === "admin") {
    return <AdminDashboard />;
  } else if (userRole === "user") {
    return <UserDashboard />;
  } else {
    redirect("/login");
  }
}
