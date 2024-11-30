// app(10.Parallel Routes)
import Link from "next/link";

export default function Home() {
  return (
    <div>
      I am home page
      <div>
        <Link href="/settings">go to settings</Link>
      </div>
    </div>
  );
}
