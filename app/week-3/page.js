"use client";

import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <div className="animate-in slide-in-from-top-3 fade-in-0 ">
        <h1 className="font-bold m-2 text-3xl">Shopping List</h1>
        <ItemList />
        <ReturnBox />
      </div>
    </main>
  );
}

function ReturnBox() {
  return (
    <Link className="m-16" href={"/"}>
      <button className="bg-slate-300 shadow-lg text-black font-semibold text-base py-2 px-4 m-3 rounded-3xl w-56 hover:bg-gradient-to-br from-slate-300 to-slate-200 hover:drop-shadow-2xl ">
        Return
      </button>
    </Link>
  );
}
