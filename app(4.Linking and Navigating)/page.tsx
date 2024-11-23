// app(4.Linking and Navigating)

// <Link> Component
// import Link from "next/link";

// export default function Page() {
//   return <Link href="/dashboard">Dashboard</Link>;
// }

// useRouter() hook

// "use client";

// import { useRouter } from "next/navigation";

// export default function Page() {
//   const router = useRouter();

//   return (
//     <button type="button" onClick={() => router.push("/dashboard")}>
//       Dashboard
//     </button>
//   );
// }

// redirect function
// import { getData } from "@/utils";
// import { redirect } from "next/navigation";

// export default async function Page() {
//   const data = await getData("1000");
//   if (!data.id) {
//     redirect("/dashboard");
//   }

//   return <div></div>;
// }

// Using the native History API

// "use client";

// export default function Page() {
//   function goTo(path: string) {
//     window.history.pushState(null, "", `${path}`);
//   }
//   return (
//     <>
//       <button onClick={() => goTo("/dashboard")}>dashboard</button>
//     </>
//   );
// }
