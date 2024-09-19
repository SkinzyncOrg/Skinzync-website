import React from "react";
import { physicalAppearance, specificFunction, targetGroup } from '../../../constants/formData';
import MainForm from "./MainForm";

const sections = [
  {
    title: "Physical Appearances",
    fields: physicalAppearance,
  },
  {
    title: "Specific Function",
    fields: specificFunction,
  },
  {
    title: "Target Group",
    fields: targetGroup,
  }
];

export default function FormulationPage() {
  return (
    <div className="mx-auto space-y-4 py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-5xl text-primary">S K I N C A R E</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="mr-4 text-primary">Formulation type</p>
        <select className="select select-primary select-sm w-full max-w-52 rounded-2xl">
          <option disabled selected>
            What is this?
          </option>
          <option>Leave On</option>
          <option>Rinse Off</option>
        </select>
      </div>
      <div className="flex flex-row space-x-4">
      <img
          alt="AI Formulation"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          height="310"
          src="https://placehold.co/550x310"
          width="550"
        />
         <img
          alt="AI Formulation"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          height="310"
          src="https://placehold.co/550x310"
          width="550"
        />
         <img
          alt="AI Formulation"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          height="310"
          src="https://placehold.co/550x310"
          width="550"
        />
      </div>
      {/* <MainForm sections={sections} /> */}
      <h1 className="text-5xl text-center">Coming Soon</h1>
    </div>
  );
}
