"use client";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("Rendering DashboardLayout");
  }, []);
  return (
    <section>
      <div>DashboardLayout</div>

      {children}
    </section>
  );
}
