export default function Stats({ savedItems }) {
  if (!savedItems.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const numItems = savedItems.length;
  const packedItems = savedItems.filter((item) => item.packed).length;
  const checkList = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {checkList === 100
          ? "You got everything! Ready to go  ✈"
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${checkList}%)`}
      </em>
    </footer>
  );
}
