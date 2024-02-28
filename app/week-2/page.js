"use client";

import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
      <div className="animate-in slide-in-from-top-3 fade-in-0 text-slate-200">
        <h1 className="font-bold m-2 text-3xl">Shopping List</h1>
        <StudentInfo />
      </div>
    </main>
  );
}
