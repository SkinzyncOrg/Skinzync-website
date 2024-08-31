import React from "react";
import Image from "next/image";
import LogoBlack from "../../../public/logo-text-black.png";
import { FaHandshake } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function AboutusSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
            About Us
          </h2>
          <div className="text-base font-normal text-gray-500 max-w-sm lg:mx-auto">
            <div className="flex">
              <IoCheckmarkCircle className="text-success text-2xl mr-2" />
              <p>
                พัฒนาสูตรเครื่องสำอางอย่างรวดเร็วและมีประสิทธิภาพ
              </p>
            </div>
            <div className="flex">
              <IoCheckmarkCircle className="text-success text-2xl mr-2" />
              <p>คัดสรรวัตถุดิบคุณภาพเยี่ยมในราคาที่คุ้มค่าที่สุด</p>
            </div>
            <div className="flex">
              <IoCheckmarkCircle className="text-success text-2xl mr-2" />
              <p>ลดต้นทุนและย่นระยะเวลาการผลิต</p>
            </div>
           
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-primary rounded-2xl flex  justify-between flex-row flex-wrap">
              <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                <div className="block">
                  <FaHandshake className="text-white text-3xl" />
                  {/* <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg> */}
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Your Partner in Cosmetic Innovation
                </h3>
                <p className="text-sm font-normal text-gray-300 w-full mb-8 xl:w-64">
                  We revolutionize the way you source and select raw materials
                  for your skincare formulations. As a leading online platform
                  in the cosmetic industry, we provide an extensive database of
                  high-quality ingredients combined with advanced tools to help
                  you create the perfect skincare products.
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  More
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <Image
                  src={LogoBlack}
                  alt="Header tailwind Section"
                  layout="fill"
                  className="h-full ml-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-indigo-500 rounded-2xl p-5  xl:p-8 h-full">
              <div className="block">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <h3 className="py-5 text-white text-2xl font-bold xl:text-xl">
                Our Mission
              </h3>
              <p className="text-sm font-normal text-white mb-8">
                Our mission is simple: To empower cosmetic formulators and
                skincare brands with the best resources and tools to innovate
                and excel. We strive to simplify the complex process of
                ingredient selection and formulation, enabling you to focus on
                what you do best – creating exceptional skincare products.
              </p>
              <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                More
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
