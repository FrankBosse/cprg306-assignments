export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-slate-300 text-slate-800 p-2 m-2 max-w-sm hover:max-w-md rounded-xl">
      <h1 className="font-bold text-xl">{name}</h1>
      <h2>
        {quantity} {category}
      </h2>
    </div>
  );
}
