import React from 'react'
import { useRouter } from 'next/navigation';
import { LuSparkles } from "react-icons/lu";

export default function AIlanding() {
  const router = useRouter();
  return (
    <section className="w-full mx-auto py-12 md:py-24 bg-gray-100">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <img
          alt="AI Formulation"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          height="310"
          src="https://placehold.co/550x310"
          width="550"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              AI - Powered Formulation
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our cutting-edge AI technology helps you create custom
              cosmetic formulations in minutes. Input your desired
              properties, and let our AI do the rest.
            </p>
            <ul className="space-y-2">
                  <li className="flex items-center"><LuSparkles className="mr-2 h-4 w-4 text-primary" /> Instant formula generation</li>
                  <li className="flex items-center"><LuSparkles className="mr-2 h-4 w-4 text-primary" /> Ingredient optimization</li>
                  <li className="flex items-center"><LuSparkles className="mr-2 h-4 w-4 text-primary" /> Compliance checking</li>
                </ul>
            <button className="btn bg-[#fbc2eb] hover:bg-[#f48fb1]" onClick={()=>router.push("formulation")}>
              Start Formulating
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
