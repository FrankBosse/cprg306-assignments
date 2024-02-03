/*
 * Questions for teacher:
 * 1. How to animate background with gradiant? Any good resources for learning that?
 * 2. How to animate from up to down instead of down to up (translate -10 to 0)
 *
 */

"use client";

import NavAssignments from "./nav-boxes";

export default function Page() {
  return (
    <main className="m-20">
      <div className="animate-in slide-in-from-top-3 fade-in-0 flex justify-center items-center rounded-3xl shadow-lg bg-slate-300 font-semibold ">
        {/* <img
          src={require("./images/old-scroll.png").default}
          alt="old scroll"
          className="w-20 h-20"
        /> */}
        <h1 className="text-3xl m-12 animate-out ">
          CPRG 306: Web Development 2 - Assignments
        </h1>
      </div>
      <div className="animate-in slide-in-from-top-3 fade-in-0 ">
        <NavAssignments />
      </div>
    </main>
  );
}
