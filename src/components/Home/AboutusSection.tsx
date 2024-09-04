import React from "react";

export default function AboutusSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-4xl text-center font-bold text-primary leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
            About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <div className="relative w-full h-auto">
            <div className="rounded-2xl p-2 h-full">
              <h1 className="py-5 text-primary text-2xl font-bold">Skinzync</h1>
              <h3 className="text-primary text-2xl font-bold xl:text-xl">
                Your Partner in Cosmetic Innovation
              </h3>
              <p className="text-sm font-normal text-black mb-8">
                We revolutionize the way you source and select raw materials for
                your skincare formulations. As a leading online platform in the
                cosmetic industry, we provide an extensive database of
                high-quality ingredients combined with advanced tools to help
                you create the perfect skincare products.
              </p>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="rounded-2xl p-2 h-full">
              <h1 className="py-5 text-primary text-2xl font-bold">
                Our Mission
              </h1>
              <p className="text-sm font-normal text-black mb-8">
                Our mission is simple: To empower cosmetic formulators and
                skincare brands with the best resources and tools to innovate
                and excel. We strive to simplify the complex process of
                ingredient selection and formulation, enabling you to focus on
                what you do best – creating exceptional skincare products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
