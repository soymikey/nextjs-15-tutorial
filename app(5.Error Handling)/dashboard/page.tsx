// uncaught exceptions
import { getData } from "@/utils";

export default async function Page() {
  await getData("00001");
  throw new Error("This is an uncaught exception");
  return <div>I am dashboard page</div>;
}
