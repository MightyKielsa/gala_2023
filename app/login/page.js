"use client";
import React from "react";
import LoginBox from "@/components/LoginBox/LoginBox";
import Carousel from "@/components/Carousel/Carousel";

const Logging = () => {
  return (
    <div className="flex justify-evenly h-full w-screen">
      <div className="flex flex-col items-center w-1/2 h-full">
        <h1>GALA SPIERDOLENIA 2023</h1>
        <Carousel />
      </div>
      <LoginBox width="w-1/2" height="h-1/2" />
    </div>
  );
};

export default Logging;
