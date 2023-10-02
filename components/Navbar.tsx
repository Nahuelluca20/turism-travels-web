import Image from "next/image";
import Link from "next/link";

import TravelSvg from "@/assets/travel-icon.svg";
import ArrowlSvg from "@/assets/arrow-left.svg";

function NavLink({alt, img, route, text}: {alt: string; img: string; route: string; text: string}) {
  return (
    <Link className="flex gap-0 items-center" href={route}>
      <Image alt={alt} height={20} src={img} width={20} />
      {text}
    </Link>
  );
}

function Navbar() {
  return (
    <header className="py-4 px-5 xl:px-0 sticky text-white top-0 bg-slate-700 shadow-lg">
      <nav className="flex w-full max-w-[1300px] mx-auto justify-between">
        <Link className="flex items-center gap-0 font-bold" href={"/"}>
          <Image alt="logo" height={30} src={TravelSvg} width={30} />
          TurimsTravels
        </Link>
        <ul className="flex gap-6">
          <li className="flex gap-0 items-center">
            <NavLink alt="Post" img={ArrowlSvg} route="/" text="Post" />
          </li>
          <li className="flex gap-0 items-center">
            <NavLink alt="Travels" img={ArrowlSvg} route="/travels" text="Travels" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
