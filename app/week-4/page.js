"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("Produce");

  return (
    <main>
      <div className="animate-in slide-in-from-top-3 fade-in-0 ">
        <h1 className="font-bold m-2 text-3xl">Shopping List</h1>
        <ReturnBox />
      </div>
    </main>
  );
}

function handleSubmit(event) {
  event.preventDefault();

  const item = {
    name,
    quantity,
    category,
  };

  console.log(item);

  alert(JSON.stringify(item));

  setName("");
  setQuantity(1);
  setCategory("Produce");
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
