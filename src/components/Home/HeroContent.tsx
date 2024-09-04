import React from "react";
import { FaShop, FaFlaskVial, FaCalculator } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Background from "../../../public/bg.png";

export default function HeroContent() {
  const router = useRouter();
  return (
    <section
      className="w-full min-h-screen "
      //  Add the bg-purple-500
      // style={{
      //   backgroundImage:
      //     "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      // }}
      // from-violet-600 to-indigo-600
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div className="mt-48 text-center w-full">
          <h1 className="text-2xl font-bold text-white max-w-md md:max-w-2xl mx-auto">
            Creating a Future
          </h1>
          <h2 className="text-4xl md:text-5xl text-center font-bold text-white py-4">
            Where Beauty Meets Innovation
          </h2>
        </div>
        {/* Search */}
        {/* <div className="my-10 mx-auto max-w-xl relative">
          <form>
            <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
              <div className="w-full">
                <input
                  type="text"
                  name="searchProduct"
                  className="input py-2.5 px-4 block w-full border-transparent rounded-lg focus:ring-0 focus:border-0"
                  placeholder="Search products, categories, and more"
                />
              </div>
              <div>
                <button
                  className="size-[46px] btn btn-square rounded-lg text-white btn-primary  focus:ring-offset-4"
                  type="submit"
                >
                  <svg
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div> */}
        {/* <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-evenly lg:gap-x-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600"
            onClick={() => router.push("product")}
            >
              <FaShop
                className="text-indigo-600 transition-all duration-500 group-hover:text-white group-hover:scale-110"
                size={30}
              />
            </div>

            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              E-commerce
            </h4>
            <p className="text-sm font-normal text-gray-500">
              คำแนะนำด้านกฎระเบียบเครื่องสำอาง
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600"
            onClick={() => router.push("formulation")}
            >
              <FaFlaskVial
                className="text-pink-600 transition-all duration-500 group-hover:text-white group-hover:scale-110"
                size={30}
              />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Formulation
            </h4>
            <p className="text-sm font-normal text-gray-500">
            คิดค้นสูตรเครื่องสำอาง
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600"
            onClick={() => router.push("formulation")}
            >
            <FaCalculator className="text-teal-600 transition-all duration-500 group-hover:text-white group-hover:scale-110"
                size={30} />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Calculate Cost
            </h4>
            <p className="text-sm font-normal text-gray-500">
            ประเมินค่าใช้จ่ายในการจัดซื้อ
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
