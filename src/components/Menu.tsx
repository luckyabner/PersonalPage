import { montserrat } from "@/app/layout";
import { MENUS } from "@/config";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-4">
      {MENUS.map((menu, index) => (
        <Link
          title={menu.name}
          key={index}
          href={menu.url}
          target="blank"
          className={`${montserrat.className} rounded-full px-6 py-3 font-medium tracking-wider text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 dark:text-slate-100 dark:hover:bg-slate-700`}
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  );
}
