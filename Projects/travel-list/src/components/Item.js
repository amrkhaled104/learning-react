export function Item({ item, Deletehandle, checkhandle }) {
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
