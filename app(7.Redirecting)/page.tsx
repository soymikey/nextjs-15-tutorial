// app(7.Redirecting)
// redirect & permanentRedirect
// import { getData } from "@/utils";
// import { redirect, permanentRedirect } from "next/navigation";

// export default async function Home() {
//   const data = await getData("1000");
//   console.log("data:", data);
//   if (!data.id) {
//     // redirect(`/login`);
//     // permanentRedirect(`/login`);
//   }

//   return <div>{data.id}</div>;
// }

// useRouter() hook
// "use client";

// import { useRouter } from "next/navigation";

// export default function Page() {
//   const router = useRouter();

//   return (
//     <button type="button" onClick={() => router.push("/login")}>
//       go to login
//     </button>
//   );
// }

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/login',
//         permanent: true,
//       },

//     ]
//   },
// }

// middleware.ts
// import { NextResponse, NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // Redirect to login page if not authenticated
//   console.log("Requested URL:", request.url); // 打印请求的完整 URL

//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: "/dashboard/:path*",
// };
