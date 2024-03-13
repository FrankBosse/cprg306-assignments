"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const itemsList = items;

  if (sortBy === "category") {
    itemsList.sort((a, b) => a.category.localeCompare(b.category));
  } else {
    itemsList.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <ul className="flex flex-col">
      <button className="btn btn-primary" onClick={() => setSortBy("name")}>
        Name
      </button>
      <button className="btn btn-primary" onClick={() => setSortBy("category")}>
        Category
      </button>
      {itemsList.map((item) => (
        <li key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
}
