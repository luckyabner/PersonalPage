import { SOCIALS } from "@/lib/config";
import Link from "next/link";
import React from "react";

export default function Socials() {
  return (
    <div className="mt-12 flex justify-center gap-6">
      {SOCIALS.map((social, index) => (
        <Link
          href={social.url}
          key={index}
          aria-label={social.name}
          title={social.name}
          target="blank"
          className="transform transition-transform hover:scale-110"
        >
          <social.icon className="h-6 w-6 fill-slate-900 transition-colors hover:fill-slate-600 dark:fill-slate-100 dark:hover:fill-slate-400" />
        </Link>
      ))}
    </div>
  );
}
