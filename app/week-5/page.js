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
        <div className="flex flex-col max-w-fit">
          <h1 className="font-bold m-2 text-3xl text-slate-200 text-center">
            Shopping List
          </h1>
          <div className="flex gap-4 m-6 text-slate-800">
            <div className="flex flex-col">
              <p className="text-slate-100">Item Name</p>
              <input
                className="p-1"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <p className="text-slate-100">Quantity</p>
              <input
                className="p-1"
                type="number"
                min={1}
                max={99}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                required
              />
            </div>

            <div className="flex flex-col">
              <p className="text-slate-100">Category</p>
              <select
                className="h-full"
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
            </div>
          </div>
          <div className="flex flex-row flex-full m-2">
            <ReturnBox />
            <button
              className="bg-slate-300
          shadow-lg
          text-black
          font-semibold
          text-base
          py-2
          px-4
          m-3
          rounded-3xl
          w-56
          hover:bg-gradient-to-br
          from-slate-300
          to-slate-200
          hover:drop-shadow-2xl"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function ReturnBox() {
  return (
    <button className="bg-slate-300 shadow-lg text-black font-semibold text-base py-2 px-4 m-3 rounded-3xl w-56 hover:bg-gradient-to-br from-slate-300 to-slate-200 hover:drop-shadow-2xl ">
      <Link href={"/"}></Link>
      Return
    </button>
  );
}
