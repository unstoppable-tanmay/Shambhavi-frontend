"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    path: "/saftey",
    name: "Saftey",
  },
  {
    path: "/lostandfound",
    name: "Lost & Found",
  },
  {
    path: "/feedback",
    name: "Feedback",
  },
  {
    path: "/logistic",
    name: "Logistic",
  },
];

const Navbar = ({ color }: { color: boolean }) => {
  let pathname = usePathname() || "/";
  return (
    <nav className={`max-h-[140px] w-[90%] h-20  ${color?"text-white":"text-black"} flex items-center justify-between`}>
      <div className="logo flex items-center gap-4">
        <div className="h-12 relative aspect-square">
          <Image alt="" src={"/logo.png"} fill></Image>
        </div>
        <span className="text-2xl font-medium tracking-wider">HRTC</span>
      </div>
      <div className="hamburger"></div>
      <div className="hidden gap-8 h-full lg:flex lg:flex-row flex-col items-center justify-between text-lg font-Poppins">
        {navItems.map((item, ind) => {
          const active = item.path === pathname;
          return (
            <Link href={item.path} key={ind} className={pathname==item.path?`text-blue`:``}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
