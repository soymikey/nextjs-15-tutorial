import { getData } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getData(slug);
  return (
    <div>
      <div> slug:{JSON.stringify(slug)}</div>
      My Blog:
      <div>userId:{data.userId}</div>
      <div>id:{data.id}</div>
      <div>title:{data.title}</div>
      <div>body:{data.body}</div>
    </div>
  );
}
