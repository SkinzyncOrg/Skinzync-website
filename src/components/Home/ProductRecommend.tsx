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
              name="Cocamidopropyl betaine"
              functions="Cleansers"
              description="A mild surfactant from coconut oil, used as a foam booster."
              image="https://res.cloudinary.com/dtomkzlym/image/upload/v1725221684/ddp6ebprqv96fqddcnzg.png"
            />
            <ProductItem
              name="Glyceryl Glucoside"
              functions="Moisturizers"
              description="A moisturizer that enhances skin hydration."
              image="https://res.cloudinary.com/dtomkzlym/image/upload/v1725291687/dicvhim5jo7pgdajwzv8.jpg"
            />
            <ProductItem
              name="Glycerin 99.5%"
              functions="Humectants"
              description="A humectant that helps maintain skin moisture."
              image="https://res.cloudinary.com/dtomkzlym/image/upload/v1725470825/Glycerin_99.5_dnnop2.jpg"
            />
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
