import Link from "next/link";
import navItems from "./Items";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-around bg-indigo-500 text-white h-20">
      {navItems?.map((el, idx) => (
        <div key={idx}>
          <Link href={el.link}>
            <div>{el.text}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
