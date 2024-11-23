import Link from "next/link";

export default function FeedPage() {
  return (
    <div>
      <h1>Feed</h1>
      <ul>
        <li>
          <Link href="/photo/1">View Photo 1</Link>
        </li>
        <li>
          <Link href="/photo/2">View Photo 2</Link>
        </li>
      </ul>
    </div>
  );
}
