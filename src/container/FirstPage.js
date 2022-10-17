import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function FirstPage() {
  return (
    <div className="px-16 flex flex-col space-y-4">
      <p className="text-3xl uppercase m-0">Привет,</p>
      <p className="text-8xl uppercase m-0">
        Это <span className="font-bold">не</span>
      </p>
      <p className="text-8xl uppercase m-0">Коммерческое</p>
      <div className="flex flex-row space-x-8 items-center">
        <p className="text-8xl uppercase m-0">Задание</p>
        <Link
          to="/secondPage"
          className="flex flex-row space-x-4 mt-4 items-center pl-4 pr-7 py-2 rounded-full bg-[#E66889] hover:cursor-pointer"
        >
          <div className="text-2xl text-white bg-black m-0 p-4 rounded-full">
            <BsArrowRight />
          </div>
          <p className="text-2xl m-0 whitespace-nowrap">Что дальше?</p>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
