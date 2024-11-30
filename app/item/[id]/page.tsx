// 7.Preloading Data part1
import { getItem, getItemCache, sleep } from "@/utils";
const preload = (id: string) => {
  void getItemCache(id);
};
async function Item({ id }: { id: string }) {
  const item = await getItemCache(id);
  return <div>{item.name}</div>;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // starting loading item data
  preload(id);
  // perform another asynchronous task
  console.log("sleeping...");
  const isAvailable = await sleep(3000);
  return isAvailable ? <Item id={id} /> : null;
}

// 7.Preloading Data part2
// import { getItemV2, sleep } from "@/utils";

// const preload = (id: string) => {
//   void getItemV2(id);
// };
// async function Item({ id }: { id: string }) {
//   const item = await getItemV2(id);
//   return <div>{item.name}</div>;
// }

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   preload(id);
//   console.log("sleeping...");
//   const isAvailable = await sleep(3000);
//   return isAvailable ? <Item id={id} /> : null;
// }
