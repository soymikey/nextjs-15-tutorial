export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ backgroundColor: "orange", padding: 20 }}>
      <div>DashboardLayout</div>

      {children}
    </section>
  );
}
