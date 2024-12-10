interface Blog {
  id: string;
  name: string;
}

// export const dynamic = 'force-static' //Static genenration
// export const dynamic = "force-dynamic"; //Server-side rendering
export const revalidate = 3600; // incremental static regeneration

export default async function Page() {
  const data = await fetch("http://localhost:4000/blog");
  const blogs: Blog[] = await data.json();

  console.log("blog page requesting...");

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {blogs.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </main>
  );
}
