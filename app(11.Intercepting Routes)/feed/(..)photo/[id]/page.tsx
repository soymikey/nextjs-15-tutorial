export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        background: "#fff",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h2>Photo Details</h2>
      <p>Photo ID: {id}</p>
      <p>This is the intercepted photo view.</p>
    </div>
  );
}
