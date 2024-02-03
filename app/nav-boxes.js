import Link from "next/link";

function DefaultBox({ weekNumb }) {
  const weekStr = `/week-${weekNumb}`;

  return (
    <Link className="m-16 hover:m-14 " href={weekStr}>
      <button className="bg-slate-300 shadow-lg text-black font-semibold text-xl py-2 px-4 rounded-3xl size-52 hover:bg-gradient-to-br from-slate-300 to-slate-200 hover:drop-shadow-2xl hover:size-56 ">
        Week {weekNumb} Assignment
      </button>
    </Link>
  );
}

export default function NavAssignments() {
  return (
    <div className="flex flex-wrap justify-center">
      <DefaultBox weekNumb={2} />
      <DefaultBox weekNumb={3} />
      <DefaultBox weekNumb={4} />
    </div>
  );
}
