export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div>
      <div> slug:{JSON.stringify(slug)}</div>
    </div>
  );
}
