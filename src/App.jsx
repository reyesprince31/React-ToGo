import { Logo, Form, PackingList, Stats } from "./components";
import { useState } from "react";

export default function App() {
  const [savedItems, setSavedItems] = useState([]);

  function handleAddItems(item) {
    setSavedItems((items) => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    setSavedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  }

  function handleToggleItem(itemId) {
    setSavedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) setSavedItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        savedItems={savedItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAll={handleDeleteAll}
      />
      <Stats savedItems={savedItems} />
    </div>
  );
}
