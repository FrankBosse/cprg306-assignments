import HeaderComp from "./headerComp";
import AllPosts from "./postComp";

export default function Profile() {
  return (
    <div className="text-slate-100 m-auto flex-wrap border border-slate-400 max-w-5xl animate-in slide-in-from-top-3 fade-in-0 ">
      <img src="/header.jpg" alt="Profile Image" />
      <div className="flex flex-row animate-in slide-in-from-top-6 fade-in-0">
        <div className="-translate-y-14 ml-10">
          <img
            className="w-1/6 rounded-full "
            src="/picofme.png"
            alt="Profile Image"
          />
        </div>
        <div className="mr-10 mt-8">
          <button className="bg-transparent border border-slate-100 hover:bg-opacity-25 hover:bg-slate-400 font-bold py-2 px-4 rounded-full">
            Follow
          </button>
        </div>
      </div>
      <HeaderComp
        Name="Frank Bosse"
        Tag="frankjbosse"
        Description="I'm a Software Developer at SAIT. My posts will display all my assignments for my Web Development class - CPRG306. "
        Location="Calgary, Canada"
        Joined="Joined Febuary 2024"
      />
      <AllPosts />
    </div>
  );
}
