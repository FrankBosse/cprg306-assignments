"use client";

import { useState } from "react";
import Item from "./item.js";
import itemsList from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const items = itemsList;

  if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  } else {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <ul className="flex flex-col">
      <button btn btn-primary onClick={() => setSortBy("name")}>
        Name
      </button>
      <button btn btn-primary onClick={() => setSortBy("category")}>
        Category
      </button>
      {items.map((item) => (
        <li>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
}
