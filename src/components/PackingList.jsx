import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  savedItems,
  onDeleteItem,
  onToggleItem,
  onDeleteAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = savedItems;

  if (sortBy === "description")
    sortedItems = savedItems.toSorted((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === "packed")
    sortedItems = savedItems.toSorted(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteAll}>Clear list</button>
      </div>
    </div>
  );
}
