import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   console.log("Rendering DashboardLayout");

  return (
    <section style={{ backgroundColor: "orange", padding: 20 }}>
      <div>DashboardLayout</div>

      {children}
    </section>
  );
}
