import React from "react";

export default function MacMockup({image}: {image: string}) {
  return (
    <div className="">
      <div className="relative mx-auto border-black bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
          <img
        src={image}
        className="h-[156px] md:h-[278px] w-full rounded-lg"
        alt=""
      />
        </div>
      </div>
      <div className="relative mx-auto bg-[#969696] rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-[#727171]"></div>
      </div>
    </div>
  );
}
