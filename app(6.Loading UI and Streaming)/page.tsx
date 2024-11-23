// loading

// import { getData, sleep } from "@/utils";

// export default async function Home() {
//   const user = await getData("1");
//   await sleep(3000);

//   return <div>{user.id}</div>;
// }

// Streaming with Suspense

// import { Suspense } from "react";
// import { Setting, Profile } from "./components";

// export default function Home() {
//   return (
//     <section>
//       <Suspense fallback={<p>Loading Setting...</p>}>
//         <Setting />
//       </Suspense>
//       <Suspense fallback={<p>Loading Profile...</p>}>
//         <Profile />
//       </Suspense>
//     </section>
//   );
// }
