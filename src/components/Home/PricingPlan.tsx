"use client";
import React from "react";
import PricingCard from "./PricingCard";
import {
  getSkinZyncPro,
  getSkinZyncPremium,
  getSkinZyncSupply,
} from "@/constants/planData";

export default function PricingPlan() {
  const handleProSubmit = () => {
    console.log("SkinZync Pro plan selected");
    alert("SkinZync Pro plan purchased!");
  };

  const handlePremiumPlanSubmit = () => {
    console.log("Family Plan selected");
    alert("Family Plan purchased!");
  };

  const handleSupplyPlanSubmit = () => {
    console.log("Corporate Plan selected");
    alert("Corporate Plan purchased!");
  };

  return (
    <section className="w-full px-4 py-12 bg-gray-100 ">
      
      <div className="flex mx-auto items-center ">
        {/* <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-12 h-12 mb-2 mr-2"
        >
          <path d="M30.68,7.762c-.839-.669-1.929-.914-2.994-.669-1.135,.26-2.084,1.11-2.478,2.218-.135,.381-.205,.769-.209,1.153-1.938-.294-4.625-1.466-6.496-3.527,.866-.888,1.217-2.2,.847-3.468-.332-1.135-1.249-2.032-2.395-2.341-1.085-.294-2.209-.077-3.083,.592-.873,.668-1.373,1.682-1.373,2.78,0,.92,.371,1.792,.998,2.436-1.872,2.062-4.559,3.234-6.498,3.528-.004-.385-.074-.772-.209-1.153-.393-1.108-1.343-1.958-2.478-2.218-1.065-.245-2.155,0-2.994,.669-.839,.668-1.32,1.667-1.32,2.738,0,1.624,1.101,2.988,2.614,3.379l2.386,8.262v3.858c0,1.654,1.346,3,3,3H24c1.654,0,3-1.346,3-3v-3.858l2.386-8.262c1.513-.391,2.614-1.756,2.614-3.379,0-1.072-.481-2.07-1.32-2.738Zm-6.68,19.238H8c-.551,0-1-.449-1-1v-3H25v3c0,.551-.449,1-1,1Zm4.561-15.009c-.43,.018-.8,.308-.92,.722l-2.393,8.288H6.752l-2.393-8.288c-.12-.414-.49-.704-.92-.722-.807-.033-1.439-.688-1.439-1.491,0-.459,.207-.887,.566-1.174,.27-.215,.592-.326,.932-.326,.121,0,.244,.014,.368,.042,.468,.107,.876,.476,1.04,.938,.137,.387,.122,.769-.044,1.136-.136,.3-.116,.646,.054,.928s.466,.462,.794,.483c2.496,.157,7.239-1.352,10.032-5.184,.175-.241,.234-.547,.161-.835-.074-.289-.272-.529-.541-.657-.532-.252-.863-.77-.863-1.35,0-.471,.215-.905,.589-1.192,.38-.292,.858-.38,1.346-.249,.469,.127,.86,.508,.996,.971,.254,.871-.233,1.554-.794,1.82-.269,.128-.467,.369-.541,.657-.073,.289-.014,.595,.161,.835,2.792,3.833,7.545,5.341,10.032,5.184,.328-.021,.625-.201,.794-.483s.189-.628,.054-.928c-.166-.367-.181-.749-.044-1.136,.164-.462,.572-.831,1.04-.938,.473-.108,.936-.007,1.301,.284,.36,.287,.566,.715,.566,1.174,0,.803-.632,1.458-1.439,1.491Z"></path>
          <path d="M17.139,11.292c-.571-.667-1.708-.665-2.277,0l-2.063,2.407c-.646,.754-.646,1.849,0,2.603l2.062,2.405c.285,.333,.7,.525,1.139,.525s.854-.191,1.139-.524l2.063-2.407c.646-.754,.646-1.849,0-2.603l-2.063-2.406Zm-1.139,5.671l-1.683-1.963,1.683-1.963,1.683,1.963-1.683,1.963Z"></path>
        </svg> */}

        <h2 className="text-3xl font-bold lg:text-4xl w-full text-center">Explore Our Courses</h2>
      </div>

      <div className="py-12 overflow-x-auto">
        <div className="flex flex-col gap-6 snap-x snap-mandatory place-items-center pb-10 md:px-10 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Render the three cards using the reusable PricingCard component */}
          <PricingCard {...getSkinZyncPro()} onSubmit={handleProSubmit} />
          <PricingCard
            {...getSkinZyncPremium()}
            onSubmit={handlePremiumPlanSubmit}
          />
          <PricingCard
            {...getSkinZyncSupply()}
            onSubmit={handleSupplyPlanSubmit}
          />
        </div>
      </div>
    </section>
  );
}
