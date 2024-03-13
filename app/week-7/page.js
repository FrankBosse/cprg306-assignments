"use client";

import Link from "next/link";
import { useState } from "react";
// import ItemList from "./item-list";
// import NewItem from "./new-item";
// import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <div className="animate-in slide-in-from-top-3 fade-in-0 ">
        <div>
          <h1 className="font-bold m-2 text-3xl text-slate-200">
            Shopping List
          </h1>
          <ItemList items={items} />
        </div>
        <div className="flex flex-col max-w-fit">
          <h1 className="font-bold m-2 text-3xl text-slate-200 text-center">
            Add Item
          </h1>
          <NewItem onAddItem={handleAddItem} />
        </div>
      </div>
    </main>
  );
}

function ReturnBox() {
  return (
    <Link className="m-6 rounded-3xl" href={"/"}>
      <button className="bg-slate-300 shadow-lg text-black font-semibold text-base py-2 px-4 rounded-3xl w-56 hover:bg-gradient-to-br from-slate-300 to-slate-200 hover:drop-shadow-2xl ">
        Return
      </button>
    </Link>
  );
}
