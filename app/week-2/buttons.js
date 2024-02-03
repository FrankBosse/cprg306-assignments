import Link from "next/link";

export default function Buttons({ link, name }) {
  const linkStr = `${link}`;

  return (
    <div>
      <Link className="m-3" href={linkStr}>
        <button className="bg-slate-300 shadow-lg text-black font-semibold text-xl py-2 px-4 rounded-3xl w-56 hover:bg-gradient-to-br from-slate-300 to-slate-200 hover:drop-shadow-2xl ">
          {name}
        </button>
      </Link>
    </div>
  );
}
