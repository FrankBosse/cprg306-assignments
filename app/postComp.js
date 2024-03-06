import { BiAt, BiMinus } from "react-icons/bi";
import Link from "next/link";
import PostLinkComp from "./postLinkComp";
import Week2 from "./week-2/page";
import Week3 from "./week-3/page";
import Week4 from "./week-4/page";
import Week5 from "./week-5/page";
import Week6 from "./week-6/page";

function PostComp({ name, tag, description, link, date, assginmentPage }) {
  return (
    <div className="border border-slate-500 rounded-md">
      <div className="flex flex-row m-4 text-slate-100">
        <div>
          <img
            className="w-12 rounded-full translate-y-1 -translate-x-2 "
            src="/picofme.png"
            alt="Profile Image"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="flex flex-row gap-1">
            <h1 className="text-xl font-bold ">{name}</h1>
            <h2 className="text-sm text-slate-500">
              <div className="flex flex-row gap-1 translate-y-1">
                <BiMinus className="translate-y-1" />
                <BiAt className="translate-y-1 -mr-1" />
                {tag}
                <BiMinus className="translate-y-1" />
              </div>
            </h2>
            <h2 className="text-sm text-slate-500 translate-y-1"> {date}</h2>
          </div>
          <div>
            <p>{description}</p>
            <Link
              className="underline text-blue-500 hover:text-blue-400"
              href={link}
            >
              Click here to open the assignment on a seperate page
            </Link>
            <PostLinkComp assignmentPage={assginmentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AllPosts() {
  return (
    <div className="flex flex-col flex-auto m-10 gap-5">
      <PostComp
        name="Frank Bosse"
        tag="frankjbosse"
        description="This is my week2 assignment for CPRG306"
        link="/week-2"
        date="2024-02-01"
        assginmentPage={<Week2 />}
      />
      <PostComp
        name="Frank Bosse"
        tag="frankjbosse"
        description="This is my week3 assignment for CPRG306"
        link="/week-3"
        date="2024-02-01"
        assginmentPage={<Week3 />}
      />
      <PostComp
        name="Frank Bosse"
        tag="frankjbosse"
        description="This is my week4 assignment for CPRG306"
        link="/week-4"
        date="2024-02-01"
        assginmentPage={<Week4 />}
      />
      <PostComp
        name="Frank Bosse"
        tag="frankjbosse"
        description="This is my week5 assignment for CPRG306"
        link="/week-5"
        date="2024-02-01"
        assginmentPage={<Week5 />}
      />
      <PostComp
        name="Frank Bosse"
        tag="frankjbosse"
        description="This is my week6 assignment for CPRG306"
        link="/week-6"
        date="2024-02-01"
        assginmentPage={<Week6 />}
      />
    </div>
  );
}
