// uncaught exceptions
import { getData } from "@/utils";

export default async function Page() {
  const user = await getData("00001");
  return (
    <div>
      I am dashboard page
      {user.map((i) => (
        <div key={i.id}>111</div>
      ))}{" "}
      123
    </div>
  );
}
