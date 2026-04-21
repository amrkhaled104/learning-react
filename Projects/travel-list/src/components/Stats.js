export function Stats({ items }) {
  const percentage =
    Math.round(
      (items.filter((item) => item.packed).length / items.length) * 100,
    ) || 0;
  return (
    <div className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go ✈️"
          : `You have ${items.length} items on your list, and you already packed ${items.filter((item) => item.packed).length} (${percentage}%)`}
      </em>
    </div>
  );
}
