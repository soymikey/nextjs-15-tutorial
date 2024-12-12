interface Post {
  id: string;
  name: string;
}

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await fetch("http://localhost:4000/post", {
    next: { tags: ["posts"], revalidate: 3600 },
  });
  const Post: Post[] = await data.json();
  console.log("post page requesting...");
  return (
    <main>
      <h1>Post</h1>
      <ul>
        {Post.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </main>
  );
}
