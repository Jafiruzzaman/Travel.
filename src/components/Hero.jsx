import Image from "next/image";
import React from "react";
import plane from "/public/plane.png"
import HeroForm from "./HeroForm";
const Hero = () => {
  return (
    <main className=" z-20 xl:my-12">
      <section className="container mx-auto  flex items-center justify-between ">
        {/* text */}
        <div className="">
          <span className="text-orangePrimary font-semibold capitalize text-base">
            best destination around the world
          </span>
          <h1 className="h1 xl:text-8xl text-heading">
            Travel to the any corner <br />
            of <span className="highLight">the world</span>.
          </h1>
          <p className="p lg:max-w-[28rem] lowercase">
          we can build the holiday of your dreams and
          make them unforgettable.
          </p>
          <div className="">
            <HeroForm/>
          </div>
        </div>
        {/* image */}
        <div className="z-20">
          <Image src={plane} alt="hero image " className="w-fit absolute right-28 top-20"/>
        </div>
      </section>
    </main>
  );
};

export default Hero;
