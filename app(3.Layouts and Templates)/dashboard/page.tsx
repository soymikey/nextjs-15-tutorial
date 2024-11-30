import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <Link href="/dashboard/profile">/dashboard/profile</Link> <br />
      <Link href="/dashboard/setting">/dashboard/setting</Link>
      Dashboard Home
    </div>
  );
}
