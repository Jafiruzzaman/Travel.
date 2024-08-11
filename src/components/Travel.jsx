import React from "react";
import Common from "./Common";
import Image from "next/image";
import greenGrid from "/public/svg/green.svg";
import { travelData } from "../../Data";
const Travel = () => {
  return (
    <section className="bg-bgSecondary pb-12 relative">
      <div className="-left-[2rem] top-5 absolute">
        <Image src={greenGrid} alt="green grid blob" />
      </div>
      <div className="container mx-auto xl:py-12">
        <Common
          spanText={`travel type`}
          headingText={`what type of travel do we specialized in?`}
          headingStyle={`font-semibold text-3xl xl:max-w-[22rem] font-semibold text-heading`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {travelData.map((item, index) => {
            return (
              <div
                className="relative overflow-hidden cursor-pointer group-hover:top-4"
                key={index}
              >
                <span className="top-4 left-4 absolute bg-orangePrimary text-white px-6 py-3 rounded-lg font-bold">
                  {item.text}
                </span>
                <Image
                  src={item.image}
                  alt="travel image"
                  className="w-fit rounded-3xl h-[400px] bg-cover"
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Travel;
