import { merriweather, montserrat } from "@/app/layout";
import React from "react";

export default function Title() {
  return (
    <div className="perspective-1000 hover-expand-line relative mb-12 inline-block">
      <h1
        className={`${montserrat.className} animate-float transform-gpu text-6xl font-black tracking-tighter antialiased md:text-7xl`}
      >
        Abner
      </h1>
    </div>
  );
}
