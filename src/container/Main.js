import React from "react";
import { useState } from "react";
import { GrHome } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import logo from "../images/onpoint.PNG";

function Main() {
  return (
    <>
      <div className="background-gradient h-screen w-full flex flex-col justify-between">
        <div className="relative">
          <div className="pr-4 border-r-2 text-2xl m-0 fixed top-7 left-24 border-r-black">
            <GrHome />
          </div>
          <p className="text-2xl m-0 fixed top-6 left-40">PROJECT</p>
        </div>
        <div className="px-16 flex flex-col space-y-4">
          <p className="text-3xl uppercase m-0">Привет,</p>
          <p className="text-8xl uppercase m-0">
            Это <span className="font-bold">не</span>
          </p>
          <p className="text-8xl uppercase m-0">Коммерческое</p>
          <div className="flex flex-row space-x-8 items-center">
            <p className="text-8xl uppercase m-0">Задание</p>
            <button className="flex flex-row space-x-4 mt-4 items-center pl-4 pr-7 py-2 rounded-full bg-[#E66889] hover:cursor-pointer">
              <div className="text-2xl text-white bg-black m-0 p-4 rounded-full">
                <BsArrowRight />
              </div>
              <p className="text-2xl m-0 whitespace-nowrap">Что дальше?</p>
            </button>
          </div>
        </div>
        <div className="px-16 py-4 relative">
          <img className="fixed left-16 bottom-3" src={logo} alt="onpoint" />
        </div>
      </div>

      {/* <div className="first-slider-gradient h-screen flex flex-col justify-center">
        <div className="px-16 flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <p className="text-3xl uppercase m-0">Текст</p>
            <p className="text-3xl uppercase m-0">Сообщения</p>
          </div>
          <div className="w-4/5 scroll-text bg-white rounded-2xl shadow-2xl overflow-y-scroll px-5 py-4">
            <p className="text-direction">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Main;
