import { BiAt, BiMap, BiCalendar } from "react-icons/bi";

export default function HeaderComp({
  Name,
  Tag,
  Description,
  Location,
  Joined,
}) {
  return (
    <div className="border-b border-slate-500 flex flex-auto">
      <div className="translate-x-10 text-slate-100">
        <h1 className="text-xl font-bold -translate-y-12">{Name}</h1>
        <h2 className="text-sm text-slate-500 -translate-y-12">
          <div className="flex gap-x-1">
            <BiAt />
            {Tag}
          </div>
        </h2>
        <div className="mr-24">
          <p className=" -translate-y-8">{Description}</p>
          <h2 className="text-sm text-slate-500 -translate-y-6">
            <div className="flex gap-x-1 mt-2">
              <BiMap />
              {Location}
              <BiCalendar className="ml-3" />
              {Joined}
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
