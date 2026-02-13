import { useState } from "react";

export default function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ];
  const [items, setItems] = useState(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} setItems={setItems} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    setquantity(1);
    setDescription("");
    setItems((items) => [...items, newItem]);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip ? </h3>
      <select
        value={quantity}
        onChange={(e) => {
          setquantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, setItems }) {
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlecheked(id) {
    setItems((items) =>
      items.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e)),
    );
  }
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            Deletehandle={handleDelete}
            checkhandle={handlecheked}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, Deletehandle, checkhandle }) {
  const { description, quantity, packed, id } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => {
          checkhandle(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => Deletehandle(id)}>X</button>
    </li>
  );
}

function Stats({ items, setItems }) {
  return (
    <div className="stats">
      <em>
        You have {items.length} items on your list, and you already packed{" "}
        {items.filter((item) => item.packed).length} (
        {Math.round(
          (items.filter((item) => item.packed).length / items.length) * 100,
        ) || 0}
        % )
      </em>
    </div>
  );
}
