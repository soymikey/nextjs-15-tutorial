import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Setting Page</h1>
      <div>
        <Link href="/dashboard">/dashboard</Link>
        <br />
        <Link href="/dashboard/profile">/dashboard/profile</Link>
      </div>
    </div>
  );
}
