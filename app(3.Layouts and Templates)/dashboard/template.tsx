"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Rendering Template");
  }, []);
  return (
    <section>
      <div>dashboard template</div>
      {children}
    </section>
  );
}
