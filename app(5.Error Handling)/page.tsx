// app(5.Error Handling)
// expected errors
// import { getData } from "@/utils";

// export default async function Home() {
//   const data = await getData("1");
//   console.log("data:", data);
//   if (!data.id) {
//     return "data is not found";
//   }
//   return <div>I am home page</div>;
// }

// uncaught exceptions
// import { getData } from "@/utils";

// export default async function Home() {
//   const data = await getData("00001");
//   return (
//     <div>
//       I am home page
//       {data.map((i) => (
//         <div key={i.id}>{i.id}</div>
//       ))}
//     </div>
//   );
// }
