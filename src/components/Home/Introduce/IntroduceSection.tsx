import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import MacMockup from "./MacMockup";
import IpadMockup from "./IpadMockup";

export default function IntroduceSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#CC99DE] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[#9E63B3] tracking-tighter sm:text-5xl">
              Who is <span className="text-primary">Skinzync</span>
            </h2>
            <p className="mx-auto max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Skinzync is redefining cosmetic R&D with AI-driven innovation. We
              provide tools that enable cosmetic brands and manufacturers to
              optimize their product development processes, reduce waste, and
              bring the highest quality skincare products to market with
              unprecedented efficiency. With a deep commitment to innovation,
              sustainability, and excellence
            </p>
          </div>
        </div>
        {/* <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <img
              alt="Essential Oils"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              src="https://placehold.co/200x200"
              height="200"
              width="200"
            />
            <h3 className="text-xl font-bold">Essential Oils</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Pure, natural essential oils for fragrance and therapeutic
              properties.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <img
              alt="Active Ingredients"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              src="https://placehold.co/200x200"
              height="200"
              width="200"
            />
            <h3 className="text-xl font-bold">Active Ingredients</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cutting-edge active ingredients for effective skincare
              formulations.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <img
              alt="Natural Extracts"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              src="https://placehold.co/200x200"
              height="200"
              width="200"
            />
            <h3 className="text-xl font-bold">Natural Extracts</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Botanical extracts to enhance the efficacy of your products.
            </p>
          </div>
        </div> */}
        <div className="flex justify-around my-10">
          <div className="hidden md:flex">
            <IpadMockup image="https://placehold.co/1024x768" />
          </div>
          <div className="md:absolute md:z-10 w-full h-full md:mt-10">
            <MacMockup image="https://placehold.co/1500x842" />
          </div>
          <div className="hidden md:flex">
            <IpadMockup image="https://placehold.co/1024x768" />
          </div>
        </div>

        <div className="text-lg font-normal text-gray-500 max-w-lg lg:mx-auto space-y-2 md:mt-20">
          <BenefitItem>
            <span className="text-primary font-bold">Efficiently </span>
            develop Cosmetic formulations
          </BenefitItem>
          <BenefitItem>
            Select{" "}
            <span className="text-primary font-bold">
              suitable ingredients{" "}
            </span>
            at the best possible price
          </BenefitItem>
          <BenefitItem>
            <span className="text-primary font-bold">Reduce </span>
            production costs and{" "}
            <span className="text-primary font-bold">time</span>
          </BenefitItem>
        </div>
      </div>
    </section>
  );
}

const BenefitItem = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-[auto,1fr] gap-2 items-start ">
    <div className="flex items-center justify-center">
      <FiCheckCircle className="text-primary w-6 h-6" />
    </div>
    <p>{children}</p>
  </div>
);
