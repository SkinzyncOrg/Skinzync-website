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
    <div className="m-2 space-y-4 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-5xl text-primary">S K I N C A R E</h1>
      <div className="flex flex-row items-center justify-center">
        <p className="mr-4 text-primary">Formulation type</p>
        <select className="select select-primary select-sm w-full max-w-52 rounded-2xl">
          <option disabled selected>
            What is this?
          </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
      </div>
      <div className="flex flex-row space-x-4">
      <div>Photo</div>
      <div>photo</div>
      <div>photo</div>
      </div>
      <MainForm sections={sections} />
    </div>
  );
}
