import React from "react";

export default function IpadMockup({ image }: { image: string }) {
  return (
    <div className="relative mx-auto max-h-[205px] w-[272px] rounded-[2.5rem] border-[14px] border-black bg-black md:max-h-[307px] md:w-[409px]">
      <div className="w-[27px] h-[2px] bg-black absolute bottom-[-15px] left-[74px] rounded-b-lg transform"></div>
      <div className="w-[27px] h-[2px] bg-black absolute bottom-[-15px] left-[107px] rounded-b-lg transform"></div>
      <div className="w-[38px] h-[2px] bg-black absolute top-[-15px] left-[85px] rounded-t-lg transform"></div>

      <div className="w-full h-full overflow-hidden rounded-[2rem] bg-white">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
