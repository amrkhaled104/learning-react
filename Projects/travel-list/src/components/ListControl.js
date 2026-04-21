export function ListControl({ items, setItems, setISort }) {
  const sortOptions = [
    { value: "input", label: "Sort by input order" },
    { value: "description", label: "Sort by description" },
    { value: "packed", label: "Sort by packed status" },
  ];

  return (
    <div className="actions">
      <select onChange={(e) => setISort(e.target.value)}>
        {sortOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={() => setItems([])}>Clear List</button>
    </div>
  );
}
