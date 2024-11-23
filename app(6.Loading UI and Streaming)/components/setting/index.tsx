import { sleep } from "@/utils";
import React from "react";

export default async function Setting() {
  await sleep(3000);
  return <div>Setting</div>;
}
