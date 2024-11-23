export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ backgroundColor: "lightblue", padding: 20 }}>
      <div>RootTemplate </div>
      {children}
    </section>
  );
}
