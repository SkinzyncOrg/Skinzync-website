import React from "react";
import { useRouter } from "next/navigation";
import { FaShop, FaFlaskVial, FaCalculator } from "react-icons/fa6";

export default function ProductRecommend() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Premium Raw Materials
            </h2>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our vast selection of high-quality raw materials for your
              cosmetic creations. From essential oils to active ingredients,
              we've got you covered.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
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

          {/* <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
            <div>
              <img
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="w-full object-cover"
                alt=""
              />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
            <div className="absolute inset-x-0 bottom-0 z-20 p-4">
              <p className="mb-1 text-sm text-white text-opacity-80">
                Andrea Felsted • <time>18 Nov 2022</time>
              </p>
              <h3 className="text-xl font-medium text-white">
                Migrating to Sailboat UI
              </h3>
              <p className="mt-1 text-white text-opacity-80">
                Sailboat UI is a modern UI component library for Tailwind CSS.
                Get started with 150+ open source components.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center">
          <button
            className="btn bg-[#fbc2eb] hover:bg-[#f48fb1]"
            onClick={() => router.push("product")}
          >
            <FaShop className="mr-2 h-4 w-4" />
            Shop All Materials
          </button>
        </div>
      </div>
    </section>
  );
}
