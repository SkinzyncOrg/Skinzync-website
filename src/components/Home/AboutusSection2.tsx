import React from "react";
import { FiUser } from "react-icons/fi";

export default function AboutusSection2() {
  return (
    <section id="about" className="w-full py-12 md:py-24  bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            alt="About Skinzync"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            src="https://placehold.co/550x310"
            height="310"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Skinzync
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Skinzync is revolutionizing the cosmetic industry by combining
              cutting-edge AI technology with premium raw materials. Our mission
              is to empower cosmetic brands and formulators to create
              innovative, safe, and effective products faster than ever before.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiUser className="mr-2 h-4 w-4 text-primary" /> Founded by
                industry experts
              </li>
              <li className="flex items-center">
                <FiUser className="mr-2 h-4 w-4 text-primary" /> Partnered
                with leading laboratories
              </li>
              <li className="flex items-center">
                <FiUser className="mr-2 h-4 w-4 text-primary" /> Committed to
                sustainability
              </li>
            </ul>
            <button className="btn btn-outline w-fit">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
