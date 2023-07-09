import React from "react";
import { LinearChart } from "@/components/LinearChart/LinearChart";
import WinnersList from "@/components/WinnersList/WinnersList";

const Main = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Gala Spierdolenia
        </span>{" "}
        2023
      </h1>

      <div className="w-1/2 max-h-96">
        <LinearChart></LinearChart>
        <LinearChart></LinearChart>
      </div>
      <div className="w-1/2 max-h-96">
        <WinnersList></WinnersList>
      </div>
    </div>
  );
};

export default Main;
