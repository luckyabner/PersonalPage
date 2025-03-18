import { merriweather } from "@/lib/font";
import React from "react";

export default function Motto() {
  return (
    <p
      className={`${merriweather.className} mt-2 mb-8 text-lg font-normal text-slate-700 antialiased dark:text-slate-300`}
    >
      Premature optimization is the root of all evil.
    </p>
  );
}
