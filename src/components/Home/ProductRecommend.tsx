import React from "react";
import { useRouter } from "next/navigation";
import { FaShop, FaFlaskVial, FaCalculator } from "react-icons/fa6";
import ProductItem from "./ProductItem";

export default function ProductRecommend() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#CC99DE] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Explore
            </h2>
            <p className="mx-auto max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our vast selection of high-quality raw materials for your
              cosmetic creations. From essential oils to active ingredients,
              we've got you covered.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <ProductItem
            name="Essential Oils"
            functions="Fragrance & Therapeutic"
            description="Pure, natural essential oils for fragrance."
            image="https://placehold.co/200x200"
          />
          <ProductItem
            name="Active Ingredients"
            functions="Cutting-edge Skincare"
            description="Cutting-edge active ingredients for effective skincare formulations."
            image="https://placehold.co/200x200"
          />
          <ProductItem
            name="Natural Extracts"
            functions="Botanical Extracts"
            description="Botanical extracts for natural skincare formulations."
            image="https://placehold.co/200x200"/>
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
