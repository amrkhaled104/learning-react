import { useState } from "react";
import { Item } from "./Item";
import { ListControl } from "./ListControl";

export function PackingList({ items, setItems }) {
  const [Sort, setISort] = useState("input");
  let sortedItems = items;

  if (Sort === "input") sortedItems = items;

  if (Sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (Sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlecheked(id) {
    setItems((items) =>
      items.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e)),
    );
  }
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              Deletehandle={handleDelete}
              checkhandle={handlecheked}
            />
          ))}
        </ul>
        <ListControl items={items} setItems={setItems} setISort={setISort} />
      </div>
    </>
  );
}
