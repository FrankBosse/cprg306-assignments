import Link from "next/link";
import Buttons from "./buttons";

export default function StudentInfo() {
  return (
    <div>
      <h1 className="text-xl m-3 font-semibold">Frank Bosse</h1>
      <div className="flex flex-row flex-wrap justify-start ">
        <Buttons
          link="https://github.com/FrankBosse/cprg306-assignments"
          name="My GitHub"
        />
        <Buttons link="/" name="Return" />
      </div>
    </div>
  );
}
