import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function ThirdPage() {
  const [modalClass, setModalClass] = useState("modal hidden");
  return (
    <>
      <div className={modalClass}>
        <div className="modal-content relative pl-20 pr-5 py-5 flex flex-col space-y-8">
          <div>
            <p className="text-2xl uppercase m-0">Ключевое сообщение</p>
            <p className="text-7xl uppercase m-0">
              Brend <span className="font-bold">Xy</span>
            </p>
          </div>
          <div className="w-4/5 flex flex-col space-y-6 pl-3">
            <div>
              <p className="text-xl font-bold m-0 text-slate-400">01</p>
              <p className="text-lg m-0">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
            </div>
            <div>
              <p className="text-xl font-bold m-0 text-slate-400">02</p>
              <p className="text-lg m-0">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
            </div>
            <div>
              <p className="text-xl font-bold m-0 text-slate-400">03</p>
              <p className="text-lg m-0">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setModalClass("modal hidden");
            }}
            className="absolute top-0 right-5 text-3xl cursor-pointer"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <div className="px-16 flex flex-col space-y-8">
        <div className="flex flex-col space-y-1">
          <p className="text-3xl uppercase m-0">Ключевое сообщение</p>
          <p className="text-8xl uppercase m-0">
            Brend <span className="font-bold">Xy</span>
          </p>
        </div>
        <div className="flex flex-row space-x-6 w-3/5">
          <div className="px-6 py-4 bg-white rounded-3xl shadow-2xl">
            <p className="text-xl m-0">
              Lorem Ipsum is therefore always free from repetition, injected
              humour, or non-characteristic words etc.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="px-6 py-4 bg-white rounded-3xl shadow-2xl">
              <p className="text-xl m-0">Lorem Ipsum is therefore</p>
            </div>
            <button
              onClick={() => {
                setModalClass("modal block w-full h-screen");
              }}
              className="flex flex-row space-x-4 mt-4 items-center pl-4 pr-7 py-2 rounded-full bg-[#E66889] hover:cursor-pointer"
            >
              <p className="text-2xl text-white bg-black m-0 pb-2.5 pt-1.5 px-4 rounded-full">
                +
              </p>
              <p className="text-2xl m-0 whitespace-nowrap">Подробнее</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdPage;
