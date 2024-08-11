import Link from "next/link";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import DesktopNav from "./DesktopNav";
import Button from "./Button";
import Image from "next/image";
import blob from "/public/svg/blob.svg";
import plane from "/public/plane.png";
const Header = () => {
  return (
    <header className="bg-bgPrimary py-4 md:py-5 lg:py-6 xl:py-8">
      <nav className="container mx-auto flex items-center justify-between z-10">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1">
          <FaPaperPlane className="text-4xl text-orangePrimary " />
          <span className="text-3xl font-merriweather text-heading font-extrabold capitalize">
            travel
          </span>
        </Link>
        {/* desktop nav */}
        <div className="hidden md:flex">
          <DesktopNav />
        </div>
        {/* button */}
        <div className="hidden md:flex z-10">
          <Button
            style={`bg-white text-orangePrimary text-base`}
            text={`book now`}
          />
        </div>
        <div className="absolute top-0 right-0 -z-0 w-fit">
          <Image src={blob} alt="blob" className="xl:w-fit h-full" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
