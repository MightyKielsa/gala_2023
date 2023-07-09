"use client";
import React from "react";
import LoginBox from "@/components/LoginBox/LoginBox";
import Carousel from "@/components/Carousel/Carousel";

const Logging = () => {
  return (
    <div className="flex h-full w-full justify-evenly items-center">
      <div className="flex flex-col w-1/3">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Gala Spierdolenia
          </span>{" "}
          2023
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          The ultimate experience
        </p>
        <Carousel />
      </div>
      <LoginBox width="w-1/3" height="h-1/2" />
    </div>
  );
};

export default Logging;
