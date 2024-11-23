// "use client";

export default function Template({ children }: { children: React.ReactNode }) {
  console.log("Rendering template");
  return (
    <section style={{ backgroundColor: "lightgreen", padding: 20 }}>
      <div>DashboardTemplate</div>
      {children}
    </section>
  );
}
