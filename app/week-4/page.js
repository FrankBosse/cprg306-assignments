"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
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
  };

  return (
    <main>
      <div className="animate-in slide-in-from-top-3 fade-in-0 ">
        <h1 className="font-bold m-2 text-3xl">Shopping List</h1>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
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
