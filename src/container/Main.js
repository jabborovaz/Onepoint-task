import React from "react";
import { GrHome } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import logo from "../images/onpoint.PNG";

function Main() {
  return (
    <div className="background-gradient h-screen flex flex-col justify-between overflow-auto">
      <div className="flex flex-row items-center space-x-6 px-16 py-7">
        <div className="pr-6 border-r-2 text-2xl m-0 border-r-black">
          <GrHome />
        </div>
        <p className="text-2xl m-0">PROJECT</p>
      </div>
      <div className="px-16 flex flex-col space-y-4">
        <p className="text-3xl uppercase m-0">Привет,</p>
        <p className="text-8xl uppercase m-0">
          Это <span className="font-bold">не</span>
        </p>
        <p className="text-8xl uppercase m-0">Коммерческое</p>
        <div className="flex flex-row space-x-8 items-center">
          <p className="text-8xl uppercase m-0">Задание</p>
          <div className="flex flex-row space-x-4 mt-4 items-center pl-4 pr-7 py-2 rounded-full bg-[#E66889]">
            <div className="text-2xl text-white bg-black m-0 p-4 rounded-full">
              <BsArrowRight />
            </div>
            <p className="text-2xl m-0">Что дальше?</p>
          </div>
        </div>
      </div>
      <div className="px-16 py-4">
        <img src={logo} alt="onpoint" />
      </div>
    </div>
  );
}

export default Main;
