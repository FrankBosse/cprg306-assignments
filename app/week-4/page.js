"use client";

import Link from "next/link";
import NewItem from "./new-item.js";

export default function Page() {
  return (
    <main>
      <div className="animate-in slide-in-from-top-3 fade-in-0 ">
        <div className="flex flex-col max-w-fit">
          <h1 className="font-bold m-2 text-3xl text-slate-200 text-center">
            Shopping List
          </h1>
          <NewItem />
        </div>
      </div>
    </main>
  );
}
